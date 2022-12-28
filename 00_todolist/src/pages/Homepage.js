import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";
const initData = [
  {
    id: uuidv4(),
    text: "Clean house",
  },
  {
    id: uuidv4(),
    text: "Do exercise",
  },
  {
    id: uuidv4(),
    text: "Go to the gym",
  },
];

const ADD = "ADD";
const UPDATE = "UPDATE";

const Homepage = () => {
  const [tasks, setTasks] = useState(initData);
  const [inputValue, setInputValue] = useState({
    type: ADD,
    text: "",
    id: -1, // update task
  });

  const addTask = () => {
    if (inputValue.text.trim() === "") {
      return;
    }
    setTasks((prev) => {
      return [...prev, { id: uuidv4(), text: inputValue.text }];
    });
    setInputValue({ ...inputValue, text: "" });
  };

  const updateTask = (id) => {
    const task = tasks.find((item) => item.id === id);
    setInputValue({ ...task, type: UPDATE });
  };

  const handleOnClick = () => {
    switch (inputValue.type) {
      case ADD:
        addTask();
        break;
      case UPDATE:
        const newList = [...tasks];
        const task = newList.find((task) => task.id === inputValue.id);
        task.text = inputValue.text;
        setTasks(newList);
        setInputValue({ type: ADD, text: "", id: -1 });
        break;
      default:
        throw Error("Invalid input type");
    }
  };

  const deleteTask = (id) => {
    const newList = tasks.filter((item) => item.id !== id);
    setTasks(newList);
  };

  return (
    <div className="container mt-5">
      <TaskInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleOnClick={handleOnClick}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default Homepage;
