import LikeButton from "./like-button";
import { getLikeCount } from "./action.js";

export default async function Home() {
  // // uncomment #6, #12 to give browser value(preserved value) from server(RAM), otherwise client usestate loss memory at refresh and become 0.
  // const getLikes = await getLikeCount();

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Server Actions Example</h1>
      <LikeButton initialLikes={0} />
      {/* <LikeButton initialLikes={getLikes} /> */}
    </div>
  );
}
