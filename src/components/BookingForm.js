import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose A Date: </label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>

                        {/* For time selection */}
                        <div>
                            <label htmlFor="book-time">Choose A Time: </label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select A Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        {/* For number of guests */}
                        <div>
                            <label htmlFor="book-guests">Number Of Guests: </label>
                            <input id="book-guests" min='1' value={guests} onChange={(e) => setGuests(e.target.value)} type="number" required />
                        </div>

                        {/* Occasion field */}
                        <div>
                            <label htmlFor="book-occasion">Occasion: </label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Graduation</option>
                                <option>Mother's Day</option>
                                <option>Father's Day</option>
                                <option>Valentine's Day</option>
                                <option>Wedding</option>
                                <option>Other</option>
                            </select>
                        </div>
                        {/* Submit button */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
                        </div>


                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;