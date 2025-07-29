var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/db.ts
var db_exports = {};
__export(db_exports, {
  address: () => address,
  bytes: () => bytes,
  bytes1: () => bytes1,
  bytes10: () => bytes10,
  bytes11: () => bytes11,
  bytes12: () => bytes12,
  bytes13: () => bytes13,
  bytes14: () => bytes14,
  bytes15: () => bytes15,
  bytes16: () => bytes16,
  bytes17: () => bytes17,
  bytes18: () => bytes18,
  bytes19: () => bytes19,
  bytes2: () => bytes2,
  bytes20: () => bytes20,
  bytes21: () => bytes21,
  bytes22: () => bytes22,
  bytes23: () => bytes23,
  bytes24: () => bytes24,
  bytes25: () => bytes25,
  bytes26: () => bytes26,
  bytes27: () => bytes27,
  bytes28: () => bytes28,
  bytes29: () => bytes29,
  bytes3: () => bytes3,
  bytes30: () => bytes30,
  bytes31: () => bytes31,
  bytes32: () => bytes32,
  bytes4: () => bytes4,
  bytes5: () => bytes5,
  bytes6: () => bytes6,
  bytes7: () => bytes7,
  bytes8: () => bytes8,
  bytes9: () => bytes9,
  client: () => client,
  extractSearchPathFromConnectionString: () => extractSearchPathFromConnectionString,
  int104: () => int104,
  int112: () => int112,
  int120: () => int120,
  int128: () => int128,
  int136: () => int136,
  int144: () => int144,
  int152: () => int152,
  int16: () => int16,
  int160: () => int160,
  int24: () => int24,
  int256: () => int256,
  int32: () => int32,
  int40: () => int40,
  int48: () => int48,
  int56: () => int56,
  int64: () => int64,
  int72: () => int72,
  int8: () => int8,
  int80: () => int80,
  int88: () => int88,
  int96: () => int96,
  struct: () => struct,
  uint104: () => uint104,
  uint112: () => uint112,
  uint120: () => uint120,
  uint128: () => uint128,
  uint136: () => uint136,
  uint144: () => uint144,
  uint152: () => uint152,
  uint16: () => uint16,
  uint160: () => uint160,
  uint24: () => uint24,
  uint256: () => uint256,
  uint32: () => uint32,
  uint40: () => uint40,
  uint48: () => uint48,
  uint56: () => uint56,
  uint64: () => uint64,
  uint72: () => uint72,
  uint8: () => uint8,
  uint80: () => uint80,
  uint88: () => uint88,
  uint96: () => uint96
});
import { customType } from "drizzle-orm/pg-core";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePostgres } from "drizzle-orm/node-postgres";

// src/types.ts
var types_exports = {};
__export(types_exports, {
  Address: () => Address,
  Bytes: () => Bytes,
  Int: () => Int,
  Uint: () => Uint
});
var Address = class _Address {
  address;
  constructor(address2) {
    this.address = address2;
  }
  toJSON() {
    return "0x" + this.address.toString("hex");
  }
  static from(s) {
    if (s.startsWith("0x")) {
      return new _Address(Buffer.from(s.slice(2), "hex"));
    }
    return new _Address(Buffer.from(s, "hex"));
  }
};
var Bytes = class _Bytes {
  data;
  constructor(data) {
    this.data = data;
  }
  toJSON() {
    return "0x" + this.data.toString("hex");
  }
  static from(s) {
    if (s.startsWith("0x")) {
      return new _Bytes(Buffer.from(s.slice(2), "hex"));
    }
    return new _Bytes(Buffer.from(s, "hex"));
  }
};
var Uint = class {
  value;
  constructor(value) {
    this.value = value;
  }
  toJSON() {
    return this.value.toString(10);
  }
};
var Int = class {
  value;
  constructor(value) {
    this.value = value;
  }
  toJSON() {
    return this.value.toString(10);
  }
};

// src/db.ts
import { Pool } from "pg";
function extractSearchPathFromConnectionString(connectionString) {
  try {
    const url = new URL(connectionString);
    const searchPathParam = url.searchParams.get("options");
    if (!searchPathParam) {
      return null;
    }
    const decoded = decodeURIComponent(searchPathParam);
    const searchPathMatch = decoded.match(/-c\s+search_path=(.+?)(?:\s+-c|\s+|$)/i);
    if (searchPathMatch && searchPathMatch[1]) {
      return searchPathMatch[1];
    }
    return null;
  } catch {
    return null;
  }
}
var client = (c, config) => {
  let dbClient;
  if (!c.env.DB_CONNECTION_STRING) {
    throw new Error("Missing required environment variable: DB_CONNECTION_STRING");
  }
  if (c.env.HYPERDRIVE?.connectionString) {
    dbClient = config ? drizzlePostgres(c.env.HYPERDRIVE.connectionString, config) : drizzlePostgres(c.env.HYPERDRIVE.connectionString);
  } else {
    const searchPath = extractSearchPathFromConnectionString(c.env.DB_CONNECTION_STRING);
    if (searchPath) {
      const pool = new Pool({
        connectionString: c.env.DB_CONNECTION_STRING
      });
      pool.on("connect", (client2) => {
        client2.query("SET search_path TO $1", [searchPath]).catch(() => {
        });
      });
      dbClient = config ? drizzlePostgres(pool, config) : drizzlePostgres(pool);
    } else {
      dbClient = config ? drizzleNeon(c.env.DB_CONNECTION_STRING, config) : drizzleNeon(c.env.DB_CONNECTION_STRING);
    }
  }
  return dbClient;
};
var address = customType({
  dataType() {
    return "bytea";
  },
  toDriver(value) {
    return value.address;
  },
  fromDriver(value) {
    if (!(value instanceof Buffer)) {
      throw new Error("Expected Buffer for bytea type");
    }
    return new Address(value);
  }
});
var internalBytes = (width) => customType({
  dataType() {
    return "bytea";
  },
  toDriver(value) {
    return value.data.subarray(0, width);
  },
  fromDriver(value) {
    if (!(value instanceof Buffer)) {
      throw new Error("Expected Buffer for bytea type");
    }
    return new Bytes(value.subarray(0, width));
  }
});
var bytes = internalBytes();
var bytes1 = internalBytes(1);
var bytes2 = internalBytes(2);
var bytes3 = internalBytes(3);
var bytes4 = internalBytes(4);
var bytes5 = internalBytes(5);
var bytes6 = internalBytes(6);
var bytes7 = internalBytes(7);
var bytes8 = internalBytes(8);
var bytes9 = internalBytes(9);
var bytes10 = internalBytes(10);
var bytes11 = internalBytes(11);
var bytes12 = internalBytes(12);
var bytes13 = internalBytes(13);
var bytes14 = internalBytes(14);
var bytes15 = internalBytes(15);
var bytes16 = internalBytes(16);
var bytes17 = internalBytes(17);
var bytes18 = internalBytes(18);
var bytes19 = internalBytes(19);
var bytes20 = internalBytes(20);
var bytes21 = internalBytes(21);
var bytes22 = internalBytes(22);
var bytes23 = internalBytes(23);
var bytes24 = internalBytes(24);
var bytes25 = internalBytes(25);
var bytes26 = internalBytes(26);
var bytes27 = internalBytes(27);
var bytes28 = internalBytes(28);
var bytes29 = internalBytes(29);
var bytes30 = internalBytes(30);
var bytes31 = internalBytes(31);
var bytes32 = internalBytes(32);
var uint = (width) => customType({
  dataType() {
    return "numeric";
  },
  toDriver(value) {
    return value.value;
  },
  fromDriver(value) {
    if (typeof value === "string") {
      return new Uint(BigInt(value));
    }
    throw new Error("Invalid type for Uint: " + typeof value);
  }
});
var uint8 = uint(8);
var uint16 = uint(16);
var uint24 = uint(24);
var uint32 = uint(32);
var uint40 = uint(40);
var uint48 = uint(48);
var uint56 = uint(56);
var uint64 = uint(64);
var uint72 = uint(72);
var uint80 = uint(80);
var uint88 = uint(88);
var uint96 = uint(96);
var uint104 = uint(104);
var uint112 = uint(112);
var uint120 = uint(120);
var uint128 = uint(128);
var uint136 = uint(136);
var uint144 = uint(144);
var uint152 = uint(152);
var uint160 = uint(160);
var uint256 = uint(256);
var int = (width) => customType({
  dataType() {
    return "numeric";
  },
  toDriver(value) {
    return value.value;
  },
  fromDriver(value) {
    if (typeof value === "string") {
      return new Int(BigInt(value));
    }
    throw new Error("Invalid type for Int: " + typeof value);
  }
});
var int8 = int(8);
var int16 = int(16);
var int24 = int(24);
var int32 = int(32);
var int40 = int(40);
var int48 = int(48);
var int56 = int(56);
var int64 = int(64);
var int72 = int(72);
var int80 = int(80);
var int88 = int(88);
var int96 = int(96);
var int104 = int(104);
var int112 = int(112);
var int120 = int(120);
var int128 = int(128);
var int136 = int(136);
var int144 = int(144);
var int152 = int(152);
var int160 = int(160);
var int256 = int(256);
var struct = (name) => customType({
  dataType() {
    return "jsonb";
  },
  toDriver(value) {
    return JSON.stringify(value);
  }
})(name);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  create: () => create
});
import { Hono } from "hono";
var create = (options) => {
  return new Hono(options);
};

// src/middlewares.ts
var middlewares_exports = {};
__export(middlewares_exports, {
  authentication: () => authentication
});
var authHeaderName = "X-IDX-AUTHENTICATED-API-KEY-NAME";
var authentication = async (c, next) => {
  const isProduction = c.env?.NODE_ENV === "production";
  if (!isProduction) {
    return await next();
  }
  const authHeader = c.req.header(authHeaderName);
  if (!authHeader) {
    return Response.json({ unauthenticated: true }, { status: 401 });
  }
  return await next();
};
export {
  app_exports as App,
  db_exports as db,
  middlewares_exports as middlewares,
  types_exports as types
};
//# sourceMappingURL=index.mjs.map