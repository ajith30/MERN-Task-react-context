import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //This package for generating random unique id.

//Initializing context
const CoursesContext = createContext();

////Creating Context Provider
export const CoursesProvider = ({children}) => {
    
    const [courses, setCourses] = useState([
        {id: 1, image: "https://img.icons8.com/arcade/64/null/html-5.png", courseName: "HTML"},
        {id: 2, image: "https://img.icons8.com/color/48/null/css3.png", courseName: "CSS"},
        {id: 3, image: "https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png", courseName: "JvaScript"},
        {id: 4, image: "https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png", courseName: "React JS"},
        {id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", courseName: "Node JS"},
    ]);

    //Creating below state for getting the data of the perticular teacher when edit is clicked
    const [editCourseData, setEditCourseData] = useState({
        course: {},
        edit: false
    });

    //Add Course
    const addCourse = (newCourse) => {
        const id = uuidv4();
        newCourse.id = id;
        setCourses([...courses, newCourse]);
    }

    //Edit Course clicked get that course data
    const editCourse = (course) => {
        setEditCourseData({
            course,
            edit: true
        });
    }

    //Update Course
    const updateCourse = (id, updateCourse) => {
        setCourses(courses.map((course) => {
            return (course.id === id) ? {...course, ...updateCourse} : course;
        }));
    }

    //Delete Course
    const deleteCourse = (id) => {
        if(window.confirm("Are you sure you want to delete this Course ?")) {
            setCourses(courses.filter((course) => {
                return course.id !== id;
            }));
        }
    }

    return(
        <CoursesContext.Provider value={{
            courses,
            addCourse,
            editCourse,
            editCourseData,
            updateCourse,
            deleteCourse
        }}>
            {children}
        </CoursesContext.Provider>
    );
}

export default CoursesContext;
