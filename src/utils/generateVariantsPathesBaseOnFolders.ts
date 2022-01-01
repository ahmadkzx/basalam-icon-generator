import { join } from 'path';

/**
 * @param {String} parent
 * @param {String} variants
 * @returns {Array} this function will return a promise of all the variant pathes
 */

async function generateVariantsPathesBaseOnFolders(parent: string, variants: string[]) {
  return variants.map((variant) => join(parent, variant));
}

export default generateVariantsPathesBaseOnFolders;
