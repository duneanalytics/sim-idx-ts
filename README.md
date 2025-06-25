# @duneanalytics/sim-idx

[![npm version](https://badge.fury.io/js/%40duneanalytics%2Fsim-idx.svg)](https://badge.fury.io/js/%40duneanalytics%2Fsim-idx)
[![npm downloads](https://img.shields.io/npm/dm/@duneanalytics/sim-idx)](https://www.npmjs.com/package/@duneanalytics/sim-idx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://github.com/duneanalytics/sim-idx-ts/actions/workflows/on-pull-request.yml/badge.svg)](https://github.com/duneanalytics/sim-idx-ts/actions/workflows/on-pull-request.yml)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)


A TypeScript library for writing Sim IDX apps.

## Installation

```bash
npm install @duneanalytics/sim-idx
# or
yarn add @duneanalytics/sim-idx
# or
pnpm add @duneanalytics/sim-idx
```
## API Reference

### App Creation

```typescript
import { create } from '@duneanalytics/sim-idx';

interface Env {
  CUSTOM_VAR: string;
}

const c = create<Env>();
```

### Database Client

```typescript
import { db } from '@duneanalytics/sim-idx';

// Get database client from Hono context
const client = db.client(context);
```

### Blockchain Types

```typescript
import { address, bytes32, uint256, int256 } from '@duneanalytics/sim-idx';
import { Address, Bytes, Uint, Int } from '@duneanalytics/sim-idx';

// Address type
const walletAddress = address('wallet_address');

// Bytes types (1-32 bytes)
const hash = bytes32('transaction_hash');
const shortData = bytes16('short_data');

// Integer types
const balance = uint256('balance');
const signedValue = int256('signed_value');
```

## Environment Variables

The library expects these environment variables:

- `DB_CONNECTION_STRING`: Your database connection string

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build the library
pnpm build

# Lint code
pnpm lint

# Format code
pnpm fix:prettier
```

## Deploying

If you have the power to deploy, you can run the following commands to deploy the package to the npm registry:

**⚠️ Important: Only deploy from the `main` branch**

1. Tag a new version of the package:

```bash
npm version <patch|minor|major>
```

2. Push the tag to the remote repository:
```bash
git push --tags
```

3. Publish the package to the npm registry:

```bash
npm publish
```

4. Update the [CHANGELOG.md](CHANGELOG.md) with the changes for this version.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📖 [Documentation](https://github.com/duneanalytics/sim-idx-ts#readme)
- 🐛 [Report a bug](https://github.com/duneanalytics/sim-idx-ts/issues)
- 💬 [Discussions](https://github.com/duneanalytics/sim-idx-ts/discussions)
