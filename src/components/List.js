import React from "react";
import { Checkbox } from "./CheckedBox";
import { Button } from "./Button";

export const List = ({ list, onChangeBox, handleDel }) => (
  <ul>
    {list.map(item => (
      <li
        key={item.id}
        style={{ textDecoration: item.done ? "line-through" : null }}
      >
        <Checkbox
          onClick={() => onChangeBox(item)}
          defaultChecked={item.done}
        />{" "}
        {item.name}
        <Button onClick={() => handleDel(item)}>Delete</Button>
      </li>
    ))}
  </ul>
);
