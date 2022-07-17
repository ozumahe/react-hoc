import React, { FC } from "react";
import { Search } from "../Hoc";

type Props = {
  data: any;
};

interface Data {
  id: number;
  email: string;
}
const Users: FC<Props> = ({ data }: Props) => {
  return (
    <div>
      <p>Users</p>
      {data.map(({ id, email }: Data) => (
        <h1 key={id}>{email}</h1>
      ))}
    </div>
  );
};

export default Search(Users, "users");
