import { Hono } from 'hono';
import { HonoOptions } from 'hono/hono-base';

/**
 * Creates a new Hono application instance with the specified environment variables.
 */
export const create = <EnvVariables extends {}>(options?: HonoOptions<{ Bindings: EnvVariables }>) => {
	return new Hono<{ Bindings: EnvVariables }>(options);
};
