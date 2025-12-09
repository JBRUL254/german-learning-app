export function evaluatePronunciation(expected, spoken) {
  expected = expected.toLowerCase().trim();
  spoken = spoken.toLowerCase().trim();

  let score = 0;

  const expectedWords = expected.split(" ");
  const spokenWords = spoken.split(" ");

  expectedWords.forEach((w, i) => {
    if (spokenWords[i] && spokenWords[i][0] === w[0]) score += 20;
    if (spokenWords[i] === w) score += 80;
  });

  return Math.min(score, 100);
}
