import type { Actions, PageServerLoad } from "./$types";
export const prerender = false;

export const load = (async ({ request }) => {
  return {}
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({ request }) => {
    const rq = await request.formData();
    const data = Object.fromEntries(rq.entries());

    console.log('data', data);

    return {};
  }
}