// schema-types.d.ts
import { InferModel } from "drizzle-orm";
import {
  users,
  courses,
  sections,
  videos,
  purchases,
  reviews,
} from "../db/schema";

// Usersテーブル
export type User = InferModel<typeof users>;
export type InsertUser = InferModel<typeof users, "insert">;

// Coursesテーブル
export type Course = InferModel<typeof courses>;
export type InsertCourse = InferModel<typeof courses, "insert">;

// Sectionsテーブル
export type Section = InferModel<typeof sections>;
export type InsertSection = InferModel<typeof sections, "insert">;

// Videosテーブル
export type Video = InferModel<typeof videos>;
export type InsertVideo = InferModel<typeof videos, "insert">;

// Purchasesテーブル
export type Purchase = InferModel<typeof purchases>;
export type InsertPurchase = InferModel<typeof purchases, "insert">;

// Reviewsテーブル
export type Review = InferModel<typeof reviews>;
export type InsertReview = InferModel<typeof reviews, "insert">;

// Enum型の型定義
export type UserRole = "student" | "teacher" | "admin";
export type PaymentMethod = "credit_card" | "paypal";
export type Rating = 1 | 2 | 3 | 4 | 5;
