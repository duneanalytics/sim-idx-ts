import { describe, expect, it } from 'vitest';
import { Address, Bytes } from './types';

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
