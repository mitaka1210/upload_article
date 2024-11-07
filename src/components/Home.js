import React from "react";
import Card from "./Card";
import InputTodo from "./InputTodo";
import ListTodos from "../ListTodos/ListTodos";

const Home = () => {
  return (
    <div>
      <InputTodo/>
      <ListTodos/>
      <Card/>
    </div>
  );
};

export default Home;
