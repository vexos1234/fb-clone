import { string } from "prop-types"
import { type Database } from "./database"
import { UserIdentity } from "@supabase/supabase-js"

type PostEntity = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Post = PostEntity & {
  user: UserEntity
  image: string
}

export type LikedItem = {
  user_id : UserIdentity | undefined
  post_id : string
}