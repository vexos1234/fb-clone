import { useEffect, useState } from "react";
import TopNavbar from "../Components/TopNavbar";
import { AuthSession } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import { Box, Container, Grid } from "@mui/material";
import ContentCard from "../Components/ContentCard";
import "./styles.css";

function Layout(props: { onLogOut: () => void }) {
  const [session, SetSession] = useState<AuthSession | null>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session on layout:", session);
      SetSession(session);
    });
  }, []);

  if (session !== undefined)
    return (
      <>
        <TopNavbar session={session} />
        <Grid container spacing={3} sx={{ marginTop: "40px" }}>
          <Grid display="flex" justifyContent="center" item xs={3}>
            <Box>
              <h1>left content</h1>
            </Box>
          </Grid>
          <Grid
            display="flex"
            justifyContent="center"
            flexDirection="column"
            item
            xs={6}
            sx={{ border: "1px solid #000000" }}
          >
            <ContentCard />
          </Grid>
          <Grid item xs={3}>
            <Box>
              <h1>right content</h1>
            </Box>
          </Grid>
        </Grid>
      </>
    );
}

export default Layout;
