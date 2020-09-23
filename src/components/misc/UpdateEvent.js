// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import UserContext from "../../context/UserContext";
// import ErrorNotice from "./ErrorNotice";

// export const updateEvent = (props) => {
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const currentEvent = {
//         title,
//         location,
//         date,
//         time,
//         description,
//       };

//       setTitle("");
//       setLocation("");
//       setDate("");
//       setTime("");
//       setDescription("");

//       axios
//         .put(
//           `http://localhost:3000/events/event\${props.match.params.id}`,
//           currentEvent,
//           {
//             headers: { "x-auth-token": userData.token },
//           }
//         )
//         .then((res) => console.log(res.data));
//     } catch (err) {
//       err.response.data.msg && setError(err.response.data.msg);
//     }

//     useEffect(() => {
//       const token = localStorage.getItem("auth-token");
//       axios
//         .get(`http://localhost:3000/events/${props.match.params.id}`, {
//           headers: { "x-auth-token": token },
//         })
//         .then((res) => [
//           setTitle(res.data.title),
//           setLocation(res.data.location),
//           setDate(res.data.date),
//           setTime(res.data.time),
//           setDescription(res.data.description),
//         ])
//         .catch((error) => console.log(error));
//     }, []);
//   };

//   return (
//     <div className="page">
//       <h2>Update Event</h2>
//       {error && (
//         <ErrorNotice message={error} clearError={() => setError(undefined)} />
//       )}

//       <form className="form" onSubmit={submit}>
//         <label>Event Title: </label>
//         <input
//           id="event-title"
//           type="text"
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label>Location: </label>
//         <input
//           id="location"
//           type="text"
//           onChange={(e) => setLocation(e.target.value)}
//         />

//         <label>Date: </label>
//         <input
//           id="date"
//           type="date"
//           onChange={(e) => setDate(e.target.value)}
//         />

//         <label>Time: </label>
//         <input
//           id="time"
//           type="time"
//           onChange={(e) => setTime(e.target.value)}
//         />

//         <label>Description: </label>
//         <input
//           id="description"
//           type="text"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// };
