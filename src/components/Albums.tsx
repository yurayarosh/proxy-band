import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { setAlbums } from '../store/slices/users';
import { fetchAlbums } from '../store/slices/users/actions';
import { Id } from '../types/users';

interface IProps {
  userId: Id;
}

const Albums: FC<IProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const { albums, albumsError } = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchAlbums({ userId }));

    return () => {
      dispatch(setAlbums(null));
    };
  }, []);

  useEffect(() => {
    if (albumsError) console.error(albumsError);
  }, [albumsError]);
  return (
    <ul className="albums">
      {albums?.map(album => (
        <li key={album.id}>
          <div className="album">
            <h3 className="album__title">{album.title}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Albums;
