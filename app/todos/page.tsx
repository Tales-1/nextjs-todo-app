import React from "react";
import TodosList from "./TodosList";

interface Props {}

function Todos(props: Props) {
  const {} = props;

  return (
    <div>
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
}

export default Todos;
