const initalState = {
  Courses: [],
  ListOne: []
};

const CourseReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDCOURSE":
      switch (action.listId) {
        case 2:
          return { ...state, Courses: [...state.Courses, action.payload] };
        case 3:
          return { ...state, ListOne: [...state.ListOne, action.payload] };
      }
    default:
      return state;
  }
};

export default CourseReducer;
