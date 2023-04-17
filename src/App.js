import logo from './logo.svg';
import './App.css';
import AddCourse from "./page/AddCourse/AddCourse";
import CourseList from "./page/CouseItem/CourseList";
import {useState} from "react";

const DATA = [
  { title : "title 1", description : "description"},
  { title: "title 2", description: "description"},
  { title: "title 3", description: "description"},
  { title: "title 4", description: "description"},
]



function App() {
  const [screenName, setScreenName] = useState('')
  const [courseList,setCourseList] = useState('')
  const addCourse = (newCourse) => {
    setCourseList([...courseList, newCourse]);
  };
  let ScreenComponent;
  let props = {}
  switch (screenName) {
    case "course-list" :
      ScreenComponent = CourseList
        props = {
          courses: courseList
        }
      break
    case "add-course" :
      ScreenComponent = AddCourse
      break
    default :
      ScreenComponent = CourseList
      props = {
        courses: courseList
      }
      break
  }
  const onNavigate = (screenName) =>{
    setScreenName(screenName)
  }

  return <ScreenComponent {...props} onNavigate={onNavigate} addCourse={addCourse} />;
}

export default App;
