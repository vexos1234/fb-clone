import { useDisclosure } from "@mantine/hooks";
import {
  ActionIcon,
  AppShell,
  AppShellAside,
  Burger,
  Flex,
  Group,
  Stack,
} from "@mantine/core";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import TopNavbar from "../Components/TopNavbar";
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
import FacebookIcon from "../icons/FacebookIcon.tsx";

export default function Demo(props: { onLogOut: () => void }) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  const fontSize = "24px";
  const rightButtonSize = "23px";

  const centerButtonStyle = {
    fontWeight: "bold",
    color: "#848689",
    backgroundColor: "white",

    "buttonStyle:hover": {
      backgroundColor: "#F0F2F5",
      color: "#F0F2F5",
    },
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    props.onLogOut();
    navigate("/");
  };

  return (
    <AppShell
      header={{ height: 55 }}
      navbar={{ width: 344, breakpoint: "sm", collapsed: { mobile: !opened } }}
      aside={{ width: 344, breakpoint: "sm" }}
      padding="md">
      <AppShell.Header>
        <Container style={{ backgroundColor: "#fff" }}>
          <Flex
            mih={50}
            miw={100}
            bg="#fff"
            gap="xl"
            // justify="center"
            align="center"
            direction="row">
            {/* left side of the TopNavbar */}
            <Group h="33%" px="md">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
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
                  <ThemeIcon
                    radius={50}
                    style={{ width: "40px", height: "40px" }}>
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
            </Group>
            <Group h="33%">
              <Container>
                {/* center of the TopNavbar */}
                <Link to="/">
                  <ActionIcon style={centerButtonStyle}>
                    <IconHome size={fontSize} />
                  </ActionIcon>
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
            </Group>
            <Group>
              <Container>
                {/* right side of the top TopNavbar */}
                <Link to="/">
                  <IconGridDots
                    size={rightButtonSize}
                    style={centerButtonStyle}
                  />
                </Link>
                <Link to="/about">
                  <IconBrandMessenger
                    size={rightButtonSize}
                    style={centerButtonStyle}
                  />
                </Link>
                <Link to="/contact">
                  <IconBellFilled
                    size={rightButtonSize}
                    style={centerButtonStyle}
                  />
                </Link>
                <Link to="/profile">{/* profile picture */}</Link>
              </Container>
            </Group>
          </Flex>
        </Container>
      </AppShell.Header>

      {/* left */}
      <AppShell.Navbar
        withBorder={false}
        p="md"
        zIndex={80}
        style={{
          backgroundColor: "#F0F2F5",
        }}>
        <Stack>
          <Link to="/">home</Link>
          <Link to="/profile">profile</Link>
          <Button>Friends</Button>
          <Button>Memories</Button>
          <Button>Saved</Button>
          <Button>Groups</Button>
          <Button></Button>
          <Button onClick={handleSignOut}>Logout</Button>
        </Stack>
      </AppShell.Navbar>

      <AppShellAside withBorder={false} style={{ backgroundColor: "#F0F2F5" }}>
        <Button>aside</Button>
      </AppShellAside>

      <AppShell.Main>
        <h1>outlet</h1>
        <Outlet />
        <Button>sdfsdf</Button>
      </AppShell.Main>
    </AppShell>
  );
}
