import React, { useState } from 'react';
import Popup from './Popup';


const ClassStudentDetail = [
  { className: "Class 1", classId: 1, teacherName: "Joy", students: [{ userId: "1-1", userName: "student1", firstName: "Leo", lastName: "Sop", gender: "Male" }, { userId: "1-2", userName: "student2", firstName: "Alice", lastName: "Smith", gender: "Female" }] },
  { className: "Class 2", classId: 2, teacherName: "Marry", students: [{ userId: "2-1", userName: "student3", firstName: "Ben", lastName: "Scot", gender: "Male" }, { userId: "2-2", userName: "student4", firstName: "Lily", lastName: "Fern", gender: "Female" }] }
]

const StudentDetailPopUp = (props) => {

  const { subitem } = props

  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const [changeBackgroundColor,setChangeBackgroundColor] = useState()

  const changeBackground =(e) =>{
    e.target.style.background = 'grey';
  }

  const changeBackgroundBack =(e) =>{
    e.target.style.background = 'white';
  }

  



  return (
    <div>
      <div onClick={togglePopup} onMouseEnter ={changeBackground} onMouseLeave={changeBackgroundBack}>
        {subitem.firstName}
      </div>
      {isOpen && <Popup content={<div>{subitem.userId} {subitem.firstName} {subitem.lastName} {subitem.gender}</div>} handleClose={togglePopup} />}
    </div>
  )
}

const StudentDetail = (props) => {

  const { item } = props
  const { subitem } = props


  return (
    <div>
      <StudentDetailPopUp item={item} subitem={subitem} />
    </div>
  )
}

const ClassListItem = (props) => {

  const { item } = props

  const [expand, setExpand] = useState(false)
  const handleOnClick = () => {
    setExpand(!expand)
  }

  const hiddenStyle = { display: "none" }
  const showStyle = {}

  return (
    <div >

      <div>
        {item.className}
        <button onClick={handleOnClick}>{expand ? "/\\" : "\\/"}</button>
      </div>

      <div style={expand ? showStyle : hiddenStyle} >
        {item.students.map((subitem, index) => {

          return (

            <div>
              <StudentDetail item={item} subitem={subitem} />
            </div>

          )
        })}

      </div>
    </div>)
}

const ClassList = () => {

  return (
    <div>
      {ClassStudentDetail.map((item, index) => {
        return (
          <ClassListItem item={item} />
        )
      })}

    </div>
  )
}

const App = () => {

  return (
    <div>
      <ClassList />
    </div>
  )
}

export default App




