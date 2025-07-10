import { Context } from 'hono';

export const middlewares = {
	authentication: async (c: Context, next: () => Promise<void>): Promise<Response | void> => {
		const disableAuthentication = c.env?.DISABLE_AUTHENTICATION;
		if (disableAuthentication === 'true') {
			return await next();
		}

		const authHeader = c.req.header('X-IDX-AUTHENTICATED-API-KEY-NAME');
		if (!authHeader) {
			return Response.json({ unauthenticated: true }, { status: 401 });
		}

		return await next();
	},
};
