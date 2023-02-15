export const singularize = (word: string, count: number) => {
  if (count < 2) {
    return word.substring(0, word.length - 1);
  }
  return word;
};
