import {
  Avatar,
  Card,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AuthSession } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import "./styles.css";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import TagFacesIcon from "@mui/icons-material/TagFaces";

interface TopNavbarProps {
  session: AuthSession | null;
}

function CreatePost({ session }: TopNavbarProps) {
  if (session)
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Card
          sx={{
            background: "#fff",
            color: "#000000",
            width: "648px",
            maxWidth: "680px",
            borderRadius: "10px",
            padding: "16px",
          }}>
          <Stack
            direction="row"
            spacing={1}
            borderBottom="2px solid #F0F2F5"
            height="52px">
            <Link to="/profile">
              <Avatar
                className="clickable-icon"
                src={session.user.user_metadata.avatar_url}
                alt="Profile picture"
                sx={{ width: 40, height: 40 }}
              />
            </Link>
            <TextField
              sx={{
                borderRadius: "30px",
                bgcolor: "#F0F2F5",
                height: "40px",
                justifyContent: "center",
                width: "100vw",
              }}
              focused={true}
              placeholder="Whats on your mind, firstname?"
            />
          </Stack>
          <Stack direction="row" marginTop="12px" sx={{ display: "flex" }}>
            <IconButton
              sx={{
                flex: "1",
                borderRadius: "10px",
                transition: "background-color 0.1s, color 0.1s",
              }}>
              <VideoCameraFrontIcon
                sx={{ color: "#E42645", fontSize: "30px" }}
              />
              <Typography sx={{ marginLeft: "5px" }}>Live video</Typography>
            </IconButton>
            <IconButton sx={{ flex: "1", borderRadius: "10px" }}>
              <CropOriginalIcon
                sx={{
                  color: "#44BB61",
                  fontSize: "30px",
                  transition: "background-color 0.1s, color 0.1s",
                }}
              />
              <Typography sx={{ marginLeft: "5px" }}>Photo/video</Typography>
            </IconButton>
            <IconButton sx={{ flex: "1", borderRadius: "10px" }}>
              <TagFacesIcon
                sx={{
                  color: "#EAB026",
                  fontSize: "30px",
                  transition: "background-color 0.1s, color 0.1s",
                }}
              />
              <Typography sx={{ marginLeft: "5px" }}>
                Feeling/activity
              </Typography>
            </IconButton>
          </Stack>
        </Card>
      </Container>
    );
}

export default CreatePost;
