import CommentForm from "./CommentForm";
import Link from "next/link";
import Actions from "./Actions";
import Header from "./Header";
import Carousel from "./Carousel";

function FeedPost() {
  return (
    <article className="space-y-2">
      <Header />
      <Carousel />
      <Actions />
      <h2 className="block text-sm font-bold">16.122 likes</h2>
      <p className="text-sm">
        <span className="font-bold">arridhaamrad&nbsp;</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero dolore
        iure qui, similique odio aliquam? Quisquam consectetur quis harum!
      </p>
      <Link href="" className="text-foreground/50 text-sm">
        See all 345 comments
      </Link>
      <CommentForm />
    </article>
  );
}

export default FeedPost;
