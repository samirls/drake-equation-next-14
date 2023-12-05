import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Comments } from './definitions';

export async function fetchComments() {
  noStore();

  try {

    const data = await sql`SELECT * FROM comments;`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
}