import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Popover,
  Stack,
  TextField,
  Tooltip,
  Typography,
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
import LogoutIcon from "@mui/icons-material/Logout";

const ovalInputStyle = {
  borderRadius: "30px",
  overflow: "hidden",
  width: "240px",
  height: "20px",
};
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import FacebookIcon from "../icons/FacebookIcon";
import React, { useEffect, useState } from "react";
import { AuthSession } from "@supabase/supabase-js";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function TopNavbar() {
  const [session, setSession] = useState<AuthSession | null>(null);
  const iconSize = 28;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session on layout:", session);
      setSession(session);
    });
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   setSession(null);
  //   navigate("/");
  // };

  if (!session) {
    null;
  }
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
              sx={{ marginRight: "5px", alignItems: "center" }}
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

              <IconButton disableRipple={true} onClick={handleClick}>
                <Tooltip title={"account"}>
                  <Avatar
                    className="clickable-icon"
                    src={session.user.user_metadata.avatar_url}
                    alt="Scales of Justice Brand Image"
                    sx={{ width: 40, height: 40 }}
                  />
                </Tooltip>
              </IconButton>
              <Popover
                sx={{}}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  sx={{
                    width: "360px",
                    padding: "15px",
                    justifyItems: "center",
                  }}
                >
                  <Stack>
                    <Link style={{ width: "97.9%" }} to="/profile">
                      <Box
                        sx={{
                          padding: "4px",
                          boxShadow: "3",
                          borderRadius: "5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <IconButton
                          sx={{
                            width: "100%",
                            height: "55px",
                            justifyContent: "start",
                            transition: "background-color 0.2s",
                            borderRadius: "5px",
                            "&:hover": {
                              backgroundColor: "#F2F2F2",
                              transition: "background-color 0.1s",
                            },
                          }}
                          key={session.user.id}
                        >
                          <Avatar src={session.user.user_metadata.avatar_url} />
                          <Typography
                            sx={{
                              textTransform: "none",
                              color: "#000",
                              marginLeft: "10px",
                            }}
                          >
                            {session?.user.user_metadata.full_name}
                          </Typography>
                        </IconButton>
                      </Box>
                    </Link>
                    <IconButton
                      sx={{ borderRadius: "5px", marginTop: "10px" }}
                      onClick={handleLogOut}
                    >
                      <span
                        style={{
                          backgroundColor: "#D8DADF",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <LogoutIcon
                          sx={{
                            color: "#000",
                            backgroundColor: "#D8DADF",
                            borderRadius: "50%",
                            fontSize: "30px",
                          }}
                        />
                      </span>

                      <Typography marginLeft="10px">Log Out</Typography>
                    </IconButton>
                  </Stack>
                </Box>
              </Popover>
            </Stack>
          </Grid>
        </Grid>
      </div>
    );
}
