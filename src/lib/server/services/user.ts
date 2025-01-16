import { db } from "../db";
import { user, type User } from "../db/schema";

export const createAdmin = async (admin: User) => {
  console.log('Creando administrador:', admin);
  const data = await db.insert(user).values(admin);

  if (data.rowsAffected === 0) {
    return [null, 'Error creating admin'];
  }

  return [data.lastInsertRowid, null];
};