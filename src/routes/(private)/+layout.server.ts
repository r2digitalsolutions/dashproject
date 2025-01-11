import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "../$types";

export const load = (async ({ locals }) => {
  redirect(302, '/overview');

  if (!locals.user) {
    return redirect(302, '/auth/login');
  }

  return {
  };
}) satisfies LayoutServerLoad;