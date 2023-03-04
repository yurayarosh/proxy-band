import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchUsers } from '../store/slices/users/actions';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Albums from './Albums';
import { Id } from '../types/users';

const Users: FC = () => {
  const dispatch = useAppDispatch();
  const { users, usersError } = useAppSelector(state => state.users);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<Id | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (usersError) console.error(usersError);
  }, [usersError]);

  return (
    <>
      <ul className="users">
        {users &&
          users.map(user => (
            <li key={user.id}>
              <div className="user">
                <p className="user__title">{user.username}</p>
                <h3 className="user__title">{user.name}</h3>
                <Link to={`/posts/${user.id}`} className="btn">
                  пости
                </Link>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => {
                    setModalIsOpen(true);
                    setCurrentUserId(user.id);
                  }}
                >
                  альбоми
                </button>
              </div>
            </li>
          ))}
      </ul>

      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        {currentUserId && <Albums userId={currentUserId} />}
      </Modal>
    </>
  );
};

export default Users;
