/**
 * @param word Plural word
 * @param count
 * @returns Singular form of the word (removing "s" from the word)
 */
export const singularize = (word: string, count: number) => {
  if (count < 2) return word.slice(0, -1);
  return word;
};
