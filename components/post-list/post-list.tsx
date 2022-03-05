import PostItem from "../post-item/post-item";

interface IPostListProps {
  data: Array<IPostProps>;
}

interface IPostProps {
  slug: string;
  frontmatter: any;
}

const PostList = ({ data }: IPostListProps) => {
  const renderPostItems = data.map(post => (
    <PostItem
      key={post.slug}
      title={post.frontmatter.title}
      desc={post.frontmatter.description}
      path={post.slug}
    />
  ));

  return <div>{renderPostItems}</div>;
};

export default PostList;
