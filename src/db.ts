import { Pool } from 'pg';

const connectionString = 'postgres://ynnjppny:M7RzB0oVSReqsYF4qnTae_vXFi838CI5@motty.db.elephantsql.com/ynnjppny';

const db = new Pool({connectionString});

export default db;