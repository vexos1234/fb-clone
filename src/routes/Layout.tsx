import { Avatar, Box, Button, Grid, Stack, TextField } from "@mui/material";
import "./styles.css";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import AppsIcon from "@mui/icons-material/Apps";

const ovalInputStyle = {
  borderRadius: "30px",
  overflow: "hidden",
  width: "240px",
  height: "20px",
};
import { Link, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import FacebookIcon from "../icons/FacebookIcon";

export default function Demo(props: { onLogOut: () => void }) {
  const navigate = useNavigate();
  const iconSize = 28;

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    props.onLogOut();
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <Grid
        container
        spacing={1}
        sx={{
          textAlign: "center",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={3} className="left">
          <Stack direction="row" spacing={1}>
            <FacebookIcon />
            <Box>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Oval Input"
                sx={{
                  backgroundColor: "#F0F2F5",
                  borderRadius: "30px",
                }}
                focused={true}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {/* center icons */}
          <Stack direction="row" spacing={1}>
            <Link to="/">
              <Button sx={{ backgroundColor: "#fff", width: "111px" }}>
                <HomeIcon
                  className="clickable-icon"
                  sx={{
                    color: "#606266",
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                  }}
                />
              </Button>
            </Link>
            <Link to="/video">
              <Button sx={{ backgroundColor: "#fff", width: "111px" }}>
                <OndemandVideoIcon
                  className="clickable-icon"
                  sx={{
                    color: "#606266",
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                  }}
                />
              </Button>
            </Link>

            <Link to="/market">
              <Button sx={{ backgroundColor: "#fff", width: "111px" }}>
                <StorefrontIcon
                  className="clickable-icon"
                  sx={{
                    color: "#606266",
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                  }}
                />
              </Button>
            </Link>

            <Link to="/groups">
              <Button sx={{ backgroundColor: "#fff", width: "111px" }}>
                <GroupIcon
                  className="clickable-icon"
                  sx={{
                    color: "#606266",
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                  }}
                />
              </Button>
            </Link>

            <Link to="/games">
              <Button sx={{ backgroundColor: "#fff", width: "111px" }}>
                <VideogameAssetIcon
                  className="clickable-icon"
                  sx={{
                    color: "#606266",
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                  }}
                />
              </Button>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={3} className="right">
          <Stack direction="row" spacing={3}>
            <AppsIcon />

            {/* message icon */}
            <MarkChatUnreadIcon />

            <NotificationsIcon />
            <Link to="/profile">
              <Avatar
                className="clickable-icon"
                src="../favicon.ico"
                alt="Scales of Justice Brand Image"
                sx={{ width: 28, height: 28 }}
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
