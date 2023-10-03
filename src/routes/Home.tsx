import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Post } from "../types/posts";

function Home() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   setSession(null);
  // };

  useEffect(() => {
    async function getPosts() {
      const { data } = await supabase
        .from("posts")
        .select("*, user:users(name, avatar_url, user_name)")
        .order("created_at", { ascending: false });
      setPosts(data);
    }
    getPosts();
  }, []);

  console.log(posts);
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

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}

export default Home;
