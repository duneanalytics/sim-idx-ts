import { describe, expect, it } from 'vitest';
import {
	address,
	bytes,
	bytes1,
	bytes16,
	bytes2,
	bytes20,
	bytes32,
	bytes4,
	bytes8,
	int128,
	int16,
	int256,
	int32,
	int64,
	int8,
	struct,
	uint128,
	uint16,
	uint256,
	uint32,
	uint64,
	uint8,
} from './db';
import { Address, Bytes, Int, Uint } from './types';

describe('Database Types', () => {
	describe('address', () => {
		it('should be a function', () => {
			expect(typeof address).toBe('function');
		});

		it('should create a column when called', () => {
			const column = address();
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should create a column with a name when called with name', () => {
			const column = address('user_address');
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should work with Address instances', () => {
			const testAddress = Address.from('0x1234567890abcdef1234567890abcdef12345678');
			expect(testAddress).toBeInstanceOf(Address);
			expect(testAddress.address).toBeInstanceOf(Buffer);
		});
	});

	describe('bytes', () => {
		it('should be a function', () => {
			expect(typeof bytes).toBe('function');
		});

		it('should create a column when called', () => {
			const column = bytes();
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should create a column with a name when called with name', () => {
			const column = bytes('data_bytes');
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should work with Bytes instances', () => {
			const testBytes = Bytes.from('0x1234567890abcdef');
			expect(testBytes).toBeInstanceOf(Bytes);
			expect(testBytes.data).toBeInstanceOf(Buffer);
		});
	});

	describe('bytes32', () => {
		it('should be a function', () => {
			expect(typeof bytes32).toBe('function');
		});

		it('should create a column when called', () => {
			const column = bytes32();
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should create a column with a name when called with name', () => {
			const column = bytes32('hash_bytes');
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});
	});

	describe('uint256', () => {
		it('should be a function', () => {
			expect(typeof uint256).toBe('function');
		});

		it('should create a column when called', () => {
			const column = uint256();
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should create a column with a name when called with name', () => {
			const column = uint256('balance');
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should work with Uint instances', () => {
			const testUint = new Uint(BigInt('12345678901234567890'));
			expect(testUint).toBeInstanceOf(Uint);
			expect(testUint.value).toBe(BigInt('12345678901234567890'));
		});
	});

	describe('int256', () => {
		it('should be a function', () => {
			expect(typeof int256).toBe('function');
		});

		it('should create a column when called', () => {
			const column = int256();
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should create a column with a name when called with name', () => {
			const column = int256('signed_value');
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should work with Int instances', () => {
			const testInt = new Int(BigInt('-12345678901234567890'));
			expect(testInt).toBeInstanceOf(Int);
			expect(testInt.value).toBe(BigInt('-12345678901234567890'));
		});
	});

	describe('struct', () => {
		it('should be a function', () => {
			expect(typeof struct).toBe('function');
		});

		it('should create a column when called', () => {
			const column = struct<{ name: string; age: number }>('test_struct');
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});

		it('should create a column with a name when called with name', () => {
			const column = struct<{ name: string; age: number }>('user_data');
			expect(column).toBeDefined();
			expect(typeof column).toBe('object');
		});
	});

	describe('Address integration', () => {
		it('should work with Address.from() method', () => {
			const addressStr = '0x1234567890abcdef1234567890abcdef12345678';
			const addr = Address.from(addressStr);

			expect(addr).toBeInstanceOf(Address);
			expect(addr.address).toBeInstanceOf(Buffer);
			expect(addr.address.toString('hex')).toBe('1234567890abcdef1234567890abcdef12345678');
		});

		it('should handle addresses without 0x prefix', () => {
			const addressStr = '1234567890abcdef1234567890abcdef12345678';
			const addr = Address.from(addressStr);

			expect(addr).toBeInstanceOf(Address);
			expect(addr.address.toString('hex')).toBe('1234567890abcdef1234567890abcdef12345678');
		});

		it('should serialize to JSON correctly', () => {
			const addr = Address.from('0x1234567890abcdef1234567890abcdef12345678');
			const json = addr.toJSON();

			expect(json).toBe('0x1234567890abcdef1234567890abcdef12345678');
		});
	});

	describe('Bytes integration', () => {
		it('should work with Bytes.from() method', () => {
			const bytesStr = '0x1234567890abcdef';
			const bytesData = Bytes.from(bytesStr);

			expect(bytesData).toBeInstanceOf(Bytes);
			expect(bytesData.data).toBeInstanceOf(Buffer);
			expect(bytesData.data.toString('hex')).toBe('1234567890abcdef');
		});

		it('should handle bytes without 0x prefix', () => {
			const bytesStr = '1234567890abcdef';
			const bytesData = Bytes.from(bytesStr);

			expect(bytesData).toBeInstanceOf(Bytes);
			expect(bytesData.data.toString('hex')).toBe('1234567890abcdef');
		});

		it('should serialize to JSON correctly', () => {
			const bytesData = Bytes.from('0x1234567890abcdef');
			const json = bytesData.toJSON();

			expect(json).toBe('0x1234567890abcdef');
		});
	});

	describe('Uint integration', () => {
		it('should handle large numbers correctly', () => {
			const largeNumber = '1234567890123456789012345678901234567890';
			const uint = new Uint(BigInt(largeNumber));

			expect(uint).toBeInstanceOf(Uint);
			expect(uint.value).toBe(BigInt(largeNumber));
		});

		it('should serialize to JSON correctly', () => {
			const uint = new Uint(BigInt('12345678901234567890'));
			const json = uint.toJSON();

			expect(json).toBe('12345678901234567890');
		});
	});

	describe('Int integration', () => {
		it('should handle negative numbers correctly', () => {
			const negativeNumber = '-12345678901234567890';
			const int = new Int(BigInt(negativeNumber));

			expect(int).toBeInstanceOf(Int);
			expect(int.value).toBe(BigInt(negativeNumber));
		});

		it('should serialize to JSON correctly', () => {
			const int = new Int(BigInt('-12345678901234567890'));
			const json = int.toJSON();

			expect(json).toBe('-12345678901234567890');
		});
	});

	describe('Type system', () => {
		it('should export all expected types', () => {
			expect(address).toBeDefined();
			expect(bytes).toBeDefined();
			expect(bytes32).toBeDefined();
			expect(uint256).toBeDefined();
			expect(int256).toBeDefined();
			expect(struct).toBeDefined();
		});

		it('should export all bytes variants', () => {
			expect(bytes1).toBeDefined();
			expect(bytes2).toBeDefined();
			expect(bytes4).toBeDefined();
			expect(bytes8).toBeDefined();
			expect(bytes16).toBeDefined();
			expect(bytes20).toBeDefined();
		});

		it('should export all uint variants', () => {
			expect(uint8).toBeDefined();
			expect(uint16).toBeDefined();
			expect(uint32).toBeDefined();
			expect(uint64).toBeDefined();
			expect(uint128).toBeDefined();
			expect(uint256).toBeDefined();
		});

		it('should export all int variants', () => {
			expect(int8).toBeDefined();
			expect(int16).toBeDefined();
			expect(int32).toBeDefined();
			expect(int64).toBeDefined();
			expect(int128).toBeDefined();
			expect(int256).toBeDefined();
		});
	});
});
