import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export default function Friendsitem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span
        className={isOnline ? css.status__online : css.status__offline}
      ></span>

      <img className={css.avatar} src={avatar} alt={name} width="100" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

Friendsitem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
