// import React, { useState, useContext } from "react";
// import UserContext from "../../context/UserContext";
// import Axios from "axios";
// import ErrorNotice from "../misc/ErrorNotice";

// export default function AddEvent() {
//   const { userData } = useContext(UserContext);
//   const [title, setTitle] = useState();
//   const [location, setLocation] = useState();
//   const [date, setDate] = useState();
//   const [time, setTime] = useState();
//   const [description, setDescription] = useState();
//   const [error, setError] = useState();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const newEvent = {
//         title,
//         location,
//         date,
//         time,
//         description,
//       };

//       const addNewRes = await Axios.post(
//         "http://localhost:3000/events/new",
//         newEvent,
//         {
//           headers: { "x-auth-token": userData.token },
//         }
//       ).then((res) => alert("Event has been added."));
//     } catch (err) {
//       err.response.data.msg && setError(err.response.data.msg);
//     }
//   };
//   return (
//     <div className="page">
//       <h2>Add Event</h2>
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
// }
