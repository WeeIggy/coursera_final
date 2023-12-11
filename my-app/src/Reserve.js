
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import BookingSuccess from './BookingSuccess';
function Reserve() {


    const fetchAPI = function(date) {
        let result = [];

        for(let i = 17; i < 23; i++) {
            if(Math.random() < 0.5) {
                result.push(i + ':00');
            }
            if(Math.random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };


    //----------------------------
function submitAPI  () { return true};


const navigate = useNavigate();

function submitForm (formData) {
    if (submitAPI(formData)) {
     navigate("/confirmed")
}
}
  function initializeTimes() {
    return fetchAPI(new Date);
  }
  
  function updateTimes(state, action) {
    return fetchAPI(state);
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const showBookingForm = true; // Set to true to display the BookingForm component

  const handleDateChange = (selectedDate) => {
    dispatch({ type: 'update_times', availableTimes: initializeTimes() });
  };

  return (
    <div>
      
      {showBookingForm && (
        <BookingForm
          availableTimes={availableTimes}
          handleDateChange={handleDateChange}
          submitForm={submitForm}
        />
      )}
      {/* Rest of your Main component code */}
    </div>
  );
}

export default Reserve;