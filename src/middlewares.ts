import { Context } from 'hono';

const authHeaderName = 'X-IDX-AUTHENTICATED-API-KEY-NAME';

export const authentication = async (c: Context, next: () => Promise<void>): Promise<Response | void> => {
	const isProduction = c.env?.NODE_ENV === 'production';
	if (!isProduction) {
		return await next();
	}

	const authHeader = c.req.header(authHeaderName);
	if (!authHeader) {
		return Response.json({ unauthenticated: true }, { status: 401 });
	}

	return await next();
};
