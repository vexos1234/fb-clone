import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { AuthSession } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CampaignIcon from "@mui/icons-material/Campaign";
import BarChartIcon from "@mui/icons-material/BarChart";
import YardIcon from "@mui/icons-material/Yard";
import RadarIcon from "@mui/icons-material/Radar";

const style = {
  width: "344px",
  height: "52px",
  justifyContent: "left",
  left: "15px",
  borderRadius: "7px",
  color: "black",
  textTransform: "none",
  transition: "background-color 0.1s, color 0.1s",
  "&:hover": {
    backgroundColor: "#E4E6E9",
  },
};

const iconStyle = { width: 40, height: 40, marginRight: "10px" };

interface TopNavbarProps {
  session: AuthSession | null;
}

function LeftNavbar({ session }: TopNavbarProps) {
  return (
    <Box sx={{ position: "fixed" }}>
      <Stack>
        {session ? (
          <Link to="/profile">
            <IconButton sx={style}>
              <Avatar
                className="clickable-icon"
                src={session.user.user_metadata.avatar_url}
                alt="Scales of Justice Brand Image"
                sx={iconStyle}
              />

              <Typography>{session.user.user_metadata.full_name}</Typography>
            </IconButton>
          </Link>
        ) : null}
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <PeopleAltIcon
              sx={{
                width: "40px",
                height: "40px",
                color: "#1F9BEF",
              }}
            />
          </IconButton>
          Friends
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <GroupsIcon
              sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
            />
          </IconButton>
          Groups
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <HistoryIcon sx={{ width: "40px", height: "40px" }} />
          </IconButton>
          Memories
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <BookmarkIcon sx={{ width: "40px", height: "40px" }} />
          </IconButton>
          Saved
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <OndemandVideoIcon sx={{ width: "40px", height: "40px" }} />
          </IconButton>
          Video
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <CampaignIcon sx={{ width: "40px", height: "40px" }} />
          </IconButton>
          Ad Center
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <BarChartIcon sx={{ width: "40px", height: "40px" }} />
          </IconButton>
          Climate Science Center
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <YardIcon sx={{ width: "40px", height: "40px" }} />
          </IconButton>
          Crisis Response
        </Button>
        <Button sx={style}>
          <IconButton
            sx={{
              ...iconStyle,
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            <RadarIcon sx={{ width: "40px", height: "40px" }} />
          </IconButton>
          Feeds
        </Button>
      </Stack>
    </Box>
  );
}

export default LeftNavbar;
