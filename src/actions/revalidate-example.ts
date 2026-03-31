"use server";

import {  revalidateTag } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get("path") as string;
  console.log("Server Action", path);

  revalidateTag("posts", "minutes");
  revalidateTag("post-nebulosa-cremosa-de-andromeda", "minutes");
}
