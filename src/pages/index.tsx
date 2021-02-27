import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Perfil';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';
import { prependOnceListener } from 'process';

interface HomeProps {
  level: number;
  currentEx: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentEx={props.currentEx}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentEx, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentEx: Number(currentEx),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
