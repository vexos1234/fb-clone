import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
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
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import FacebookIcon from "../icons/FacebookIcon";
import { useEffect, useState } from "react";
import { AuthSession } from "@supabase/supabase-js";

interface TopNavbarProps {
  session: AuthSession | null;
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function TopNavbar({ session }: TopNavbarProps) {
  // const [session, SetSession] = useState<AuthSession | null>();
  const navigate = useNavigate();
  const iconSize = 28;
  const active = {
    borderBottom: "4px solid #0866FF",
  };

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     console.log("session on layout:", session);
  //     SetSession(session);
  //   });
  // }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    props.onLogOut();
    navigate("/");
  };

  if (session)
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
            position: "fixed",
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              sx={{ marginLeft: "5px", alignItems: "center" }}
            >
              <Link to="/">
                <IconButton disableRipple>
                  <FacebookIcon />
                </IconButton>
              </Link>
              <Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Search"
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
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "3.5px solid #007BFF" : "none", // Conditional border style
                })}
              >
                <Tooltip title={"Home"}>
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      width: "111px",
                      height: "48px",
                      borderRadius: "10px",
                      transition: "background-color 0.1s, color 0.1s",
                      "&:hover": {
                        backgroundColor: "#F2F2F2",
                      },
                    }}
                  >
                    <HomeIcon
                      sx={{
                        color: "#606266",
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                        transition: "background-color 0.1s, color 0.1s",
                      }}
                    />
                  </Button>
                </Tooltip>
              </NavLink>
              <Link to="/video">
                <Tooltip title={"Video"}>
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      width: "111px",
                      height: "48px",
                      borderRadius: "10px",
                      transition: "background-color 0.1s, color 0.1s",
                      "&:hover": {
                        backgroundColor: "#F2F2F2",
                      },
                    }}
                  >
                    <OndemandVideoIcon
                      className="clickable-icon"
                      sx={{
                        color: "#606266",
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                      }}
                    />
                  </Button>
                </Tooltip>
              </Link>
              <Link to="/market">
                <Tooltip title={"Marketplace"}>
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      width: "111px",
                      height: "48px",
                      borderRadius: "10px",
                      transition: "background-color 0.1s, color 0.1s",
                      "&:hover": {
                        backgroundColor: "#F2F2F2",
                      },
                    }}
                  >
                    <StorefrontIcon
                      className="clickable-icon"
                      sx={{
                        color: "#606266",
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                        transition: "background-color 0.1s, color 0.1s",
                      }}
                    />
                  </Button>
                </Tooltip>
              </Link>
              <Link to="/groups">
                <Tooltip title={"Groups"}>
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      width: "111px",
                      height: "48px",
                      borderRadius: "10px",
                      transition: "background-color 0.1s, color 0.1s",
                      "&:hover": {
                        backgroundColor: "#F2F2F2",
                      },
                    }}
                  >
                    <GroupIcon
                      className="clickable-icon"
                      sx={{
                        color: "#606266",
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                        transition: "background-color 0.1s, color 0.1s",
                      }}
                    />
                  </Button>
                </Tooltip>
              </Link>
              <Link to="/games">
                <Tooltip title={"Games"}>
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      width: "111px",
                      height: "48px",
                      borderRadius: "10px",
                      transition: "background-color 0.1s, color 0.1s",
                      "&:hover": {
                        backgroundColor: "#F2F2F2",
                      },
                    }}
                  >
                    <VideogameAssetIcon
                      className="clickable-icon"
                      sx={{
                        color: "#606266",
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                      }}
                    />
                  </Button>
                </Tooltip>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={3} className="right">
            <Stack
              direction="row"
              spacing={1}
              sx={{ marginRight: "15px", alignItems: "center" }}
            >
              <Tooltip title={"Apps"}>
                <IconButton
                  sx={{
                    height: "40px ",
                    width: "40px ",
                    backgroundColor: "#F0F2F5",
                    borderRadius: "50% ",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "background-color 0.1s, color 0.1s",
                    "&:hover": {
                      backgroundColor: "#ccc",
                    },
                  }}
                >
                  <AppsIcon sx={{ color: "#000000" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Messenger"}>
                <IconButton
                  sx={{
                    height: "40px ",
                    width: "40px ",
                    backgroundColor: "#F0F2F5",
                    borderRadius: "50% ",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "background-color 0.1s, color 0.1s",
                    "&:hover": {
                      backgroundColor: "#ccc",
                    },
                  }}
                >
                  <MarkChatUnreadIcon sx={{ color: "#000000" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Notifications"}>
                <IconButton
                  sx={{
                    height: "40px ",
                    width: "40px ",
                    backgroundColor: "#F0F2F5",
                    borderRadius: "50% ",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "background-color 0.1s, color 0.1s",
                    "&:hover": {
                      backgroundColor: "#ccc",
                    },
                  }}
                >
                  <NotificationsIcon sx={{ color: "#000000" }} />
                </IconButton>
              </Tooltip>

              <Link to="/profile">
                <Tooltip title={"account"}>
                  <Avatar
                    className="clickable-icon"
                    src={session.user.user_metadata.avatar_url}
                    alt="Scales of Justice Brand Image"
                    sx={{ width: 40, height: 40 }}
                  />
                </Tooltip>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </div>
    );
}
