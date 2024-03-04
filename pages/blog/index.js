import { memo } from "react";
import dynamic from "next/dynamic";
const Blogs = dynamic(() => import('../../components/organisms/blog/Blogs'));


const Blog = () => {
  return <Blogs />;
};

export default memo(Blog);
