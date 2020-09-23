import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  async function getEvents() {
    const token = localStorage.getItem("auth-token");
    const eventRes = await axios.get("http://localhost:3000/events", {
      headers: { "x-auth-token": token },
    });
    setEvents(eventRes.data);
  }

  useEffect(() => {
    getEvents();
  });

  function renderList() {
    return events.map((event, i) => {
      return (
        <tr key={i}>
          <td>{event.title}</td>
          <td> {event.location}</td>
          <td>{event.date}</td>
          <td> {event.time}</td>
          <td> {event.description}</td>
          <td>
            {" "}
            <button
              className="btn btn-outline-success"
              onClick={updateEvent(event._id)}
            >
              Update
            </button>{" "}
          </td>
          <td>
            <button
              onClick={deleteEvent(event._id)}
              className="btn btn-outline-warning"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  const addEvent = () => history.push("/new");
  const updateEvent = (id) => {
    // history.push({
    //   pathname: `/update/${id}`,
    // });
  };
  const deleteEvent = (id) => {};

  return (
    <div>
      <br />
      <br />
      <button onClick={addEvent}>Add Event</button> <br /> <br /> <br />
      Your events: <br />
      <br />
      <Table responsive>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </Table>
    </div>
  );
}
