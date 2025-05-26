'use server';

import fs from 'node:fs/promises';
import path from 'node:path';

export async function getSourceCode(file: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'src', 'registry', `${file}.tsx`);
  return await fs.readFile(filePath, 'utf-8');
}
