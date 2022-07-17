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
      {data.map(({ id, title }: Data) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default Search(Todos, "todos");
