import { integer, jsonb, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const projectsTable = pgTable('projects_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: jsonb('description'),
});

export type InsertProject = typeof projectsTable.$inferInsert
export type SelectProject = typeof projectsTable.$inferSelect
