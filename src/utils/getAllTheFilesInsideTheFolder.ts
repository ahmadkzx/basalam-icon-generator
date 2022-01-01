import { readdir } from 'fs/promises';

/**
 * @param {String} folder
 * @returns {Array} this funtion will return a promise of all the files inside the specific folder
 */

export async function getAllTheFilesInsideTheFolder(folder: string) {
  const folderInside = await readdir(folder);

  return folderInside;
}

export default getAllTheFilesInsideTheFolder;
