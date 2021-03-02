import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChalengeBox.module.css';

export function ChalengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded(){
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.ChalengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.chalengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.chalengeFailedButton}
              onClick={ handleChallengeFailed}
              
            >
              Falhei</button>
            <button
            className={styles.chalengeSucceedeButton}
              type="button"
              onClick={ handleChallengeSucceeded}
            >
              Completei
              </button>
          </footer>
        </div>
      ) : (
          <div className={styles.chalengeNoActive}>
            <strong> um ciclo para receber desafios</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level-up" />
        Avance de level completando desafios"
      </p>
          </div>
        )}
    </div>
  )
}