import { describe, expect, it, vi } from 'vitest';
import { Context } from 'hono';
import { authentication } from './middlewares';

const authHeaderName = 'X-IDX-AUTHENTICATED-API-KEY-NAME';

describe('Authentication Middleware', () => {
	it('should call next() when authentication is disabled', async () => {
		const mockNext = vi.fn().mockResolvedValue(undefined);
		const mockContext = {
			env: { DISABLE_AUTHENTICATION: 'true' },
			req: {
				header: vi.fn().mockImplementation(() => {
					return undefined;
				}),
			},
		} as unknown as Context;

		await authentication(mockContext, mockNext);

		expect(mockNext).toHaveBeenCalledTimes(1);
	});

	it('should return 401 when authentication header is missing', async () => {
		const mockNext = vi.fn().mockResolvedValue(undefined);
		const mockContext = {
			req: {
				header: vi.fn().mockReturnValue(undefined),
			},
		} as unknown as Context;

		const result = await authentication(mockContext, mockNext);

		expect(result).toBeInstanceOf(Response);
		expect(result?.status).toBe(401);

		const responseBody = await result?.json();
		expect(responseBody).toEqual({ unauthenticated: true });
		expect(mockNext).not.toHaveBeenCalled();
	});

	it('should call next() when authentication header is present', async () => {
		const mockNext = vi.fn().mockResolvedValue(undefined);
		const mockContext = {
			req: {
				header: vi.fn().mockImplementation((headerName: string) => {
					if (headerName === authHeaderName) {
						return 'some-api-key';
					}

					return undefined;
				}),
			},
		} as unknown as Context;

		await authentication(mockContext, mockNext);
		expect(mockNext).toHaveBeenCalledTimes(1);
	});
});
