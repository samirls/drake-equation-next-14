"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  comment: z.string(),
});

const CreateComment = FormSchema.omit({ id: true });

export async function createComment(formData: FormData) {
  const { name, comment } = CreateComment.parse({
    name: formData.get("name"),
    comment: formData.get("comment"),
  });

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
