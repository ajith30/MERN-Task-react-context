import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //This package for generating random unique id.
//Intializing context
const TeachersContext = createContext();

//Creating Context Provider
export const TeachersProvider = ({children}) => {
    const [teachers, setTeachers] = useState([
        {id: 1, image: "https://randomuser.me/api/portraits/men/31.jpg", firstName: "John", lastName: "Wick", email: "ragav@mail.com", phone: "9123456780"},
        {id: 2, image: "https://randomuser.me/api/portraits/men/32.jpg", firstName: "Tony", lastName: "Stark", email: "tony@mail.com", phone: "9123456770"},
        {id: 3, image: "https://randomuser.me/api/portraits/men/33.jpg", firstName: "James", lastName: "Bond", email: "james@mail.com", phone: "9123456760"},
    ]);

    //Creating below state for getting the data of the perticular teacher when edit is clicked
    const [editTeacherData, setEditTeacherData] = useState({
        teacher: {},
        edit: false
    });

    //Add teacher
    const addTeacher = (newTeacher) => {
        const id = uuidv4();
        newTeacher.id = id;
        setTeachers([...teachers, newTeacher]);
    }

    //Edit teacher
    const editTeacher = (teacher) => {
        setEditTeacherData({
            teacher,
            edit: true
        });
    }

    //Update teacher
    const updateTeacher = (id, updateTeacher) => {
        setTeachers(teachers.map((teacher) => {
            return (teacher.id === id) ? {...teacher, ...updateTeacher} : teacher;
        }))
    }

    //Delete teacher
    const deleteTeacher = (id) => {
        if(window.confirm("Are you sure you want to delete this Teacher ?")) {
            setTeachers(teachers.filter((teacher) => {
                return teacher.id !== id;
            }));
        }
    }

    return(
        //passing the states/Func which will be used by children components
        <TeachersContext.Provider value={{
            teachers,
            addTeacher,
            editTeacher,
            editTeacherData,
            updateTeacher,
            deleteTeacher
        }}>
            {children}
        </TeachersContext.Provider>
    );
}

export default TeachersContext;