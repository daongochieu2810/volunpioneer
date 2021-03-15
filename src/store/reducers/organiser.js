const initialState = {
  volunteerActivities: []
};

const uploadVolunteerActivity = (state, action) => {
  const updatedActivities = [...state.volunteerActivities];
  updatedActivities.push(action.volunteerActivity);
  const updatedState = { ...state, volunteerActivities: updatedActivities };
  console.log(updatedState);
  return updatedState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_VOLUNTEER_ACTIVITY":
      return uploadVolunteerActivity(state, action);
    default:
      return state;
  }
};

export default reducer;
