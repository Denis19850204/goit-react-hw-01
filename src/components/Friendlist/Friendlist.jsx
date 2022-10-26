import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export default function FriendsList(props) {
  const { friends } = props;

  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? css.status__online : css.status__offline
            }
          >
            {friend.status}
          </span>

          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="100"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
