
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageHighlights.module.css';

type HighightItem = {
    title: string;
    image: string;
    description: JSX.Element;
};

const HighlightList: HighightItem[] = [
    {
        title: 'Frictionless',
        image: '/img/pyrsia-mountian-no-bg.png',
        description: (
            <>
                <p>
                    Pyrsia aims to seamlessly integrate with the package managers developers are already using.
                    The day to day impact should be minimal with the default configuration. Advance workflows can easily be enabled.
                </p>
                <Link to="/docs">Read More...</Link>
            </>
        )
    },
    {
        title: 'Transparency',
        image: '',
        description: (
            <>
                <p>
                    The combination of an open-source, customizable architecture, and a robust,
                    active community makes Pyrsia the most open way to obtain packages.
                </p>
                <Link href="/social">Join the Community</Link>
            </>
        )
    },
    {
        title: 'Interoperability',
        image: '',
        description: (
            <>
                <p>
                    Interoperability without foregoing compatibility, security, or efficiency; learn how Pyrsia takes a unique,
                    multifaceted approach to address each of these factors.
                </p>
                <Link href="/docs">Learn How</Link>
            </>
        )
    },
    {
        title: 'Secure',
        image: '',
        description: (
            <>
                <p>
                    Developers are often forced to make trade-offs between compatibility, security, and efficiency to interact with central repositories.
                    This has led to the creation of bridges, proxies, and other proprietary solutions, all with their own limitations.
                </p>
                <p>
                    Pyrsia takes a unique, transparent approach to address these tradeoffs.
                </p>
                <Link href="/docs">Read More...</Link>
            </>
        )
    },
];

function HighlistItem({ title, image, description, }: HighightItem) {
    return (
        <div className={clsx('col col--6 padding-horiz--md padding-vert--md')}>
            <div className={styles.uniqueInner}>
                <h3>{title}</h3>
                {description}
            </div>
        </div>
    );
}

export default function HomepageHighlights(): JSX.Element {
    return (
        <>
            <section className={styles.highlights}>
                <div className="container">
                    <div className="row">
                        <div className={clsx('col col--12 text--center')}>
                            <h2>Accelerate how you build, share, and consume open-source packages.</h2>
                        </div>
                    </div>
                    <div className="row">
                        {HighlightList.map((props, idx) => (
                            <HighlistItem key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <div className={styles.wave}></div>
        </>
    )
};
