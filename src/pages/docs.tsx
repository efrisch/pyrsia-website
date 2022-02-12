import React from 'react';
import Layout from '@theme/Layout';
import styles from './docs.module.css';

export default function Overview(): JSX.Element {
 return (
  <Layout>
    <div className={styles.flexBox}>

    <span className={styles.title}>
    <h1 className={styles.title}>Pyrsia set out to be the torch that lights up the open-source supply chain.</h1>
  </span>
  <img width="50%" src="https://via.placeholder.com/650x150/70130e/ffffff?text=Animated+Graphic" alt="Fancy Banner"/>
    </div>
  </Layout>
 )

};