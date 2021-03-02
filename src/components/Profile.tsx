import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/Wagner53426.png" alt="Wagner Jesus"/>
      <div>
        <strong>Wagner Jesus</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
        Level {level}
          </p>
      </div>
    </div>
  );
}