import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


interface userState {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }[];
}


export default function PostUserData({ user }: userState) {
  const [first_name, setfirstname] = useState<String>("");
  const [last_name, setlastname] = useState<String>("");
  const [email, setemail] = useState<String>("");
  const [toggleSubmit,settoggleSubmit]=useState<Boolean>(true);
  const [idToBeUpdated,setidToBeUpdated]=useState<number>();
  const handleSignup = (e: any) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3000/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        first_name: first_name,
        last_name: last_name,
      },
    });
  };
  const handleUpdate =  (id:number) => {
    const data = user.filter(u => u.id===id)
    setemail(data[0].email)
    setlastname(data[0].last_name)
    setfirstname(data[0].first_name)
    settoggleSubmit(false);
    setidToBeUpdated(id);
};
  const handleUpdatedChanges = async () =>{

    
      await axios({
      method: "put",
      url:  `http://localhost:3000/users/${idToBeUpdated}/`,
      data: {
        email: email,
        first_name: first_name,
        last_name: last_name,
      },
    });
  }
  return (
    <div>
      <div style={{ maxWidth: 950, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={3} item>
                <TextField
                  onChange={(e) => setfirstname(e.target.value)}
                  name="first_name"
                  label="FirstName"
                  placeholder="Enter your First name"
                  value={first_name}
                />
              </Grid>
              <Grid xs={12} sm={3} item>
                <TextField
                  onChange={(e) => setlastname(e.target.value)}
                  name="last_name"
                  label="LastName"
                  placeholder="Enter your Last name"
                  value={last_name}
                />
              </Grid>
              <Grid xs={12} sm={3} item>
                <TextField
                 onChange={(e) => setemail(e.target.value)}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={email}
                />
              </Grid>

              <Grid xs={12} sm={3} item>
            {    toggleSubmit?
                <Button
                  onClick={handleSignup}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {" "}
                  Submit
                </Button>: <Button
                  onClick={handleUpdatedChanges}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {" "}
                  Update
                </Button>}
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </div>
      <div className="UserData">
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
                  <TableCell align="right"><Button onClick={() => handleUpdate(u.id)}>Update</Button></TableCell>
                </TableRow>
              
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
}
