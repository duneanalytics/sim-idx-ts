// TODO: Extract to library

import { customType } from "drizzle-orm/pg-core";
import {Address, Uint, Int, Bytes} from "./types";

export const address = customType<{ data: Address; notNull: false; default: false }>({
    dataType() {
        return "bytea";
    },
    toDriver(value) {
        return value.address;
    },
    fromDriver(value: unknown) {
        if (!(value instanceof Buffer)) {
            throw new Error("Expected Buffer for bytea type");
        }
        return new Address(value);
    }
});

const internalBytes = (width?: number) => customType<{ data: Bytes; notNull: false; default: false }>({
    dataType() {
        return "bytea";
    },
    toDriver(value) {
        return value.data.subarray(0, width);
    },
    fromDriver(value: unknown) {
        if (!(value instanceof Buffer)) {
            throw new Error("Expected Buffer for bytea type");
        }
        return new Bytes(value.subarray(0, width));
    }
});

export const bytes = internalBytes();
export const bytes1 = internalBytes(1);
export const bytes2 = internalBytes(2);
export const bytes3 = internalBytes(3);
export const bytes4 = internalBytes(4);
export const bytes5 = internalBytes(5);
export const bytes6 = internalBytes(6);
export const bytes7 = internalBytes(7);
export const bytes8 = internalBytes(8);
export const bytes9 = internalBytes(9);
export const bytes10 = internalBytes(10);
export const bytes11 = internalBytes(11);
export const bytes12 = internalBytes(12);
export const bytes13 = internalBytes(13);
export const bytes14 = internalBytes(14);
export const bytes15 = internalBytes(15);
export const bytes16 = internalBytes(16);
export const bytes17 = internalBytes(17);
export const bytes18 = internalBytes(18);
export const bytes19 = internalBytes(19);
export const bytes20 = internalBytes(20);
export const bytes21 = internalBytes(21);
export const bytes22 = internalBytes(22);
export const bytes23 = internalBytes(23);
export const bytes24 = internalBytes(24);
export const bytes25 = internalBytes(25);
export const bytes26 = internalBytes(26);
export const bytes27 = internalBytes(27);
export const bytes28 = internalBytes(28);
export const bytes29 = internalBytes(29);
export const bytes30 = internalBytes(30);
export const bytes31 = internalBytes(31);
export const bytes32 = internalBytes(32);

const uint = (width: number) => customType<{ data: Uint; notNull: false; default: false }>({
    dataType() {
        return "numeric";
    },
    toDriver(value) {
        return value.value;
    },
    fromDriver(value: unknown) {
        if (typeof value === "string") { // Base 10
            return new Uint(BigInt(value));
        }
        throw new Error("Invalid type for Uint: " + typeof value);
    }
});

export const uint8 = uint(8);
export const uint16 = uint(16);
export const uint24 = uint(24);
export const uint32 = uint(32);
export const uint40 = uint(40);
export const uint48 = uint(48);
export const uint56 = uint(56);
export const uint64 = uint(64);
export const uint72 = uint(72);
export const uint80 = uint(80);
export const uint88 = uint(88);
export const uint96 = uint(96);
export const uint104 = uint(104);
export const uint112 = uint(112);
export const uint120 = uint(120);
export const uint128 = uint(128);
export const uint136 = uint(136);
export const uint144 = uint(144);
export const uint152 = uint(152);
export const uint160 = uint(160);
export const uint256 = uint(256);

const int = (width: number) => customType<{ data: Int; notNull: false; default: false }>({
    dataType() {
        return "numeric";
    },
    toDriver(value) {
        return value.value;
    },
    fromDriver(value: unknown) {
        if (typeof value === "string") { // Base 10
            return new Int(BigInt(value));
        }
        throw new Error("Invalid type for Int: " + typeof value);
    }
});

export const int8 = int(8);
export const int16 = int(16);
export const int24 = int(24);
export const int32 = int(32);
export const int40 = int(40);
export const int48 = int(48);
export const int56 = int(56);
export const int64 = int(64);
export const int72 = int(72);
export const int80 = int(80);
export const int88 = int(88);
export const int96 = int(96);
export const int104 = int(104); 
export const int112 = int(112);
export const int120 = int(120);
export const int128 = int(128);
export const int136 = int(136);
export const int144 = int(144);
export const int152 = int(152);
export const int160 = int(160);
export const int256 = int(256);

export const struct = <TData>(name: string) =>
    customType<{ data: TData; driverData: string }>({
        dataType() {
            return 'jsonb';
        },
        toDriver(value: TData): string {
            return JSON.stringify(value);
        },
    })(name);
