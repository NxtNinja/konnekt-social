import PostCard from "./PostCard";

const FeedPosts = () => {
  return (
    <>
      <div className="grid place-items-center gap-8">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default FeedPosts;
