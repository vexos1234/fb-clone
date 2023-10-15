import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Modal,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { AuthSession } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import "./styles.css";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { supabase } from "../supabaseClient";

interface TopNavbarProps {
  session: AuthSession | null;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  bgcolor: "background.paper",
  boxShadow: 12,
  borderRadius: "10px",
  minWidth: "500px",
  maxHeight: "550px",
};

function CreatePost({ session }: TopNavbarProps) {
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("posts").insert([
        {
          content: postContent,
          user_id: session?.user.id,
        },
      ]);

      if (error) {
        throw error;
      }
      setPostContent("");
    } catch (error) {
      console.error("Error creating post:", error?.message);
    }
  };

  const fullName = session?.user.user_metadata.full_name.split(" ");
  const firsName = fullName[0];

  if (session)
    return (
      <>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              background: "#fff",
              color: "#000000",
              width: "648px",
              maxWidth: "680px",
              borderRadius: "10px",
              padding: "16px",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              borderBottom="2px solid #F0F2F5"
              height="52px"
            >
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
                onClick={handleOpen}
                focused={true}
                placeholder={`What's on your mind, ${firsName}?`}
                className="custom-input"
              />
            </Stack>
            <Stack direction="row" marginTop="12px" sx={{ display: "flex" }}>
              <IconButton
                sx={{
                  flex: "1",
                  borderRadius: "10px",
                  transition: "background-color 0.1s, color 0.1s",
                }}
              >
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ overflowY: "scroll" }}
        >
          <Box sx={style}>
            <Box
              display="flex"
              alignItems="center"
              borderBottom="2px solid #F0F2F5"
              padding={2}
            >
              <Typography
                fontWeight="bold"
                fontSize="20px"
                sx={{ flex: 1, textAlign: "center" }}
              >
                Create Post
              </Typography>
              <IconButton
                sx={{
                  width: "36px",
                  height: "36px",
                  bgcolor: "#E4E6EB",
                  transition: "background-color 0.1s",
                  "&:hover": {
                    bgcolor: "#D8DADF",
                  },
                }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box padding={0}>
              <Stack
                direction="row"
                spacing={1}
                padding={2}
                marginBottom="-10px"
              >
                <Link to="/profile">
                  <Avatar
                    className="clickable-icon"
                    src={session.user.user_metadata.avatar_url}
                    alt="Profile picture"
                    sx={{ width: 40, height: 40 }}
                  />
                </Link>
                <Typography>{session.user.user_metadata.full_name}</Typography>
              </Stack>
              <form onSubmit={handleSubmit}>
                <TextField
                  multiline
                  onChange={(e) => setPostContent(e.target.value)}
                  value={postContent}
                  focused={true}
                  inputProps={{ maxLength: 3000 }}
                  placeholder={`What's on your mind, ${firsName}?`}
                  sx={{
                    display: "flex",
                    width: "100%",
                    minHeight: "25vh",
                    maxHeight: "40vh",
                    overflowY: "auto",
                    "&::placeholder": {
                      color: "black",
                    },
                  }}
                ></TextField>
                <Box padding={2}>
                  <Button
                    type="submit"
                    sx={{
                      bgcolor: "#0861F2",
                      color: "#fff",
                      width: "100%",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#0866FF",
                      },
                    }}
                  >
                    Post
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Modal>
      </>
    );
}

export default CreatePost;
