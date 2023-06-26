import words from "./words";

//generates a random text of n words (arg)

export function generateRandom(n) {
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  return words.slice(0, n).join(" ");
}
