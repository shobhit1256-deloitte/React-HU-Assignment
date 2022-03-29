import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from 'axios'
interface userState {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }[];
}

export default function UserDataList({ user }: userState) {
  return (
    <TableContainer style={{width:"70%",marginLeft:"11rem"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((u) => {
            return (
              
                <TableRow
                  key={u.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{u.id}</TableCell>
                  <TableCell align="right">{u.first_name}</TableCell>
                  <TableCell align="right">{u.last_name}</TableCell>
                  <TableCell align="right">{u.email}</TableCell>
                  <TableCell align="right"><Button  onClick={async () => {
                      await axios.delete(`http://localhost:3000/users/${u.id}/`);
                    }}>Delete</Button></TableCell>
                  <TableCell align="right"><Button>Update</Button></TableCell>
                </TableRow>
              
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
