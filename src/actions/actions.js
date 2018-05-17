export const AddCourse =(Course,id)=>({
  type:"ADDCOURSE",
  payload:Course,
  listId:id
})

export const RemoveCourse = (Course,id)=>({
  type:"REMOVECOURSE",
  payload:Course,
  listId:id
})