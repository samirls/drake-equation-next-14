"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function createComment(formData: {name:string, comment:string}) {
  //throw new Error('Failed on purpose');
  const {name, comment} = formData;

  try {
    await sql`
    INSERT INTO comments (name, comment)
    VALUES (${name}, ${comment})
  `;
  } catch (error) {
    return {
      message: "Database Error. Failed to insert comment.",
    };
  }
  revalidatePath("/dashboard/invoices");
}
