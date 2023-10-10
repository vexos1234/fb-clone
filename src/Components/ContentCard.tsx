import "./styles.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { Post } from "../types/posts";
import { Container } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
  const [posts, setPosts] = useState<Post[] | null>([]);

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

  const handleDelete = async (postId) => {
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
      {posts?.map((post) => {
        const { id, user, content } = post;
        const { name: userFullName, avatar_url: avatarUrl } = user;

        return (
          <Container
            sx={{ display: "flex", justifyContent: "center" }}
            key={id}
          >
            <Card
              sx={{
                marginBottom: "16px",
                background: "#fff",
                color: "#000000",
                width: "590px",
              }}
            >
              <CardHeader
                sx={{ marginBottom: "-5px" }}
                avatar={
                  <Avatar
                    aria-label="profile-picture"
                    sx={{
                      height: "36px",
                      width: "36px",
                      objectFit: "cover",
                    }}
                  >
                    <img
                      alt="avatar"
                      src={avatarUrl}
                      style={{
                        height: "36px",
                        width: "36px",
                        objectFit: "cover",
                      }}
                    />
                  </Avatar>
                }
                action={
                  <IconButton
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    aria-label="settings"
                    onClick={() => handleDelete(id)}
                  >
                    <CloseIcon sx={{ color: "#000000" }} />
                  </IconButton>
                }
                title={
                  <Typography sx={{ fontWeight: "bold", color: "#000000" }}>
                    {userFullName}
                  </Typography>
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
                  component="img"
                  height="194"
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
                  height: "40px",
                }}
              >
                <IconButton
                  sx={{ flex: "1", borderRadius: "5px" }}
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
                  sx={{ flex: "1", borderRadius: "5px" }}
                  aria-label="Comments"
                  className="card-buttons"
                >
                  <ChatBubbleOutlineIcon />
                  <Typography sx={{ marginLeft: "5px" }}>Comment</Typography>
                </IconButton>
                <IconButton
                  sx={{ flex: "1", borderRadius: "5px" }}
                  aria-label="Share"
                  className="card-buttons"
                >
                  <ShortcutIcon />
                  <Typography sx={{ marginLeft: "5px" }}>Share</Typography>
                </IconButton>
              </CardActions>
              {/* <InputWithButtons className="input-component-container" /> */}
              <Typography sx={{ color: "#B0B3B8", marginLeft: "10px" }}>
                View more comments
              </Typography>

              <CardContent>
                <Typography paragraph>comments:</Typography>
                <Typography paragraph>comment 1</Typography>
                <Typography paragraph>comment 2</Typography>
                <Typography paragraph>comment 3</Typography>
                <Typography>comment 4</Typography>
              </CardContent>
            </Card>
          </Container>
        );
      })}
    </>
  ) : (
    <h1>Loading</h1>
  );
}
