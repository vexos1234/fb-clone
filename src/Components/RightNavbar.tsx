import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
};

export default function RightNavbar() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const getUsers = () => {
      axios
        .get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
        .then((response) => {
          setUsers(response.data);
        });
    };
    getUsers();
  }, []);

  return (
    <>
      {users ? (
        <Box sx={{ position: "fixed", marginLeft: "20px" }}>
          <Stack>
            <Typography sx={{ marginLeft: "10px", fontWeight: "bold" }}>
              Contacts
            </Typography>
            {users.map((user) => (
              <Button
                sx={{
                  width: "25vw",
                  height: "55px",
                  justifyContent: "start",
                  transition: "background-color 0.2s",
                  "&:hover": {
                    backgroundColor: "#E4E6E9",
                    transition: "background-color 0.1s",
                  },
                }}
                key={user.id}
              >
                <Avatar src={user.imageUrl} />
                <Typography
                  sx={{
                    textTransform: "none",
                    marginLeft: "10px",
                    color: "black",
                  }}
                >
                  {user.firstName} {user.lastName}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
}
