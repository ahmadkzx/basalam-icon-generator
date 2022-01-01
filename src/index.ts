import utils from './utils';
import { readdirSync } from 'fs';
import { join, basename } from 'path';

function getAllTheIconsBaseOnVariantsPathes(variantsPathes: string[]) {
  return variantsPathes.map((variantPath) => ({
    path: variantPath,
    name: basename(variantPath),
    icons: readdirSync(variantPath),
  }));
}

async function init() {
  const ICONS_FOLDER_BASE_PATH = join(__dirname, '../icons');
  const VARIANTS = await utils.getVariantsBaseOnParentFolder(ICONS_FOLDER_BASE_PATH);
  const VARIANTS_PATHES = await utils.generateVariantsPathesBaseOnFolders(ICONS_FOLDER_BASE_PATH, VARIANTS);

  const icons = getAllTheIconsBaseOnVariantsPathes(VARIANTS_PATHES);
}

// Starting the build process
init();
