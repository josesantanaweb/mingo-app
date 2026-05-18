/// <reference types="node" />

import { existsSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

/**
 * Loads a JSON file from packages/database/prisma/data.
 * Works when executed from the database package (CLI) or via Nest (@mingo/database build).
 */
export function loadJson<T>(filename: string): T {
  const candidates = [
    join(__dirname, '..', '..', 'prisma', 'data', filename),
    resolve(process.cwd(), 'packages', 'database', 'prisma', 'data', filename),
    resolve(process.cwd(), '../../packages/database/prisma/data', filename),
    resolve(process.cwd(), 'prisma', 'data', filename),
  ];

  const dataPath = candidates.find((path) => existsSync(path));

  if (!dataPath) {
    throw new Error(`No se encontró ${filename}. Rutas probadas: ${candidates.join(', ')}`);
  }

  try {
    return JSON.parse(readFileSync(dataPath, 'utf-8')) as T;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error desconocido';
    throw new Error(`Error al leer ${filename} en ${dataPath}: ${message}`);
  }
}
