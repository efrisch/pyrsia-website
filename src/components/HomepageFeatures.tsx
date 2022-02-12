import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import HomepageHighlights from './HomepageHighlights'

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Confidence in Packages',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Signatures provide non-repudiation allowing developers to know the exact source of the packages they
        need and rely on.
      </>
    ),
  },
  {
    title: 'Building Blocks',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Planned support for all the repositories developers need (e.g Docker, Conan, Go).
      </>
    ),
  },
  {
    title: 'Goals of Pyrsia',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        We care about improving the security posture of open source projects and their supply chains
        that are critical to the global development of software.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--2')}>
            </div>
            <div className={clsx('col col--8 text--center')}>
              <h2>Pyrsia enables developers to quickly and easily leverage any package with confidence and transparency.</h2>
            </div>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <HomepageHighlights />
      <section>
        <div className="container">
          <div className="row text--center">
            <div className={clsx('col col--1')}>
            </div>
            <div className={clsx('col col--10')}>
              <h2>The team behind Pyrsia</h2>
              <img width="100%" src="https://via.placeholder.com/650x150/70130e/ffffff?text=Team+Group+Photo" alt="Fancy Banner" />
              <p>
              Pyrsia is driven by leading companies in the software industry. As a prospective project of the OpenSSF we are building on decades of
              experience developing, deploying and securing code pipelines. With companies like JFrog supporting this project, we are leveraging our 
              knowledge of package management, integration with central repositories, and the requirements of building with open-source communities.
              </p>
              <a href="Learn more about the OpenSSF"></a>
            </div>
          </div>
          <div className="row">
            <div className={clsx('col col--1')}>
            </div>
            <div className={clsx('col col--10 ')}>
              <h2 className={clsx('text--center')}>Why Pyrsia?</h2>
              <p>
                The open-source supply chain has become a critical element to every technology, from the operating system and browser you are using
                to the applications and services which we depended on to run our lives. Innovation
                like <a href="https://mars.nasa.gov/news/8982/meet-the-open-source-software-powering-nasas-ingenuity-mars-helicopter/">NASA Mars Rovers</a> might
                not have been possible without the open source communities and the powerful technologies they have created.
              </p>
              <p>
                Yet in recent years this has become a vulnerability that has been exploited to inject malicious malware or virus that infected vast numbers
                of companies and services. In rare cases it has been highly regarded packages that have been compromised by their authors. What halts developers
                around the world is the <b>downtime and outages of the central repositories</b> that cripples continuous integration and delivery pipelines.
              </p>  
              <p>
                Pyrsia helps developers empower their app development. We simplify and accelerate development workflows with an integrated dev pipeline
                and through the distribution of packages. Pyrsia provides unmatched simplicity, agility and choice.
              </p>
              <a href="Learn more about the OpenSSF"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
