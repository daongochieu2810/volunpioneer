const initialState = {
  //   strengthQuiz: [
  //     "I can donate my time",
  //     "I want to help the environment",
  //     "I am good with animals",
  //     "I can pick up litter from parks/ beaches",
  //     "I can foster"
  //   ],
  strengthQuiz: [],
  pageHistory: [1, 22, 323, 324]
};

const uploadStrengthQuiz = (state, action) => {
  const updatedQuizState = [...state.strengthQuiz, action.quizData];
  const updatedState = { ...state, ...{ strengthQuiz: updatedQuizState } };
  console.log(updatedState);
  return updatedState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_STRENGTH_QUIZ":
      return uploadStrengthQuiz(state, action);
    default:
      return state;
  }
};

export default reducer;
