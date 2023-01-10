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

    async CreateUser(user: User): Promise<string> {
        const script = `
            INSERT INTO application_user (
                username,
                password
            )
            VALUES ( $1, crypt($2, 'my_salt'))
            RETURNING uuid
        `;
        const values = [user.username, user.password]

        const {rows} = await db.query<{uuid: string}>(script, values)
        const [newUser] = rows
        return newUser.uuid
    }
}

export default new userRepository()