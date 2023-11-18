// "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071"
// session.user.user_metadata.full_name
// session.user.user_metadata.avatar_url
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { AuthSession } from "@supabase/supabase-js";
import CreatePost from "./CreatePost";
import ContentCardProfile from "./ContentCardProfile";
import { redirect } from "react-router-dom";

interface TopNavbarProps {
  session: AuthSession | null;
}

export default function Profile({ session }: TopNavbarProps) {
  if (session) {
    return (
      <Box
        sx={{
          overflow: "visible",
        }}
      >
        <Box
          sx={{
            height: "523.34px",
            backgroundColor: "#fff",
            marginTop: "56px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            boxShadow: "1",
            width: "100vw",
          }}
        >
          <Box
            sx={{
              width: "1095px",
              height: "405.55px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071"
              alt="Cover Image"
              style={{
                width: "100%", // Make the image fill the width of the parent
                height: "100%", // Make the image fill the height of the parent
                objectFit: "cover", // Zoom the image to cover the container while maintaining aspect ratio
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              top: "510px",
              left: "50%",
              width: "1031px",
              transform: "translateX(-50%) translateY(-90%)",
              marginBottom: "15px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Stack direction="row" alignItems="center">
              {/* PROFILE PICTURE */}
              <Avatar
                alt="Profile Picture"
                src={session.user.user_metadata.avatar_url}
                sx={{
                  width: 168,
                  height: 168,
                  border: "3px solid #fff",
                  borderRadius: "50%",
                }}
              />
              <Stack>
                {/* USERNAME */}
                <Typography
                  sx={{
                    marginLeft: "15px",
                    marginTop: "80px",
                    display: "flex",
                    fontWeight: "bold",
                    fontSize: "26px",
                  }}
                >
                  {session.user.user_metadata.full_name}
                </Typography>
                {/* NUMBER OF FRIENDS */}
                <Typography
                  sx={{
                    marginLeft: "15px",
                  }}
                >
                  123 friends
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ marginLeft: "auto", marginBottom: "10px" }}>
              <Button sx={{ marginRight: "10px" }} variant="contained">
                Add to story
              </Button>
              <Button variant="contained">Edit profile</Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "1031px",
            margin: "0 auto",
            padding: "12px",
          }}
        >
          {/* content */}
          <Stack direction="row" spacing={-1}>
            {/* left content */}
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  width: "390px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginLeft: "-3px",
                  height: "300px",
                  marginBottom: "15px",
                  boxShadow: "2",
                  padding: "15px",
                }}
              >
                <Typography>Intro</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "auto",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginLeft: "-3px",
                  minHeight: "400px",
                  boxShadow: "2",
                  padding: "15px",
                }}
              >
                <Typography>Intro</Typography>
              </Box>
            </Stack>

            {/* right content */}
            <Box
              sx={{
                width: "auto",
                borderRadius: "8px",
                height: "115px",
              }}
            >
              <CreatePost session={session} width={"37.5vw"} />
              <ContentCardProfile session={session} width={"39.5vw"} />
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  } else if (!session) {
    return redirect("/");
  }
}
