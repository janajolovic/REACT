import React from "react";

const User = ({ usr, rmUser, editUser}) => {
  return (
    <tr>
      <td>{usr.id}</td>
      <td>{usr.name}</td>
      <td>{usr.username}</td>
      <td>{usr.email}</td>
      <td>
        <button
          onClick={() => {
            rmUser(usr.id);
          }}
        >
          Remove
        </button>
        <button onClick={() => {
          editUser(usr.id)
        }}>
          Edit</button>
      </td>
    </tr>
  );
};

export default User;















// {
//   id: 30,
//   name: "sysadmin",
//   email: "sysadmin@mail.com",
//   username: "sysadmin",
//   role: "sysadmin",
//   is_active: true,
// },
// {
//   id: 3,
//   name: "imran",
//   email: "imranmidovic@gmail.com",
//   username: "imran",
//   role: "user",
//   is_active: true,
// },
// {
//   id: 31,
//   name: "Faris Bektašević",
//   email: "bektasevicfaris@gmail.com",
//   username: "faris",
//   role: "undefined",
//   is_active: true,
// },
// {
//   id: 26,
//   name: "fdslfkdl;ksa",
//   email: "lfdksflkdsl@email.com",
//   username: "dfksldksl;",
//   role: "undefined",
//   is_active: true,
// },
// {
//   id: 27,
//   name: "Denan",
//   email: "dz@gamil.com",
//   username: "dz",
//   role: "undefined",
//   is_active: true,
// },
// {
//   id: 28,
//   name: "neko",
//   email: "neko@email.com",
//   username: "neko",
//   role: "undefined",
//   is_active: true,
// },
// {
//   id: 29,
//   name: "Sejo",
//   email: "s@gmail.com",
//   username: "seka",
//   role: "undefined",
//   is_active: true,
// },
//  {
//   id: 666,
//   name: "medzo",
//   email: "medzidmomsimulator@gmail.com",
//   username: "rawrrFinalBoss",
//   role: "otac",
//   is_active: true,
// },






