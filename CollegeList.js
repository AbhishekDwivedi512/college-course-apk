import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/colleges')
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>College List</h1>
      <ul>
        {colleges.map(college => (
          <li key={college.id}>{college.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;