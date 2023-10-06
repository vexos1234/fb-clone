import { Button, Container, Paper, TextInput, ThemeIcon } from "@mantine/core";
import {
  IconHome,
  IconVideo,
  IconBuildingStore,
  IconUsersGroup,
  IconDeviceGamepad,
  IconGridDots,
  IconBrandMessenger,
  IconBellFilled,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import FacebookIcon from "../icons/FacebookIcon.tsx";
import "./styles.css";

const TopNavbar = () => {
  const fontSize = "24px";
  const rightButtonSize = "23px";

  const centerButtonStyle = {
    fontWeight: "bold",
    color: "#848689",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "#F0F2F5",
      color: "#F0F2F5",
    },
  };

  return (
    <Paper
      p="sm"
      shadow="md"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "60px",
        display: "flex",
      }}>
      <Container size="lg" style={{ marginTop: "-5px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {/* left side of the TopNavbar */}
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "auto",
              border: "1px solid black",
            }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                marginRight: "5px",
                marginTop: "5px",
              }}>
              <ThemeIcon radius={50} style={{ width: "40px", height: "40px" }}>
                <FacebookIcon style={{ width: "39px", height: "39px" }} />
              </ThemeIcon>
            </Link>
            <TextInput
              radius={300}
              placeholder="Search"
              id="search-input"
              styles={{
                input: {
                  backgroundColor: "#F0F2F5",
                  height: "40px",
                  width: "212px",
                },
              }}
            />
          </Container>
          <Container>
            {/* center of the TopNavbar */}
            <Link to="/">
              <button style={centerButtonStyle}>
                <IconHome size={fontSize} />
              </button>
            </Link>

            <Link to="/video">
              <Button style={centerButtonStyle} size="large">
                <IconVideo size={fontSize} />
              </Button>
            </Link>

            <Link to="/market">
              <Button style={centerButtonStyle} size="large">
                <IconBuildingStore size={fontSize} />
              </Button>
            </Link>

            <Link to="/groups">
              <Button style={centerButtonStyle} size="large">
                <IconUsersGroup size={fontSize} />
              </Button>
            </Link>

            <Link to="/games">
              <Button style={centerButtonStyle} size="large">
                <IconDeviceGamepad size={fontSize} />
              </Button>
            </Link>
          </Container>

          <Container>
            {/* right side of the top TopNavbar */}
            <Link
              to="/"
              style={{ textDecoration: "none", marginRight: "20px" }}>
              <IconGridDots size={rightButtonSize} />
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", marginRight: "20px" }}>
              <IconBrandMessenger size={rightButtonSize} />
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <IconBellFilled size={rightButtonSize} />
            </Link>
            <Link to="/profile">{/* profile picture */}</Link>
          </Container>
        </div>
      </Container>
    </Paper>
  );
};

export default TopNavbar;
