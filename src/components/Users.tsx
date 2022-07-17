import React, { FC } from "react";
import { Search } from "../Hoc";

type Props = {
  data: any;
};

const Users: FC<Props> = ({ data }: Props) => {
  return (
    <div>
      {data.map(({ id, name }: { id: number; name: string }) => (
        <h1 key={id}>{name}</h1>
      ))}
    </div>
  );
};

const UsersSearch = Search(Users, "users");

export default UsersSearch;
