var mostWordsFound = function (sentences) {
  let sentence = sentences.map((s) => s.split(" ").length);

  console.log(sentence);

  let max = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] > max) {
      max = sentence[i];
    }
  }

  return max;
};

console.log(
  mostWordsFound(
    (sentences = [
      "w jrpihe zsyqn l dxchifbxlasaehj",
      "nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom",
      "xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg",
      "krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm",
      "rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr",
      "o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk",
      "hrvh efqvjilibdqxjlpmanmogiossjyxepotezo",
      "qstd zui nbbohtuk",
      "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc",
    ])
  )
);
