import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';
import * as drizzle_orm_node_postgres from 'drizzle-orm/node-postgres';
import { drizzle as drizzle$1 } from 'drizzle-orm/node-postgres';
import * as _neondatabase_serverless from '@neondatabase/serverless';
import * as drizzle_orm_neon_http from 'drizzle-orm/neon-http';
import { drizzle } from 'drizzle-orm/neon-http';
import { DrizzleConfig } from 'drizzle-orm';
import { Context, Hono } from 'hono';
import { Pool } from 'pg';
import * as hono_types from 'hono/types';
import { HonoOptions } from 'hono/hono-base';

declare class Address {
    address: Buffer;
    constructor(address: Buffer);
    toJSON(): string;
    static from(s: string): Address;
}
declare class Bytes {
    data: Buffer;
    constructor(data: Buffer);
    toJSON(): string;
    static from(s: string): Bytes;
}
declare class Uint {
    value: bigint;
    constructor(value: bigint);
    toJSON(): string;
}
declare class Int {
    value: bigint;
    constructor(value: bigint);
    toJSON(): string;
}

type types_Address = Address;
declare const types_Address: typeof Address;
type types_Bytes = Bytes;
declare const types_Bytes: typeof Bytes;
type types_Int = Int;
declare const types_Int: typeof Int;
type types_Uint = Uint;
declare const types_Uint: typeof Uint;
declare namespace types {
  export { types_Address as Address, types_Bytes as Bytes, types_Int as Int, types_Uint as Uint };
}

declare function extractSearchPathFromConnectionString(connectionString: string): string | null;
interface ClientBindings {
    HYPERDRIVE?: {
        connectionString: string;
    };
    DB_CONNECTION_STRING?: string;
}
interface DbContext {
    __drizzleClients: Map<string, ReturnType<typeof drizzle | typeof drizzle$1>>;
    __pools: Map<string, Pool>;
}
declare function client<T extends {
    Bindings: ClientBindings;
}>(c: (Context<T> | {
    env: ClientBindings;
}) & Partial<DbContext>, config?: DrizzleConfig): (drizzle_orm_neon_http.NeonHttpDatabase<Record<string, unknown>> & {
    $client: _neondatabase_serverless.NeonQueryFunction<any, any>;
}) | (drizzle_orm_node_postgres.NodePgDatabase<Record<string, unknown>> & {
    $client: drizzle_orm_node_postgres.NodePgClient;
});
declare const address: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Address;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Address;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Address;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes1: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes2: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes3: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes4: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes5: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes6: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes7: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes8: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes9: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes10: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes11: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes12: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes13: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes14: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes15: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes16: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes17: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes18: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes19: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes20: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes21: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes22: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes23: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes24: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes25: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes26: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes27: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes28: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes29: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes30: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes31: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const bytes32: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Bytes;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint8: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint16: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint24: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint32: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint40: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint48: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint56: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint64: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint72: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint80: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint88: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint96: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint104: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint112: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint120: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint128: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint136: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint144: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint152: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint160: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const uint256: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Uint;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int8: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int16: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int24: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int32: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int40: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int48: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int56: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int64: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int72: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int80: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int88: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int96: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int104: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int112: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int120: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int128: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int136: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int144: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int152: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int160: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const int256: {
    (): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TConfig extends Record<string, any>>(fieldConfig?: TConfig | undefined): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: "";
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
    <TName extends string>(dbName: TName, fieldConfig?: unknown): drizzle_orm_pg_core.PgCustomColumnBuilder<{
        name: TName;
        dataType: "custom";
        columnType: "PgCustomColumn";
        data: Int;
        driverParam: unknown;
        enumValues: undefined;
    }>;
};
declare const struct: <TData>(name: string) => drizzle_orm_pg_core.PgCustomColumnBuilder<{
    name: string;
    dataType: "custom";
    columnType: "PgCustomColumn";
    data: TData;
    driverParam: string;
    enumValues: undefined;
}>;

declare const db_address: typeof address;
declare const db_bytes: typeof bytes;
declare const db_bytes1: typeof bytes1;
declare const db_bytes10: typeof bytes10;
declare const db_bytes11: typeof bytes11;
declare const db_bytes12: typeof bytes12;
declare const db_bytes13: typeof bytes13;
declare const db_bytes14: typeof bytes14;
declare const db_bytes15: typeof bytes15;
declare const db_bytes16: typeof bytes16;
declare const db_bytes17: typeof bytes17;
declare const db_bytes18: typeof bytes18;
declare const db_bytes19: typeof bytes19;
declare const db_bytes2: typeof bytes2;
declare const db_bytes20: typeof bytes20;
declare const db_bytes21: typeof bytes21;
declare const db_bytes22: typeof bytes22;
declare const db_bytes23: typeof bytes23;
declare const db_bytes24: typeof bytes24;
declare const db_bytes25: typeof bytes25;
declare const db_bytes26: typeof bytes26;
declare const db_bytes27: typeof bytes27;
declare const db_bytes28: typeof bytes28;
declare const db_bytes29: typeof bytes29;
declare const db_bytes3: typeof bytes3;
declare const db_bytes30: typeof bytes30;
declare const db_bytes31: typeof bytes31;
declare const db_bytes32: typeof bytes32;
declare const db_bytes4: typeof bytes4;
declare const db_bytes5: typeof bytes5;
declare const db_bytes6: typeof bytes6;
declare const db_bytes7: typeof bytes7;
declare const db_bytes8: typeof bytes8;
declare const db_bytes9: typeof bytes9;
declare const db_client: typeof client;
declare const db_extractSearchPathFromConnectionString: typeof extractSearchPathFromConnectionString;
declare const db_int104: typeof int104;
declare const db_int112: typeof int112;
declare const db_int120: typeof int120;
declare const db_int128: typeof int128;
declare const db_int136: typeof int136;
declare const db_int144: typeof int144;
declare const db_int152: typeof int152;
declare const db_int16: typeof int16;
declare const db_int160: typeof int160;
declare const db_int24: typeof int24;
declare const db_int256: typeof int256;
declare const db_int32: typeof int32;
declare const db_int40: typeof int40;
declare const db_int48: typeof int48;
declare const db_int56: typeof int56;
declare const db_int64: typeof int64;
declare const db_int72: typeof int72;
declare const db_int8: typeof int8;
declare const db_int80: typeof int80;
declare const db_int88: typeof int88;
declare const db_int96: typeof int96;
declare const db_struct: typeof struct;
declare const db_uint104: typeof uint104;
declare const db_uint112: typeof uint112;
declare const db_uint120: typeof uint120;
declare const db_uint128: typeof uint128;
declare const db_uint136: typeof uint136;
declare const db_uint144: typeof uint144;
declare const db_uint152: typeof uint152;
declare const db_uint16: typeof uint16;
declare const db_uint160: typeof uint160;
declare const db_uint24: typeof uint24;
declare const db_uint256: typeof uint256;
declare const db_uint32: typeof uint32;
declare const db_uint40: typeof uint40;
declare const db_uint48: typeof uint48;
declare const db_uint56: typeof uint56;
declare const db_uint64: typeof uint64;
declare const db_uint72: typeof uint72;
declare const db_uint8: typeof uint8;
declare const db_uint80: typeof uint80;
declare const db_uint88: typeof uint88;
declare const db_uint96: typeof uint96;
declare namespace db {
  export { db_address as address, db_bytes as bytes, db_bytes1 as bytes1, db_bytes10 as bytes10, db_bytes11 as bytes11, db_bytes12 as bytes12, db_bytes13 as bytes13, db_bytes14 as bytes14, db_bytes15 as bytes15, db_bytes16 as bytes16, db_bytes17 as bytes17, db_bytes18 as bytes18, db_bytes19 as bytes19, db_bytes2 as bytes2, db_bytes20 as bytes20, db_bytes21 as bytes21, db_bytes22 as bytes22, db_bytes23 as bytes23, db_bytes24 as bytes24, db_bytes25 as bytes25, db_bytes26 as bytes26, db_bytes27 as bytes27, db_bytes28 as bytes28, db_bytes29 as bytes29, db_bytes3 as bytes3, db_bytes30 as bytes30, db_bytes31 as bytes31, db_bytes32 as bytes32, db_bytes4 as bytes4, db_bytes5 as bytes5, db_bytes6 as bytes6, db_bytes7 as bytes7, db_bytes8 as bytes8, db_bytes9 as bytes9, db_client as client, db_extractSearchPathFromConnectionString as extractSearchPathFromConnectionString, db_int104 as int104, db_int112 as int112, db_int120 as int120, db_int128 as int128, db_int136 as int136, db_int144 as int144, db_int152 as int152, db_int16 as int16, db_int160 as int160, db_int24 as int24, db_int256 as int256, db_int32 as int32, db_int40 as int40, db_int48 as int48, db_int56 as int56, db_int64 as int64, db_int72 as int72, db_int8 as int8, db_int80 as int80, db_int88 as int88, db_int96 as int96, db_struct as struct, db_uint104 as uint104, db_uint112 as uint112, db_uint120 as uint120, db_uint128 as uint128, db_uint136 as uint136, db_uint144 as uint144, db_uint152 as uint152, db_uint16 as uint16, db_uint160 as uint160, db_uint24 as uint24, db_uint256 as uint256, db_uint32 as uint32, db_uint40 as uint40, db_uint48 as uint48, db_uint56 as uint56, db_uint64 as uint64, db_uint72 as uint72, db_uint8 as uint8, db_uint80 as uint80, db_uint88 as uint88, db_uint96 as uint96 };
}

/**
 * Creates a new Hono application instance with the specified environment variables.
 */
declare const create: <EnvVariables extends {}>(options?: HonoOptions<{
    Bindings: EnvVariables;
}>) => Hono<{
    Bindings: EnvVariables;
}, hono_types.BlankSchema, "/">;

declare const app_create: typeof create;
declare namespace app {
  export { app_create as create };
}

declare const authentication: (c: Context, next: () => Promise<void>) => Promise<Response | void>;

declare const middlewares_authentication: typeof authentication;
declare namespace middlewares {
  export { middlewares_authentication as authentication };
}

export { app as App, db, middlewares, types };
