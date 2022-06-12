import "./App.css";
import { useState } from "react";

function App() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const day = dayNames[date.getDay()];
  const dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currDate = new Date();
  const hours = currDate.getHours();
  const AMorPM = hours >= 12 ? "PM" : "AM";
  var hour = hours % 12;
  const hour12 = () => {
    if (hour === 0) hour = 12;
    return hour;
  };
  const toDoDate =
    currDate.getDate() +
    "." +
    (currDate.getMonth() + 1) +
    "." +
    currDate.getFullYear();
  const toDoDay = dayNamesShort[currDate.getDay()];
  const toDoTime =
    hour12() +
    ":" +
    currDate.getMinutes() +
    ":" +
    currDate.getSeconds() +
    " " +
    AMorPM;
  const toDoTimeDateDay = toDoTime + " " + toDoDay + " " + toDoDate;
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState(" ");
  const deleteTask = (index) => {
    const ask = window.confirm("Do you want to Delete:");
    if (ask) {
      const test = [...toDos];
      const cut=test.slice(index,1)
      test.splice(index, 1);
      setTodos(test);
    } else {
    }
  };
  const eraser = () => {
    setTodo("");
  };
  return (
    <div className="App">
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>{" "}
        <div className="subHeading">
          {" "}
          <br /> <h2>Whoop, it's Wednesday 🌝 ☕ </h2>{" "}
        </div>{" "}
        <div className="input">
          {" "}
          <input
            value={toDo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="🖊️ Add item..."
          />{" "}
          <i class="fa-solid fa-eraser" onClick={eraser}></i>
          <i
            onClick={() =>
              setTodos([...toDos, { id: Date.now(), text: toDo, staus: false }])
            }
            className="fas fa-plus"
          ></i>{" "}
        </div>{" "}
        <div className="todos">
          {" "}
          {toDos.map((obj, index) => {
            return (
              <div className="todo">
                {" "}
                <div className="left">
                  {" "}
                  <input
                    onChange={(e) => {
                      console.log(e.target.checked);
                      console.log(obj);
                      setTodos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />{" "}
                  <p>{obj.text}</p>{" "}
                </div>{" "}
                <div className="right">
                  {" "}
                  <i
                    className="fas fa-times"
                    onClick={() => deleteTask(index)}
                  ></i>{" "}
                </div>{" "}
              </div>
            );
          })}
          <div className="input2">
            <h1 className="hed">Available</h1>
            {toDos.map((obj) => {
              if (obj.status) {
                return (
                    <p className="per">*
                     {obj.text} <span className="time">Time-{toDoTimeDateDay}</span>
                    </p>
                );
              }
              return null;
            })}
          </div>
        </div>{" "}
        <div></div>
      </div>
    </div>
  );
}

export default App;
