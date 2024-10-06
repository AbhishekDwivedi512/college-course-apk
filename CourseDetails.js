import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [courseFee, setCourseFee] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/courses/${id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`http://localhost:8080/api/course-fees?courseId=${id}`)
      .then(response => {
        setCourseFee(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{course.name}</h1>
      <h2>Course Fee</h2>
      <p>Fee: {courseFee.fee}</p>
      <p>Duration: {courseFee.duration}</p>
      <p>Accommodation: {courseFee.accommodation}</p>
      <p>Accommodation Fee: {courseFee.accommodationFee}</p>
    </div>
  );
};

export default CourseDetails;