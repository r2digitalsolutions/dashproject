import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { createProject } from "$lib/server/services/project";
import { createAdmin } from "$lib/server/services/user";
import { createDatabase } from "$lib/server/services/database";

export const POST = (async ({ request }) => {
  const data = await request.json();

  const [admin, errorAdmin] = await createAdmin({
    username: data.adminUsername,
    password: data.adminPassword,
  });

  if (errorAdmin) {
    return json({
      message: 'Error creating admin',
      error: errorAdmin
    });
  }

  const [project, errorProject] = await createProject({
    name: data.projectName,
    useTypeScript: data.useTypeScript,
    owner: admin,
  })

  if (errorProject) {
    return json({
      message: 'Error creating project',
      error: errorProject
    });
  }

  const [db, errorDatabase] = await createDatabase({
    name: data.databaseName,
    type: data.databaseType,
    host: data.databaseHost,
    username: data.databaseUsername,
    password: data.databasePassword,
    owner: admin,
    project: project,
  });

  if (errorDatabase) {
    return json({
      message: 'Error creating database',
      error: errorDatabase
    });
  }

  return json({
    message: 'Configuration submitted successfully'
  });
}) satisfies RequestHandler;