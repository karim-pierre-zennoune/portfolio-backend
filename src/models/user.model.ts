import db from '../config/db.js';
import type User from '../types/interfaces/user.interface.js';

const findByEmail = async (email: string): Promise<User | null> => {
  const [rows] = await db.execute<User[]>(
    'SELECT * FROM users  WHERE email = ?  LIMIT 1',
    [email],
  );
  return rows[0] ?? null;
};



const userModel = {
  findByEmail,
};

export default userModel;