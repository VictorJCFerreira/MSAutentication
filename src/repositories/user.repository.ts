import db from '../db';
import User from '../models/user.model';


class userRepository {

    async findAllUser(): Promise<User[]> {
        const query = `
            SELECT username, uuid 
            FROM application_user
        `;
        const result = await db.query<User>(query);
        const rows = result.rows;
        return rows || [];
    };

}

export default new userRepository()