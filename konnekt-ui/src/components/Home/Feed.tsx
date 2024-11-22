import FeedPosts from "../Feed/FeedPosts";
import FollowRecom from "./FollowRecom";

const Feed = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-24">
        <div className="lg:col-span-3">
          <FeedPosts />
        </div>
        <div className="lg:col-span-2 hidden lg:block">
          <FollowRecom />
        </div>
      </div>
    </>
  );
};

export default Feed;
