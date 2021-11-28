import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Install tools quickly and easily',
    description: (
      <>
        You can install tools quickly. Just run <code>aqua i</code>
        You don't have to specify packages in the command.
      </>
    ),
  },
  {
    title: 'Single binary written in Go',
    description: (
      <>
        aqua is written in Go. Mac OSX and Linux are supported.
        aqua doesn't depend on the specific shell.
      </>
    ),
  },
  {
    title: 'Pin tool version',
    description: (
      <>
        aqua forces to pin tool versions, which solves the problem due to the difference of tool versions.
      </>
    ),
  },
  {
    title: 'Lazy Install',
    description: (
      <>
        aqua installs a tool automatically when the tool is invoked.
      </>
    ),
  },
  {
    title: 'Change tool versions per project',
    description: (
      <>
        aqua manages tool versions per configuration.
        You can install multiple versions and switch versions seamulessly.
      </>
    ),
  },
  {
    title: 'Renovate Integration',
    description: (
      <>
        You can update tools continuously by Renovate.
        <a target="_blank" href="https://github.com/aquaproj/aqua-renovate-config">Renovate preset for aqua</a> is provided.
      </>
    ),
  },
  {
    title: 'GitHub Actions and CircleCI Orb',
    description: (
      <>
        GitHub Actions and CircleCI Orb for aqua are provided.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
