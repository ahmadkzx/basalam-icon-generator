import utils from './utils';
import { join, basename } from 'path';
import { readdirSync, readFileSync } from 'fs';

function generateSetsBaseOnVariantsPathes(variantsPathes: string[]) {
  return variantsPathes.map((variantPath) => ({
    basePath: variantPath,
    variant: basename(variantPath),
    icons: readdirSync(variantPath),
  }));
}

function formatIconText(icon: string) {
  // removing svg tags and all the new lines
  return icon.replace(/<\/?svg.*/g, '').replace(/\n/g, '');
}

function formatSetsBaseOnPrimaryVariant(sets: IconSet[], options: FormatOptions) {
  const primaryVariant = options.primaryVariant || sets[0].variant;
  const primarySet = sets.find((set) => set.variant === primaryVariant);
  const otherSets = sets.filter((set) => set.variant !== primaryVariant);
  console.log(otherSets);

  // const variants = sets.map((set) => ({ name: set.variant, path: set.basePath }));

  if (!primarySet) throw new Error('Primary set not found!');

  const primaryIcons = primarySet.icons.map((primaryIcon) => ({
    name: utils.convertToPascalCase(primaryIcon.replace('.svg', '')),
    variants: {
      [primarySet.variant]: formatIconText(
        readFileSync(`${primarySet.basePath}/${primaryIcon}`, { encoding: 'utf-8' })
      ),
    },
  }));

  // for (let set of sets) {
  //   for (let icon of set.icons) {
  //     icons.push({
  //       name: utils.convertToPascalCase(icon.replace('.svg', '')),
  //       variants: {
  //         [set.variant]: 'a'
  //       }
  //     })
  //   }
  // }

  // console.log(ico);
}

async function init(options?: InitOptions) {
  const ICONS_FOLDER_BASE_PATH = join(__dirname, '../icons');
  const VARIANTS = await utils.getVariantsBaseOnParentFolder(ICONS_FOLDER_BASE_PATH);
  const VARIANTS_PATHES = await utils.generateVariantsPathesBaseOnFolders(ICONS_FOLDER_BASE_PATH, VARIANTS);

  const sets = generateSetsBaseOnVariantsPathes(VARIANTS_PATHES);
  const formatedIcons = formatSetsBaseOnPrimaryVariant(sets, { primaryVariant: options?.primaryVariant });
}

// Starting the build process
init({ primaryVariant: 'fill' });
