import React from 'react';
import Layout from '@theme/Layout';
import styles from './vision.module.css';
import clsx from 'clsx';

export default function Overview(): JSX.Element {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <h1>Pyrsia set out to be the torch that lights up the open-source supply chain.</h1>
          </div>
          <div className={clsx('col col--6')}>
            <img width="100%" src="https://via.placeholder.com/650x150/70130e/ffffff?text=Animated+Graphic" alt="Fancy Banner" />
          </div>
        </div>
      </div>
    </Layout>
  )

};