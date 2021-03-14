const strengthQuizMapping = {};

const concatDigits = (first, second, third) => {
  if (second === 0) {
    return first;
  } else if (third === 0) {
    return parseInt(`${first}${second}`);
  } else {
    return parseInt(`${first}${second}${third}`);
  }
};

const getPrefix = currentResponses => {
  for (let i = currentResponses.length - 1; i => 0; i--) {
    if (currentResponses[i] > 300) {
      return 3;
    }
  }
  for (let i = currentResponses.length - 1; i => 0; i--) {
    if (currentResponses[i] > 300) {
      return 2;
    }
  }
  return 1;
};

export const getNextPage = option => {
  switch (option) {
    case "I can donate my time":
      return 22;
    case "I can donate items/money":
      return 21;
    case "I can donate my pre-loved items":
      return 311;
    case "I am good with children":
      return 321;
    case "I am good with animals":
      return 323;
    case "I am good with elderly":
      return 322;
    case "I want to help the environment":
      return 324;
    case "I can deliver items":
      return 325;
    default:
      return 0;
  }
};

export const strengthQuizQuestions = {
  1: ["I can donate items/money", "I can donate my time"],
  21: [
    "I can purchase new items for donation",
    "I can donate money",
    "I can donate my pre-loved items"
  ],
  22: [
    "I am good with children",
    "I am good with elderly",
    "I am good with animals",
    "I want to help the environment",
    "I can deliver items"
  ],
  311: [
    "Electronic devices (eg phone, laptop, TV)",
    "Furniture (eg sofa, table, chair)",
    "Books (eg textbooks, storybooks)"
  ],
  321: ["I can teach skills", "I can supervise (babysit)"],
  322: ["I  can speak chinese", "I  can speak hokkien"],
  323: ["I can foster", "I can temporarily take care"],
  324: [
    "I can pick up litter from parks/ beaches",
    "I can educate about environmental issues"
  ],
  325: ["I can drive a car", "I can drive a truck"]
};
