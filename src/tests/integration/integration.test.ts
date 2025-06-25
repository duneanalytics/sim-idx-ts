import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { execSync } from 'child_process';
import { readFileSync, existsSync, rmSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const TEST_DIR_NAME = '.integration_test';
const EXPECTED_FILES = [
	'LICENSE',
	'README.md',
	'dist/index.d.mts',
	'dist/index.d.ts',
	'dist/index.js',
	'dist/index.js.map',
	'dist/index.mjs',
	'dist/index.mjs.map',
	'package.json',
];

const testFile = `
      import { App, db, types } from '@duneanalytics/sim-idx';
      // Test that imports work
      const app = App.create();

      console.log('✅ All imports working correctly');
      console.log('App:', typeof app);
`;

describe(
	'Integration Tests',
	() => {
		let testDir: string;
		let libOutput: string;

		beforeAll(() => {
			// Clean up any previous test artifacts
			testDir = join(process.cwd(), TEST_DIR_NAME);
			if (existsSync(testDir)) {
				rmSync(testDir, { recursive: true, force: true });
			}

			mkdirSync(testDir);
			libOutput = execSync(`npm pack --pack-destination ${testDir}`, {
				encoding: 'utf8',
				cwd: process.cwd(),
			});
		});

		afterAll(() => {
			if (existsSync(testDir)) {
				rmSync(testDir, { recursive: true, force: true });
			}
		});

		describe('npm pack', () => {
			it('should create a valid npm package', () => {
				// Extract the package name from output (e.g., "duneanalytics-sim-idx-1.0.0.tgz")
				const packageName = libOutput.trim();

				// Check that the output contains the expected package name
				expect(packageName).toMatch(/duneanalytics-sim-idx-\d+\.\d+\.\d+\.tgz/);

				// Check that the package file exists
				expect(existsSync(join(testDir, packageName))).toBe(true);
			});

			it('should include only necessary files in the package', () => {
				// Create the package
				const packageName = libOutput.trim();

				// Extract the package to inspect contents
				execSync(`tar -xzf ${join(testDir, packageName)} -C ${testDir}`, { encoding: 'utf8' });

				// Check that package.json exists in the extracted directory
				const extractedPackageJson = join(testDir, 'package', 'package.json');
				expect(existsSync(extractedPackageJson)).toBe(true);

				// Read the package.json to verify it's correct
				const packageJson = JSON.parse(readFileSync(extractedPackageJson, 'utf8'));
				expect(packageJson.name).toBe('@duneanalytics/sim-idx');

				// Check that all expected files exist
				EXPECTED_FILES.forEach((file) => {
					const filePath = join(testDir, 'package', file);
					expect(existsSync(filePath), `Missing expected file: ${file}`).toBe(true);
				});

				// Get all files in the package recursively
				const getAllFiles = (dir: string, baseDir: string = dir): string[] => {
					const files: string[] = [];
					const items = readdirSync(dir, { withFileTypes: true });

					for (const item of items) {
						const fullPath = join(dir, item.name);
						const relativePath = fullPath.replace(baseDir + '/', '');

						if (item.isDirectory()) {
							files.push(...getAllFiles(fullPath, baseDir));
						} else {
							files.push(relativePath);
						}
					}

					return files;
				};

				const packageRoot = join(testDir, 'package');
				const allFiles = getAllFiles(packageRoot);

				// Check that only expected files are present (no extra files)
				const unexpectedFiles = allFiles.filter((file) => !EXPECTED_FILES.includes(file));

				if (unexpectedFiles.length > 0) {
					// eslint-disable-next-line no-console
					console.log('Unexpected files found:', unexpectedFiles);
				}

				expect(unexpectedFiles.length).toBe(0);

				// Clean up
				rmSync(packageName, { force: true });
				rmSync(join(testDir, 'package'), { recursive: true, force: true });
			});
		});

		describe('Build artifacts', () => {
			it('should generate all required build files', () => {
				// Run build
				execSync('npm run build', {
					encoding: 'utf8',
					cwd: process.cwd(),
				});

				const distPath = join(process.cwd(), 'dist');

				// Check that dist folder exists
				expect(existsSync(distPath)).toBe(true);

				// Check for all required files
				const requiredFiles = ['index.js', 'index.mjs', 'index.d.ts', 'index.js.map', 'index.mjs.map'];

				requiredFiles.forEach((file) => {
					const filePath = join(distPath, file);
					expect(existsSync(filePath), `Missing file: ${file}`).toBe(true);
				});
			});
		});

		describe('Package installation', () => {
			it('should install and work in a test project', () => {
				const packageName = libOutput.trim();

				// Create package.json for test project
				const testPackageJson = {
					name: 'test-project',
					version: '1.0.0',
					type: 'module',
					dependencies: {
						'@duneanalytics/sim-idx': `file:./${packageName}`,
					},
				};

				writeFileSync(join(testDir, 'package.json'), JSON.stringify(testPackageJson, null, 2));

				// Write test file using Node.js fs
				writeFileSync(join(testDir, 'test.js'), testFile);

				// Install the local package
				execSync('npm install', {
					encoding: 'utf8',
					cwd: testDir,
				});

				// Test that the package can be imported
				const output = execSync('node test.js', {
					encoding: 'utf8',
					cwd: testDir,
				});

				expect(output).toContain('✅ All imports working correctly');
				expect(output).toContain('App: object');
			});
		});

		describe('Package.json validation', () => {
			it('should have correct package.json configuration', () => {
				const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));

				// Check required fields
				expect(packageJson.name).toBe('@duneanalytics/sim-idx');
				expect(packageJson.version).toBeDefined();
				expect(packageJson.description).toBeDefined();
				expect(packageJson.license).toBe('MIT');
				expect(packageJson.private).toBe(false);

				// Check entry points
				expect(packageJson.main).toBe('dist/index.js');
				expect(packageJson.module).toBe('dist/index.mjs');
				expect(packageJson.types).toBe('dist/index.d.ts');

				// Check exports
				expect(packageJson.exports).toBeDefined();
				expect(packageJson.exports['.']).toBeDefined();
				expect(packageJson.exports['.'].import).toBe('./dist/index.mjs');
				expect(packageJson.exports['.'].require).toBe('./dist/index.js');
				expect(packageJson.exports['.'].types).toBe('./dist/index.d.ts');

				// Check files array
				expect(packageJson.files).toContain('dist');

				// Check publishConfig
				expect(packageJson.publishConfig.access).toBe('public');
			});
		});

		describe('Bundle size', () => {
			it('should have reasonable bundle size', () => {
				execSync('npm run build', {
					encoding: 'utf8',
					cwd: process.cwd(),
				});

				const distPath = join(process.cwd(), 'dist');

				// Check file sizes
				const cjsSize = readFileSync(join(distPath, 'index.js')).length;
				const esmSize = readFileSync(join(distPath, 'index.mjs')).length;
				const dtsSize = readFileSync(join(distPath, 'index.d.ts')).length;

				// Bundle should be reasonable size (less than 1MB)
				expect(cjsSize).toBeLessThan(1024 * 1024);
				expect(esmSize).toBeLessThan(1024 * 1024);

				// Type definitions should exist
				expect(dtsSize).toBeGreaterThan(0);

				// eslint-disable-next-line no-console
				console.log(
					`Bundle sizes - CJS: ${(cjsSize / 1024).toFixed(1)}KB, ESM: ${(esmSize / 1024).toFixed(1)}KB, DTS: ${(dtsSize / 1024).toFixed(1)}KB`,
				);
			});
		});
	},
	{
		timeout: 30_000,
	},
);
