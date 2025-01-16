import { db } from "../db";
import { project, type Project } from "../db/schema";

export const createProject = async (rq: Project) => {
  console.log('Guardando proyecto:', rq);

  const data = await db.insert(project).values(rq);

  if (data.rowsAffected === 0) {
    return [null, 'Error creating project'];
  }

  return [data.lastInsertRowid, null];
};

export const getProject = async (projectId: string) => {
  // Aquí iría la lógica para obtener el proyecto de la base de datos
  console.log('Obteniendo proyecto:', projectId);
  return {
    id: projectId,
    name: 'Proyecto 1',
    adminUsername: 'admin',
    adminPassword: 'admin',
    databaseType: 'sqlite',
    useTypeScript: false
  };
};