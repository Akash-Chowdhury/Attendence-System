import React, { useState, useEffect } from 'react';
import './Attend.css';

function Attendance() {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState({
    rollNumber: '',
    name: ''
  });

  // useEffect hook to update the list of students whenever the students state changes
  useEffect(() => {
    console.log('Student list updated');
  }, [students]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.rollNumber || !input.name) {
      alert("Details can't be blank.");
  }
    else{
      const newStudent = {
        rollNumber: input.rollNumber,
        name: input.name,
        checkInTime: new Date().toLocaleString()
      };
      setStudents([...students, newStudent]);
      setInput({ rollNumber: '', name: '' });
    }
  };

  const handleCheckOut = (rollNumber) => {
    const updatedStudents = students.map((student) => {
      if (student.rollNumber === rollNumber) {
        return {
          ...student,
          checkOutTime: new Date().toLocaleString()
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const countStudents = () => {
    return students.filter((student) => !student.checkOutTime).length;
  };

  return (
    <div className='container my-3' id='fool'>
    <h2 className='text-center'>Add Details</h2>
      <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Roll no</label>
                    <input type="text" value={input.rollNumber} onChange={handleChange} className="form-control my-2" id="title" name="rollNumber" aria-describedby="emailHelp" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" value={input.name} onChange={handleChange} className="form-control my-2"  name="name" />
                </div>

                <button type="submit" className="btn btn-sm btn-success my-3">Check In</button>
            </form>
      <br />
      <h4 className='text-center mb-3'>Number of students present in school: {countStudents()}</h4>
      <h2 className='text-center mb-3'>Students</h2>
      {students.map((student) => (
        <div className="border rounded p-3 shadow p-3 mb-5 bg-white rounded" key={student.rollNumber}>
          <p>
            Roll Number: {student.rollNumber} <br/>
            Name: {student.name}{' '}<br/>
            <p>Check In Time: {student.checkInTime}</p>
            {student.checkOutTime ? (
              <span>Check Out Time: {student.checkOutTime}</span>
            ) : (
              <button className="btn btn-sm btn-danger my-3" onClick={() => handleCheckOut(student.rollNumber)}>
                Check Out
              </button>
            )}
          </p>
        </div>
      ))}
      <br />
    </div>
  );
}

export default Attendance;
