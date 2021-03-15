const initialState = {
  volunteerActivities: []
};

const uploadVolunteerActivity = (state, action) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_VOLUNTEER_ACTIVITY":
      return uploadVolunteerActivity(state, action);
    default:
      return state;
  }
};

export default reducer;
