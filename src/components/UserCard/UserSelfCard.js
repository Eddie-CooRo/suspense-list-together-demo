import React from 'react';
import styles from './UserSelfCard.module.scss';

const UserSelfCard = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.selfCard}`}>
        <img className={styles.image} src={user.image} />
        <div className={styles.imageDescription}>
          <p>{user.name}</p>
          <p>{user.surName}</p>
        </div>
        <div className={styles.details}>
          <span>{user.gender}</span>
          <span className={styles.bullet} />
          <span>{user.age}</span>
        </div>
      </div>
    </div>
  );
};
export default UserSelfCard;
