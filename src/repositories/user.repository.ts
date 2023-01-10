import db from '../db';
import User from '../models/user.model';


class userRepository {

    async findAllUser(): Promise<User[]> {
        const query = `
            SELECT username, uuid 
            FROM application_user
        `;
        const { rows } = await db.query<User>(query);
        return rows || [];
    };

    async findByID(uuid: string): Promise<User> {
        const query = `
        SELECT username, uuid 
        FROM application_user
        WHERE uuid = $1
    ` 
    const values = [uuid];

    const { rows } = await db.query<User>(query, values);
    const [user] =  rows 

    return user;
    }

}

export default new userRepository()