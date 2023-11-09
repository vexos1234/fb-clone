import { useEffect, useState } from "react";
import TopNavbar from "../Components/TopNavbar";
import { AuthSession } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import "./styles.css";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

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
        <TopNavbar />
        <Toaster position="top-center" />

        <Outlet />
      </div>
    );
}

export default Layout;
