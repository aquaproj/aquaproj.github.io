import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="https://raw.githubusercontent.com/aquaproj/aqua/main/logo/aqua_without_text.svg" alt="aqua Logo" className="top__logo" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://asciinema.org/a/498262?autoplay=1">
            Demo
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial-basics/quick-start">
            Quick Start
          </Link>
        </div>
      </div>
    </header>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <div className="video-container">
            <LiteYouTubeEmbed
              id="adX_lloB3mY"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Introduction of aqua"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`aqua Official Website`}
      description="aqua Official Website">
      <HomepageHeader />
      <VideoContainer />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
