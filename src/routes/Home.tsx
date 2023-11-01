import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Box, Grid } from "@mui/material";
import LeftNavbar from "../Components/LeftNavbar";
import CreatePost from "../Components/CreatePost";
import ContentCard from "../Components/ContentCard";
import { AuthSession } from "@supabase/supabase-js";
import RightNavbar from "../Components/RightNavbar";

function Home(props: { onLogOut: () => void }) {
  const [session, SetSession] = useState<AuthSession | null>();

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   setSession(null);
  // };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session on layout:", session);
      SetSession(session);
    });
  }, []);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     console.log("session on root:", session);
  //     if (!session) {
  //       return navigate("/signin");
  //     } else {
  //       navigate("/home");
  //     }
  //   });
  // }, []);

  if (session !== undefined)
    return (
      <div>
        {/* LEFT */}
        <Grid container sx={{ marginTop: "75px" }}>
          <Grid display="flex" justifyContent="left" item xs={3} sx={{}}>
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
            xs={6}
            sx={{}}
          >
            <CreatePost session={session} width={"648px"} />
            <ContentCard session={session} />
          </Grid>
          {/* RIGTH */}
          <Grid display="flex" item xs={3}>
            <Box>
              <RightNavbar />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
}

export default Home;
