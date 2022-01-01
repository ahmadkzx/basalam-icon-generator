import { readdir } from 'fs/promises';

/**
 * @param {String} parent
 * @returns {Array} this function will return a promise of all the variants
 */

async function getVariantsBaseOnParentFolder(parent: string) {
  // TODO: check all variants to be directories
  const variants = await readdir(parent);

  return variants;
}

export default getVariantsBaseOnParentFolder;
