import { useEffect, useState } from "react";
import TopNavbar from "../Components/TopNavbar";
import { AuthSession } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import { Box, Container, Grid } from "@mui/material";
import ContentCard from "../Components/ContentCard";
import "./styles.css";
import LeftNavbar from "../Components/LeftNavbar";
import CreatePost from "../Components/CreatePost";

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
      <div className="layout-container">
        <TopNavbar session={session} />
        {/* LEFT */}
        <Grid container sx={{ marginTop: "75px" }}>
          <Grid display="flex" justifyContent="left" item xs={2} sx={{}}>
            <Box>
              <LeftNavbar session={session} />
            </Box>
          </Grid>
          {/* CENTER */}
          <Grid
            display="flex"
            justifyContent="center"
            flexDirection="column"
            item
            xs={8}
            sx={{}}
          >
            <CreatePost session={session} />
            <ContentCard />
          </Grid>
          {/* RIGTH */}
          <Grid item xs={2}>
            <Box>
              <h1>right content</h1>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
}

export default Layout;
