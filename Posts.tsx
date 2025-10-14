import { useCallback, useState } from "react";
import { usePostsQuery, usePrefetch } from "../redux/api/postsApi";

const PostList = () => {
    const [page, setPage] = useState(1);
    const { data: posts, error, isLoading } = usePostsQuery(page);
    const prefetchPosts = usePrefetch('posts');

    const prefetchNextPage = useCallback(() => {
        prefetchPosts(page + 1); // prefetchPosts(2); memoized function
    }, [prefetchPosts, page])  ;
    
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <>
     <ul>
      {posts?.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
    <button onClick={() => setPage(page + 1) } onMouseEnter={prefetchNextPage}>Next</button>
    <p>Current Page: {page}</p>
    <p>Total Posts: {posts?.length}</p>
    </>
   
  );
}   


export default PostList;