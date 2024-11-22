import PostCard from "./PostCard";

const FeedPosts = () => {
  return (
    <>
      <div className="grid place-items-center lg:place-items-end gap-8">
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
