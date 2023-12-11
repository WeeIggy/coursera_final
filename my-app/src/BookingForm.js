import React from 'react';
import BookingSuccess from './BookingSuccess.js';

function BookingForm({ availableTimes, handleDateChange, submitForm }) {

  const [date, setDate] = React.useState(new Date);
  const [time, setTime] = React.useState('');
  const [guests, setGuests] = React.useState(1);
  const [occasion, setOccasion] = React.useState('Birthday');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted:', { date, time, guests, occasion });
    submitForm(event);
    // Handle form submission logic here
    // e.g., display form data or make an API call



    
  };

  const handleDateChangeUpdate = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    handleDateChange(selectedDate);
  };

  return (
    <main><article>
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' , margin:'auto',paddingTop: '22px'}}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChangeUpdate}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        required
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form></article></main>
  );
}

export default BookingForm;