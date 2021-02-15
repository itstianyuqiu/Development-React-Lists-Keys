import React, { useState } from 'react'

const classStudentDetail = [
  { className: "Class 1", classId: 1, teacherName: "Joy", students: [{ userId: 11, userName: "student1", firstName: "Leo", lastName: "Sop", gender: "Male" }, { userId: 12, userName: "student 2", firstName: "Alice", lastName: "Inland", gender: "Female" }] },
  { className: "Class 2", classId: 2, teacherName: "Marry", students: [{ userId: 21, userName: "student2", firstName: "Ben", lastName: "Scot", gender: "Male" }, { userId: 22, userName: "student 1", firstName: "Lily", lastName: "Fern", gender: "Female" }] }
]


const ClassNameZone = (props) => {

  const { onClick } = props

  const { showStudentNameZone } = props

  const hiddenStyle = { display: "none" }
  const showStyle = {}

  return (
    <div>
      <div>
        {classStudentDetail.map((item, index) => {
          return (

            <div key={index}>
              <div>

                {item.className}

                <button style={showStudentNameZone ? hiddenStyle : showStyle} onClick={() => { onClick(true) }}>\/</button>
                <button style={showStudentNameZone ? showStyle : hiddenStyle} onClick={() => { onClick(false) }}>/\</button>

              </div>

              <div style={showStudentNameZone ? showStyle : hiddenStyle}>

                {showStudentNameZone}
                {item.teacherName}

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ShowStudentInfoButton = (props) =>{

    const { showStudentNameZone } = props

    const hiddenStyle = { display: "none" }
  const showStyle = {}


    return(
        <div>

        <button style={showStudentNameZone ? hiddenStyle : showStyle} onClick={() => { onClick(true) }}>\/</button>
        <button style={showStudentNameZone ? showStyle : hiddenStyle} onClick={() => { onClick(false) }}>/\</button>

      </div>
    )


  
}


const App = () => {

  const [showStudentNameZone, setShowStudentNameZone] = useState(false)

  const handleOnClick = (showStudentNameZone) => {
    setShowStudentNameZone(showStudentNameZone)

  }

  return (
    <div>
      <ClassNameZone showStudentNameZone={showStudentNameZone} onClick={handleOnClick} />
      <ShowStudentInfoButton showStudentNameZone={showStudentNameZone} />
      {/* <StudentNameZone showStudentNameZone={showStudentNameZone} /> */}
    </div>
  )
}

export default App