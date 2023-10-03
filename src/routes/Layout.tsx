import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Button, Stack } from "@mantine/core";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Demo(props: { onLogOut: () => void }) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    props.onLogOut();
    navigate("/");
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack>
          <Link to="/">home</Link>
          <Link to="/profile">profile</Link>
          <Button onClick={handleSignOut}>Logout</Button>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <h1>outlet</h1>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
