import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load = (async ({ }) => {
  return {
    language: 'en',
    translations: {
      en: {
        hello: 'Hello'
      },
      es: {
        hello: 'Hola'
      }
    }
  };
}) satisfies LayoutServerLoad;
