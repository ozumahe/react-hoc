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
      {data.map(({ id, email }: Data) => (
        <h3 key={id}>{email}</h3>
      ))}
    </div>
  );
};

export default Search(Users, "users");
