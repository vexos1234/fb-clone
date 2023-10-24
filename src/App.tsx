import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { AuthSession } from "@supabase/supabase-js";
import Layout from "./routes/Layout";
import Profile from "./Components/Profile";

const publicPages = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

export default function App() {
  const [session, setSession] = useState<AuthSession | null>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session on root:", session);
      setSession(session);
    });
  }, []);

  if (session) {
    return (
      // private routes
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout onLogOut={() => setSession(null)} />}>
              <Route
                index
                element={<Home onLogOut={() => setSession(null)} />}
              />
              <Route path="profile" element={<Profile session={session} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  return <RouterProvider router={publicPages} />;
}
