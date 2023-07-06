import styled from "styled-components";
import { useState, useEffect } from "react";
import "./index.css";
import React from 'react';

import { List } from "../List/List";
import { Input } from "../Input/Input";

const Container = styled.div`
display: flex;
align-items: center;
flex-direction:column;
`;
const Button = styled.button`
display:inline-block;
flex: 1;
border: none;
background-color: pink;
color: black;
height: 30px;
width: 50px;
border-radius: 2px;
cursor: pointer;
`;
const Text = styled.input`
border: 2px solid #000;
width: 200px;
padding: 5px;
border-radius: 2px;
margin: 5px;
`;
const TaskCount = styled.span`
margin:10px;
`;
const Tasks = styled.div`
`;
const LIST = styled.li`
listStyle:"none";
text-decoration: "line-through";
`;

const App = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);



  //Hooks
  useEffect(() => {
    //
    console.log("mounted");
  }, []);

  useEffect(() => {
    //
    console.log("todo list updated");
  }, [todoList]);

  //adding to the to-Do list
  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ]);
    setInput("");
  };
  //handling the completed tasks
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          //task is pending modifying to completed and inc the count
          setCompletedTaskCount(completedTaskCount + 1);

        }
        else {
          //Task is complete, back to pending, dec complete count
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTodoList(list);
  };
  return (
    <Container>
      <div>
        <h2>ToDo List</h2>
        <Text value={input} onInput={(e) => setInput(e.target.value)} />
        <Button onClick={() => handleClick()}>Add</Button>
        <Tasks>
          <TaskCount>
            <b> Pending Tasks</b> {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount>
            <b> Completed Tasks</b> {completedTaskCount}
          </TaskCount>
        </Tasks>
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <LIST
                  complete={todo.complete}
                  id={todo.id}
                  onClick={() => handleComplete(todo.id)}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.comeplte && "line-through",
                  }}
                >
                  {todo.task}
                </LIST>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );

};

export default App;

