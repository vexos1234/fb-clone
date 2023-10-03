import { supabase } from "../supabaseClient";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import { useState, useEffect } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export default function SignInComponent() {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  //   const {
  //     data: { session },
  //   } = await supabase.auth.getSession();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (!session) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["github"]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>Logged in!</div>
      <Button className="bg-black" onClick={handleSignOut}>
        Sign out
      </Button>
    </div>
  );
}
