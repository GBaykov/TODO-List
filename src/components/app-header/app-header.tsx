import React from "react";
import { Iheader } from "../../types/types";
import "./app-header.css";

function AppHeader({ toDo, done }: Iheader): JSX.Element {
  return (
    <div className="app-header d-flex">
      <h1>ToDo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
}
export default AppHeader;
