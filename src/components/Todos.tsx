import React, { FC } from "react";
import { Search } from "../Hoc";

type Props = {
  data: any;
};

interface Data {
  id: number;
  title: string;
}

const Todos: FC<Props> = ({ data }: Props) => {
  return (
    <div>
      <p>Todos</p>
      {data.map(({ id, title }: Data) => (
        <h1 key={id}>{title}</h1>
      ))}
    </div>
  );
};

export default Search(Todos, "todos");
