# Sim IDX TypeScript Library

A TypeScript library for writing Sim IDX apps with support for Drizzle ORM and Hono framework.

## Installation

```bash
pnpm install sim-idx
```

## Usage

```typescript
import { App, db, types } from 'sim-idx';

// Your Sim IDX app code here
```

## Requirements

This library requires the following peer dependencies:
- `drizzle-orm` >=0.44.0

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build

# Format code
pnpm run fix:prettier
```

## License

MIT