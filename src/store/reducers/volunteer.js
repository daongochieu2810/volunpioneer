const initialState = {
  strengthQuiz: []
};

const uploadStrengthQuiz = (state, action) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_STRENGTH_QUIZ":
      return uploadStrengthQuiz(state, action);
    default:
      return state;
  }
};

export default reducer;
