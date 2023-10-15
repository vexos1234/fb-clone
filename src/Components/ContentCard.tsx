// search memo or find another way to only reredener the card component

import "./styles.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { Post } from "../types/posts";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Modal,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UndoIcon from "@mui/icons-material/Undo";
import CreatePost from "./CreatePost";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function formatDate(inputDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(inputDate);
  const day = dateObj.getUTCDate();
  const month = months[dateObj.getUTCMonth()];
  const year = dateObj.getUTCFullYear();
  const hours = dateObj.getUTCHours().toString().padStart(2, "0");
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, "0");

  const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
  return formattedDate;
}

export default function ContentCard() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [postIdToDelete, setPostIdToDelete] = useState<number | null>(null);
  const [posts, setPosts] = useState<Post[] | null>([]);

  const handleOpen = (postId: number | null) => {
    if (postId !== null) {
      setPostIdToDelete(postId);
      setOpen(true);
    }
  };

  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await supabase
          .from("posts")
          .select("*, user:users(name, avatar_url, user_name)")
          .order("created_at", { ascending: false });

        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getPosts();
  }, []);

  const handleDelete = async (postId: number | null) => {
    try {
      const { error } = await supabase.from("posts").delete().eq("id", postId);

      if (error) {
        throw error;
      }

      console.log(`Post with ID ${postId} deleted successfully`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  return Array.isArray(posts) && posts.length > 0 ? (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      ></Container>

      {posts?.map((post) => {
        const { id, user, content } = post;
        const { name: userFullName, avatar_url: avatarUrl } = user;

        return (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            key={id}
          >
            <Card
              sx={{
                marginBottom: "16px",
                background: "#fff",
                color: "#000000",
                width: "680px",
                borderRadius: "10px",
              }}
            >
              <CardHeader
                sx={{ marginBottom: "-5px" }}
                avatar={
                  <Link to="/profile">
                    <Avatar
                      aria-label="profile-picture"
                      sx={{
                        height: "40px",
                        width: "40px",
                        objectFit: "cover",
                        marginRight: "-5px",
                      }}
                      src={avatarUrl}
                    ></Avatar>
                  </Link>
                }
                action={
                  <IconButton
                    sx={{ "&:hover": { backgroundColor: "#F2F2F2" } }}
                    aria-label="settings"
                    onClick={() => handleOpen(id)}
                  >
                    <CloseIcon sx={{ color: "#686F78" }} />
                  </IconButton>
                }
                title={
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {userFullName}
                    </Typography>
                  </Link>
                }
                subheader={
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#737578",
                      fontSize: "10px",
                    }}
                  >
                    {formatDate(post.created_at)}
                  </Typography>
                }
              />

              <Typography
                variant="body2"
                color="black"
                sx={{ marginBottom: "5px", marginLeft: "15px" }}
              >
                {content}
              </Typography>
              {post.image ? (
                <CardMedia
                  sx={{
                    borderRadius: "20px",
                    margin: "0 auto",
                    maxWidth: "654px",
                    maxHeight: "600px",
                  }}
                  component="img"
                  height="600"
                  width="654"
                  image={post.image}
                  alt="image"
                />
              ) : null}
              <CardActions
                sx={{
                  display: "flex",
                  borderTop: "1px solid #CED0D4",
                  borderBottom: "1px solid #CED0D4",
                  marginLeft: "15px",
                  marginRight: "15px",
                  marginTop: "15px",
                  height: "35px",
                }}
              >
                <IconButton
                  sx={{
                    flex: "1",
                    borderRadius: "2px",
                    transition: "background-color 0.1s, color 0.1s",
                  }}
                  aria-label="Like"
                  className="card-buttons"
                >
                  <ThumbUpAltOutlinedIcon
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  />
                  <Typography sx={{ marginLeft: "5px" }}>Like</Typography>
                </IconButton>
                <IconButton
                  sx={{
                    flex: "1",
                    borderRadius: "2px",
                    transition: "background-color 0.1s, color 0.1s",
                  }}
                  aria-label="Comments"
                  className="card-buttons"
                >
                  <ChatBubbleOutlineIcon />
                  <Typography sx={{ marginLeft: "5px" }}>Comment</Typography>
                </IconButton>
                <IconButton
                  sx={{
                    flex: "1",
                    borderRadius: "15px",
                    transition: "background-color 0.1s, color 0.1s",
                  }}
                  aria-label="Share"
                  className="card-buttons"
                >
                  <ShortcutIcon />
                  <Typography sx={{ marginLeft: "5px" }}>Share</Typography>
                </IconButton>
              </CardActions>
              {/* <InputWithButtons className="input-component-container" /> */}

              <CardContent>
                {/* if comments lenght > 1, show accordion */}
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Click to show/hide comments</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph>comments:</Typography>
                    <Typography paragraph>comment 1</Typography>
                    <Typography paragraph>comment 2</Typography>
                    <Typography paragraph>comment 3</Typography>
                    <Typography>comment 4</Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Container>
        );
      })}
      {/* maybe try to use a Basic dialog from material... */}
      <Modal
        sx={{
          borderRadius: "10px",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: "5px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* had to add a condition if the post its from the user if he is sure he want to delete the post */}
          {/* in case the post is from other user, hide post only */}
          <Stack>
            <Typography
              sx={{ marginBottom: "10px" }}
              id="delete confirmation"
              variant="h6"
              component="h2"
              marginRight="15px"
            >
              Do you want to delete this post?
            </Typography>
            <Stack
              direction="row"
              spacing={5}
              display="flex"
              justifyContent="center"
            >
              <IconButton
                sx={{ borderRadius: "2px" }}
                onClick={() => handleDelete(postIdToDelete)}
              >
                <DeleteForeverIcon />
                <Typography marginLeft="5px">Delete</Typography>
              </IconButton>
              <IconButton sx={{ borderRadius: "2px" }} onClick={handleClose}>
                <UndoIcon />
                <Typography marginLeft="5px">Cancel</Typography>
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  ) : (
    <h1>Loading</h1>
  );
}
