import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  age: integer('age'),
  username: text('username').notNull().unique(),
  passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const project = sqliteTable('project', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description').notNull(),
  ownerId: text('owner_id')
    .notNull()
    .references(() => user.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});

export const database = sqliteTable('database', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description').notNull(),
  type: text('type').notNull(),
  host: text('host').notNull(),
  port: integer('port').notNull(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  default_database: text('default_database').notNull(),
  projectId: text('project_id')
    .notNull()
    .references(() => project.id),
  ownerId: text('owner_id')
    .notNull()
    .references(() => user.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});


export type Database = typeof database.$inferSelect;
export type Project = typeof project.$inferSelect;
export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
