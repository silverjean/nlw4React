import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentEx, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentEx * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentEx} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
