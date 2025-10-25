/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
	DB_CONNECTION: Env.schema.string(),

	// PostgreSQL Configuration
	PG_HOST: Env.schema.string({ format: 'host' }),
	PG_PORT: Env.schema.number(),
	PG_USER: Env.schema.string(),
	PG_PASSWORD: Env.schema.string.optional(),
	PG_DB_NAME: Env.schema.string(),

	// MySQL Configuration (Legacy, optional)
	MYSQL_HOST: Env.schema.string.optional({ format: 'host' }),
	MYSQL_PORT: Env.schema.number.optional(),
	MYSQL_USER: Env.schema.string.optional(),
	MYSQL_PASSWORD: Env.schema.string.optional(),
	MYSQL_DB_NAME: Env.schema.string.optional(),

	// Serial Port Configuration
	SERIAL_PORT: Env.schema.string.optional(),
	SERIAL_BAUD_RATE: Env.schema.number.optional(),
})
