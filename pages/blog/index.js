import { memo } from "react";
import { Blogs } from "../../components/organisms/blog";

const Blog = () => {
  return <div><Blogs/></div>;
};

export default memo(Blog);
