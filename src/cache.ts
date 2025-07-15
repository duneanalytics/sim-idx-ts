import { Context } from 'hono';

export const cache = <
	T extends {
		Bindings: Partial<{
			CACHE_NAME?: string;
		}> &
			Record<string, any>;
	},
>(
	c: Context<T>,
) => {
	if (!c.env.CACHE_NAME) {
		throw new Error('Missing required environment variable: CACHE_NAME');
	}

	return caches.open(c.env.CACHE_NAME);
};
