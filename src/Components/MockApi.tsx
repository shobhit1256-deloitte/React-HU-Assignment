import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDataList from "./UserDataList";
import PostUserData from "./PostUserData";
import Navbar from "./Navbar";

interface userState {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }[];
}

export default function MockApi() {
  const [users, setUsers] = useState<userState["user"]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <h2>API Assignment</h2>
      <PostUserData user={users}/>
      
    </div>
  );
}
