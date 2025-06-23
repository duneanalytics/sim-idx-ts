import { Hono } from 'hono';

/**
 * Creates a new Hono application instance with the specified environment variables.
 */
export const create = <EnvVariables extends {}>() => {
	return new Hono<{ Bindings: EnvVariables }>();
};
