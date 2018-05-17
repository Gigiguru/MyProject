const initalState = {
  SelectList: [
    {
      Id: 11,
      Name: "I came from courses",
    },
    {
      Id: 12,
      Name: "I came from courses",
    },
    {
      Id: 13,
      Name: "I came from listOne",
    },
  ],
  KanbanListOne: [],
  KanbanListTwo: [],
  KanbanListThree: [],
  KanbanListFour: []
};

const CourseReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDCOURSE":
      switch (action.listId) {
        case 1:
          return { ...state, SelectList: [...state.SelectList, action.payload] };
        case 2:
          return { ...state, KanbanListOne: [...state.KanbanListOne, action.payload] };
        case 3:
          return { ...state, KanbanListTwo: [...state.KanbanListTwo, action.payload] };
        case 4:
          return { ...state, KanbanListThree: [...state.KanbanListThree, action.payload] };
        case 5:
          return { ...state, KanbanListFour: [...state.KanbanListFour, action.payload] };
      }
    case "REMOVECOURSE":
      switch(action.listId){
        case 1:{
          let temp = state.SelectList.filter(data => data.Id !== action.payload)
          return { ...state, SelectList: temp }
        }
        case 2:{
          let temp = state.KanbanListOne.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListOne: temp }
        }
        case 3: {
          let temp = state.KanbanListTwo.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListTwo: temp }
        }
        case 4: {
          let temp = state.KanbanListThree.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListThree: temp }
        }
        case 5: {
          let temp = state.KanbanListFour.filter(data => data.Id !== action.payload)
          return { ...state, KanbanListFour: temp }
        }
      }
    default:
      return state;
  }
};

export default CourseReducer;
