const initialState = {
  volunteerActivities: [
    {
      Description:
        "Everyone plays a part towards a safe and sustainable Singapore. At the same time, we must practise social responsibility in upholding good personal hygiene and safe distancing measures to keep COVID-19 at bay.",
      Title: "Beach clean up with Elderly",
      strengths: [
        "I can donate my time",
        "I am good with elderly",
        "I want to help the environment",
        "I can pick up litter from parks/ beaches"
      ]
    },
    {
      Description:
        "There’s a lot on a parent’s to-do list, and playing with your kid doesn’t always make it to the top. But play is important for your kid’s development, and getting down on their level to goof off for a few minutes can actually shave some of the stress off your day. It’s a win-win.",
      Title: "Orphanage Fun Day",
      strengths: [
        "I can donate my time",
        "I can donate money",
        "I am good with children",
        "I can educate about environmental issues"
      ]
    },
    {
      Description:
        "Sometimes our aged loved ones need health care services at home, whether it’s temporary or for an extended period. Learn all about senior home medical services in Singapore.",
      Title: "Visit to Old Folk's Home!",
      strengths: [
        "I can donate my time",
        "I am good with elderly",
        "I  can speak hokkien"
      ]
    },
    {
      Description:
        "SPCA Launches ‘Teach With Kindness’ Campaign To Address Cruelty In Training",
      Title: "Animal Fun",
      strengths: ["I can foster", "I am good with animals"]
    },
    {
      Title: "Free Tuition",
      Description:
        "The classes are mainly conducted at schools and CDAC centres which are accessible and convenient for students. CDAC Tuition Programme is offered at 50 locations islandwide. We also offer enrichment programmes such as Phonics, Espeed Chinese and Challenging Math at our CDAC Centres.Our small class size allows tutors to give more individual attention to students.",
      strengths: [
        "I can teach skills",
        "I am good with children",
        "I  can speak chinese"
      ]
    }
  ]
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
