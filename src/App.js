import React, { useState} from "react";
// import "./styles.css";
const App = () => {
  const [seats, setSeats] = useState([
    { id: 1, status: "available" },
    { id: 2, status: "available" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
  ]);
  const handleSeatChange = (seatId) => {
    const newSeats = [...seats];
    const seatIndex = newSeats.findIndex((seat) => seat.id === seatId);
    newSeats[seatIndex].status = "booked";
    setSeats(newSeats);
  };
  const handlePay = () => {
    const newSeats = [...seats];
    newSeats.forEach((seat) => {
      if (seat.status === "booked") {
        seat.status = "paid";
      }
    });
    setSeats(newSeats);
  };
  const handleCancel = () => {
    const newSeats = [...seats];
    newSeats.forEach((seat) => {
      if (seat.status === "booked") {
        seat.status = "available";
      }
    });
    setSeats(newSeats);
  };
  return (
<div className="seat-booking">
<ul>
        {seats.map((seat) => (
<li key={seat.id}>
<button
              onClick={() => handleSeatChange(seat.id)}
              disabled={seat.status === "booked" || seat.status === "paid"}
>
              {seat.status}
</button>
</li>
        ))}
</ul>
<button onClick={handlePay}>Pay</button>
<button onClick={handleCancel}>Cancel</button>
</div>
  );
};
export default App;