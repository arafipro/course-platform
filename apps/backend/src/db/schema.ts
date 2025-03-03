// schema.d1.ts
import {
  sqliteTable,
  text,
  integer,
  real,
  primaryKey,
  foreignKey,
  index,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// D1ではENUM型が未サポートのためリテラル型で代用
export const users = sqliteTable(
  "users",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    email: text("email").unique().notNull(),
    passwordHash: text("password_hash").notNull(),
    role: text("role", { enum: ["student", "teacher", "admin"] }).notNull(),
    displayName: text("display_name"),
    createdAt: integer("created_at", { mode: "timestamp" }).default(
      sql`(strftime('%s', 'now'))`
    ),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdateFn(
      () => new Date()
    ),
  },
  (table) => [index("email_idx").on(table.email)]
);

export const courses = sqliteTable("courses", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  description: text("description"),
  price: real("price").notNull(), // REAL型で小数を表現
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

export const sections = sqliteTable(
  "sections",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    courseId: text("course_id")
      .references(() => courses.id, { onDelete: "cascade" })
      .notNull(),
    title: text("title").notNull(),
    description: text("description"),
    order: integer("order").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).default(
      sql`(strftime('%s', 'now'))`
    ),
  },
  (table) => [index("course_idx").on(table.courseId)]
);

export const videos = sqliteTable("videos", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  sectionId: text("section_id")
    .references(() => sections.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  duration: integer("duration").notNull(),
  storagePath: text("storage_path").notNull(),
  order: integer("order").notNull(),
  isPreview: integer("is_preview", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

export const purchases = sqliteTable("purchases", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .references(() => users.id)
    .notNull(),
  courseId: text("course_id")
    .references(() => courses.id)
    .notNull(),
  amountPaid: real("amount_paid").notNull(),
  paymentMethod: text("payment_method", {
    enum: ["credit_card", "paypal"],
  }).notNull(),
  purchasedAt: integer("purchased_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

export const reviews = sqliteTable("reviews", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .references(() => users.id)
    .notNull(),
  courseId: text("course_id")
    .references(() => courses.id)
    .notNull(),
  rating: integer("rating").notNull().$type<1 | 2 | 3 | 4 | 5>(),
  comment: text("comment"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});
