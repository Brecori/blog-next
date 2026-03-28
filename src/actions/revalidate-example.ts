"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get("path") as string;
  console.log("Server Action", path);

  revalidateTag("randomuser", "max");
}
