import { PGlite } from '@electric-sql/pglite';
import { PGLiteSocketServer } from '@electric-sql/pglite-socket';
import { client } from '../../db';
import pg from 'pg';
import { sql } from 'drizzle-orm';

describe('postgres', () => {
	let db: PGlite;
	let server: PGLiteSocketServer;
	let connectionString!: string;
	beforeAll(async () => {
		db = await PGlite.create();
		// Create and start a socket server
		// TODO: Make this resilient to port conflicts
		const port = Math.floor(Math.random() * 10000) + 30000; // Random port between 30000 and 40000
		server = new PGLiteSocketServer({
			db,
			port,
			host: '127.0.0.1',
		});
		await server.start();
		connectionString = `postgres://user:password@localhost:${port}/template1?sslmode=disable`;
	});

	afterAll(async () => {
		await server?.stop();
		await db?.close();
	});

	describe('test-setup', () => {
		it('should handle plain pg client connections', async () => {
			const client = new pg.Client(connectionString);
			await client.connect();
			const result = await client.query('select 1 c');
			expect(result.rows).toEqual([{ c: 1 }]);
			await client.end();
		});
	});

	describe('drizzle-orm', () => {
		it('should work with custom client from db.ts', async () => {
			const c = client({
				env: {
					DB_CONNECTION_STRING: connectionString,
					HYPERDRIVE: {
						connectionString: connectionString,
					},
				},
			});
			const result = await c.execute(sql`select 1 c`.as<number>());
			expect(result.rows).toEqual([{ c: 1 }]);
			if (c.$client instanceof pg.Client) {
				await c.$client.end();
			}
			if (c.$client instanceof pg.Pool) {
				await c.$client.end();
			}
		});
	});
});
