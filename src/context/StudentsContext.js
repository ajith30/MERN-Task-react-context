import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //This package for generating random unique id.


//Initializing Context
const StudentsContext = createContext();

//creating context provider
export const StudentsProvider = ({children}) => {
    const [students, setStudents] = useState([
        {id: 1, image: "https://randomuser.me/api/portraits/men/1.jpg", firstName: "Ajithkumar", lastName: "K", email: "ajith@mail.com", phone: "987654322"},
        {id: 2, image: "https://randomuser.me/api/portraits/men/2.jpg", firstName: "Virat", lastName: "Kohli", email: "virat@mail.com", phone: "9876543434"},
        {id: 3, image: "https://randomuser.me/api/portraits/men/3.jpg", firstName: "Rohit", lastName: "Sharma", email: "rohit@mail.com", phone: "987654344"},
        {id: 4, image: "https://randomuser.me/api/portraits/men/4.jpg", firstName: "Rahul", lastName: "KL", email: "ralul@mail.com", phone: "987654355"},
        {id: 5, image: "https://randomuser.me/api/portraits/men/5.jpg", firstName: "Shubman", lastName: "Gil", email: "shubman@mail.com", phone: "987654366"},
        {id: 6, image: "https://randomuser.me/api/portraits/men/6.jpg", firstName: "Surya", lastName: "Kumar", email: "surya@mail.com", phone: "987654377"},
        {id: 7, image: "https://randomuser.me/api/portraits/men/7.jpg", firstName: "Mohamad", lastName: "Siraj", email: "mohamad@mail.com", phone: "987654388"},
        {id: 8, image: "https://randomuser.me/api/portraits/men/8.jpg", firstName: "Kuldeep", lastName: "Yadhav", email: "kuldeep@mail.com", phone: "987654399"},
        {id: 9, image: "https://randomuser.me/api/portraits/men/9.jpg", firstName: "Hardik", lastName: "Pandya", email: "hardik@mail.com", phone: "987654311"},
        {id: 10, image: "https://randomuser.me/api/portraits/men/10.jpg", firstName: "Bhuvaneshvar", lastName: "Kumar", email: "buvi@mail.com", phone: "987654300"},
    ]);

    //Creating below state for getting the data of the perticular teacher when edit is clicked
    const [editStudentData, setEditStudentData] = useState({
        student: {},
        edit: false
    })

    //Add Student
    const addStudent = (newStudent) => {
        const id = uuidv4();
        //console.log(typeof id);
        newStudent.id = id;
        setStudents([...students, newStudent]);
    }

    //Edit Student
    const editStudent = (student) => {
        setEditStudentData({
            student,
            edit: true,
        })
    }

    //Update Student
    const updateStudent = (id, updateStudent) => {
        setStudents(students.map((student) => {
            return (student.id === id) ? {...student, ...updateStudent} : student;
        }));
    }

    //Delete Student
    const deleteStudent = (id) => {
        if(window.confirm("Are you sure you want to delete this student ?")) {
            setStudents(
                students.filter((student) => {
                return student.id !== id;
            }));
        }
    }


    return(
        //passing the states/Func which will be used by children components
        <StudentsContext.Provider value={{
            students,
            addStudent,
            editStudentData,
            editStudent,
            updateStudent,
            deleteStudent
        }}>
            {children}
        </StudentsContext.Provider>
    );

}

export default StudentsContext;