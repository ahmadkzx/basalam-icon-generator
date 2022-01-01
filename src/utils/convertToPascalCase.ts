/**
 * @param {String} word
 * @returns {String}
 */

export function convertToPascalCase(word: string) {
  const wordsArray = word.split('_').map((w) => w.replace(w.charAt(0), w.charAt(0).toUpperCase()));

  return wordsArray.join('');
}

export default convertToPascalCase;
