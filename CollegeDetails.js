import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseDetails = ({ match }) => {
  const [course, setCourse] = useState({});
  const [courseFee, setCourseFee] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/courses/${match.params.id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`http://localhost:8080/api/course-fees?courseId=${match.params.id}`)
      .then(response => {
        setCourseFee(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <div>
      <h1>{course.name}</h1>
      <h2>Course dfgfhg Fee</h2>
      <p>Fee: {courseFee.fee}</p>
      <p>Duration: {courseFee.duration}</p>
      <p>Accommodation: {courseFee.accommodation}</p>
      <p>Accommodation Fee: {courseFee.accommodationFee}</p>
    </div>
  );
};

export default CourseDetails;