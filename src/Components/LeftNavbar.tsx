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
        <IconButton sx={style}>
          <PeopleAltIcon
            sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
          />
          <Typography sx={{ marginLeft: "10px" }}>Friends</Typography>
        </IconButton>

        <IconButton sx={style}>
          <GroupsIcon
            sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
          />
          <Typography sx={{ marginLeft: "10px" }}>Groups</Typography>
        </IconButton>

        <IconButton sx={style}>
          <HistoryIcon
            sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
          />
          <Typography sx={{ marginLeft: "10px" }}>Memories</Typography>
        </IconButton>

        <IconButton sx={style}>
          <BookmarkIcon
            sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
          />
          <Typography sx={{ marginLeft: "10px" }}>Saved</Typography>
        </IconButton>

        <IconButton sx={style}>
          <OndemandVideoIcon
            sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
          />
          <Typography sx={{ marginLeft: "10px" }}>Video</Typography>
        </IconButton>

        <IconButton sx={style}>
          <CampaignIcon
            sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
          />
          <Typography sx={{ marginLeft: "10px" }}>Ad Center</Typography>
        </IconButton>

        <IconButton sx={style}>
          <BarChartIcon
            sx={{ width: "40px", height: "40px", color: "#23A8F1" }}
          />
          <Typography sx={{ marginLeft: "10px" }}>
            Climate Sciense Center
          </Typography>
        </IconButton>

        <IconButton sx={style}>
          <YardIcon sx={{ width: "40px", height: "40px", color: "#23A8F1" }} />
          <Typography sx={{ marginLeft: "10px" }}>Crisis Response</Typography>
        </IconButton>

        <IconButton sx={style}>
          <RadarIcon sx={{ width: "40px", height: "40px", color: "#23A8F1" }} />
          <Typography sx={{ marginLeft: "10px" }}>Feeds</Typography>
        </IconButton>
      </Stack>
    </Box>
  );
}

export default LeftNavbar;
