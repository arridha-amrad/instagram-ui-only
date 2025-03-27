import FeedPost from "./FeedPost";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-[468px] space-y-8 pb-16">
      <FeedPost />
      <FeedPost />
    </div>
  );
}
