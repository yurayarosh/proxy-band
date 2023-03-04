import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store';
import { setPosts } from '../store/slices/users';
import { fetchPosts } from '../store/slices/users/actions';

const PostsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, postsError } = useAppSelector(state => state.users);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(
        fetchPosts({
          userId: Number(id),
        })
      );
    }

    return () => {
      dispatch(setPosts(null));
    };
  }, [id]);

  useEffect(() => {
    if (postsError) console.error(postsError);
  }, [postsError]);

  return (
    <ul className="posts">
      {posts?.map(post => (
        <li key={post.id}>
          <div className="post">
            <h3 className="post__title">{post.title}</h3>

            <div>{post.body}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostsPage;
