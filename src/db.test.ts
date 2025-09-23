import { describe, expect, it } from 'vitest';
import { Address, Bytes } from './types';
import { extractSchemaFromConnectionString } from './db';

describe('Database Types', () => {
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

		it('should throw error for non-string inputs', () => {
			expect(() => {
				// @ts-ignore - Testing invalid input
				Address.from(null);
			}).toThrow();

			expect(() => {
				// @ts-ignore - Testing invalid input
				Address.from(undefined);
			}).toThrow();

			expect(() => {
				// @ts-ignore - Testing invalid input
				Address.from(123);
			}).toThrow();
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
});

describe('extractSchemaFromConnectionString', () => {
	it('should extract search_path from connection string with URL encoded options and escape identifiers', () => {
		const connectionString =
			'postgres://user:pass@ep-dawn-river-a4csbovg.us-east-1.aws.neon.tech/his-in-fHWG49c05k?sslmode=require&options=-c%20search_path%3D%22which-those-cDvpxOl74o%22%2Cpublic';
		const result = extractSchemaFromConnectionString(connectionString);
		expect(result).toBe('which-those-cDvpxOl74o');
	});

	it('should extract search_path from connection string with multiple schemas and escape identifiers', () => {
		const connectionString = 'postgres://user:pass@host/db?options=-c%20search_path%3D%22schema1%22%2Cschema2%2Cpublic';
		expect(() => extractSchemaFromConnectionString(connectionString)).toThrow('Multiple schemas found in connection string');
	});

	it('should return null when no options parameter exists', () => {
		const connectionString = 'postgres://user:pass@host/db?sslmode=require';
		const result = extractSchemaFromConnectionString(connectionString);
		expect(result).toBeNull();
	});

	it('should return null when options parameter exists but has no search_path', () => {
		const connectionString = 'postgres://user:pass@host/db?options=-c%20some_other_setting%3Dvalue';
		const result = extractSchemaFromConnectionString(connectionString);
		expect(result).toBeNull();
	});

	it('should return null for invalid connection strings', () => {
		const invalidConnectionString = 'invalid-connection-string';
		const result = extractSchemaFromConnectionString(invalidConnectionString);
		expect(result).toBeNull();
	});
	it('should handle schemas with sql injection', () => {
		const connectionString =
			'postgres://user:pass@host/db?options=-c%20search_path%3D%22schema;drop table users;%22%2C%22schema%20with%20space%22%2Cpublic';
		expect(() => extractSchemaFromConnectionString(connectionString)).toThrow('Multiple schemas found in connection string');
	});

	it('should handle mixed quoted and unquoted schemas', () => {
		const connectionString = 'postgres://user:pass@host/db?options=-c%20search_path%3D%22quoted_schema%22%2Cunquoted_schema%2Cpublic';
		expect(() => extractSchemaFromConnectionString(connectionString)).toThrow('Multiple schemas found in connection string');
	});
});
