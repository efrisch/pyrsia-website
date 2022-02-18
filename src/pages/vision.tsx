import React from 'react';
import Layout from '@theme/Layout';
import styles from './vision.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

export default function Overview(): JSX.Element {
  return (
    <Layout>
      <div className="container">

        <div className="row padding-vert--md">
          <div className={clsx('col col--1')}></div>
          <div className={clsx('col col--7')}>
            <h1 className='padding-top--xl padding-bottom--md'>
              Pyrsia sets out to be the <span className={styles.primaryColor}>torch</span> that <span className={styles.primaryColor}>lights</span> up
              the open-source supply chain.</h1>
          </div>
        </div>

        <div className='row'>
          <div className={clsx('col col--4 padding-vert--md')}>
            <h3>The problem with open source security</h3>
            <p>
              Not knowing where all your software comes from means hard-to-spot risks to the integrity of your services. Without constant identity checks and safety protocols for keys and secrets, open source dependencies can open the door to breaches, exploits and supply chain attacks.
            </p>
            <p>
              <i>Stolen from Sigstore's site</i>
            </p>
          </div>
          <div className={clsx('col col--8')}>
            <img className={styles.svgDark} width="100%" src="https://www.sigstore.dev/img/problemwithopensource_update.svg" alt="Fancy Banner" />
          </div>

          <div className={clsx('col col--12 padding-top--md')}>
            <Admonition type="note" icon="💡" title="Where does Pyrsia fit in...">
              <p>
                What does Pyrsia address in <Link href='https://slsa.dev/spec/v0.1/index'>SLSA</Link>'s treat landscape?
              </p>
              <p>
                Firmly the "dependencies" section. The only way to obtaining confidence is to have detailed transparent information across the supply chain.
              </p>
            </Admonition>
          </div>
        </div>

        <div className='row padding-vert--md'>
          <div className={clsx('col col--12')}>
            <h3>What Pyrsia sets out to provided</h3>
            <ul>
              <li>Confident Providence of the package (e.g. Signed commit, Build log attestations, Non-repudiation of publisher)</li>
              <li>Immutable History (e.g. transparency log of every package in it's original state and it's metadata as it changes over time)</li>
              <li>Secure and Efficient Distribution (e.g. verifiable integrity of the package and it's source)</li>
              <li>Fault tolerance - Distrusted network storages means </li>
            </ul>
          </div>
          <div className={clsx('col col--12')}>
            <h3>Assertions <b>not</b> made by Pyrsia Network -- Limited facts are know (confusing session needs more work)</h3>
            <ul>
              <li>Code Quality (absence of e.g Human error, bugs, security vulnerabilities -- may be information)</li>
              <li>Trust Worthiness of the Source (e.g qualification of the actor)</li>
              <li>Completeness of Dependencies (e.g missing or incorrect information about packages within or used to build the artifact)</li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className={clsx('col col--12')}>
            <h3>
              Guiding Principles
            </h3>
            <ul>
              <li>
                represents data in formats that are both machine- and human-readable.
              </li>
              <li>
                focuses on collecting and communicating facts; and provides a framework to make assertions about those facts.
              </li>
              <li>
                built on open standards for the open source community.
                <p>
                  Leverage and integrate with the technologies you are already relying on to secure your supply chain.
                </p>
                <p>
                  Examples which are available are the Linux Foundation's <Link href="https://spdx.dev/">SPDX</Link>, 
                  <Link href="https://cyclonedx.org/">OWASP CycloneDX</Link>, or <Link href="https://buildinfo.org">Build Info</Link>
                </p>
              </li>
            </ul>
            <p>
              <i>Stolen from SPDX's site</i>
            </p>
          </div>
        </div>

        <div className={clsx('row text--center padding-vert--md')}>
          <div className={clsx('col col--12 padding-bottom--md')}>
            <h2>Gain confidence by having transparency on the <u>source</u> of the packages you need</h2>
          </div>
          <div className={clsx('col col--4')}>
            <h3>Actors and Entities</h3>
            <p>Attestations proved non-repudiation so developers know exactly who wrote the code, how it was built and how the artifact was published.

              Build on standard like <Link href="https://www.sigstore.dev/">Sigstore's</Link> <Link href="https://github.com/sigstore/cosign">Cosign</Link> to
              <Link href="https://docs.npmjs.com/about-pgp-signatures-for-packages-in-the-public-registry">NPM Packages Signing</Link> allows
              developers to rapidly add their containers to pyrsia network along side their favorite container registries.

              <Link href="https://github.com/notaryproject/notation">Notary V2</Link>
            </p>
          </div>
          <div className={clsx('col col--4')}>
            <h3>Source Revision</h3>
            <p>Open interoperable standards such as <Link href="https://www.linuxjournal.com/content/signing-git-commits"> Git Commit Signatures </Link>
              help to pin down the exact commit where the source code originates from.
              Know the author and commit who wrote the code. Know who built and published the code from their secured environment.</p>
          </div>
          <div className={clsx('col col--4')}>
            <h3>Immutable Ledger</h3>
            <p>
              Every package ever published forever record in an unchanging ledger persists the consistent reproducible data pointing
              to a uniquely identifiable artifact that can always be available in the network.
            </p>
          </div>
          <div className={clsx('col col--2')}></div>
          <div className={clsx('col col--4')}>
            <h3>Distributed Network</h3>
            <p>
              Each node connects through relays to discover each other. When a node download a package that's requested by it's peer
              it's cached and seeding the network when another node looks for the same package. This provides a robust and highly available
              package ecosystem not limited by a central repository.
            </p>
          </div>
          <div className={clsx('col col--4')}>
            <h3>Reputable Partners</h3>
            <p>
              In order to bootstrap trust, only select few reputable entities with will build and publishing images.
              These image will be available to everyone. Participates of the OpenSSF will all the have chance to volunteer
              their resources to help establish the <i>first distributed network</i>, but we are most excited for the future!
            </p>
          </div>
        </div>

        <div className={clsx('row padding-vert--md')}>
          <div className={clsx('col col--12')}>
            <h3>Key Concepts</h3>
            <p><b>Packages</b>: are specific file(s) are consumed by developers to build their software</p>
            <p><b>Central Repositories</b>: are the established publicly available hosts of packages</p>
            <hr />
            <p><b>Artifacts</b>: are the abstraction of specific packages types (e.g Docker or Conan) which are loosely binary blobs</p>
            <p><b>Nodes</b>: are the software that connects system together. They provide local access to package managers. Allow the local system to
              participate in the network seeding packages.</p>
            <p>There are to class of nodes "authoritative", which represent reputable partners allowed to publish packages; "seeds" which download and share
              artifacts acting as distrusted storage</p>
            <p><b>Network</b>: references to the whole interconnect system of nodes and the various mechanism they use to communicate with one another</p>
          </div>
        </div>

        <div className={clsx('row padding-vert--md')}>
          <div className={clsx('col col--12')}>
            <h2>Composable elements</h2>
          </div>
          <div className={clsx('col col--12 padding-bottom--md')}>
            <ul>
              <li>
                Single application services provides a universal API for seamless integration options
              </li>
              <li>
                Accompanying command line interface provides easy access of all the key functions of the services
              </li>
              <li>
                Targeting developers system with the flexibility to be deployed anywhere, even the cloud
              </li>
              <li>
                Simplified network topology for how node connects. Reducing complexity for a more deterministic outcome.
              </li>
            </ul>
          </div>
        </div>

        <div className={clsx('row padding-vert--md')}>
          <div className={clsx('col col--12  text--center padding-bottom--md')}>
            <h2>Developer workflow</h2>
          </div>
          <div className={clsx('col col--4 padding-vert--md')}>
            <h3>Simple installations</h3>
            <p>
              Get started withe a one step installer. Followed up by generating signing keys.
            </p>
          </div>
          <div className={clsx('col col--8')}>
            <img width="100%" src={useBaseUrl("/img/pyrsia-instal.svg")} alt="Fancy Banner" />
          </div>
        </div>
        <div className='row'>
          <div className={clsx('col col--8')}>
            <img width="100%" src={useBaseUrl("/img/pyrsia-pull-inspect.svg")} alt="Fancy Banner" />
          </div>
          <div className={clsx('col col--4 padding-vert--md')}>
            <h3>Obtain your dependencies</h3>
            <p>
              Build your project as you always would. In this example we are downloading a container image with Docker.
              We are then able to inspect the artifact and check the source.
            </p>
          </div>
        </div>

        <div className={clsx('row text--center padding-vert--md')}>
          <div className={clsx('col col--12 padding-bottom--md')}>
            <h2>Where we are starting versus what the end goal is.</h2>
          </div>
        </div>

        <div className={clsx('row text--center')}>
          <div className={clsx('col col--4')}>
            <p>External build system, vouched by entities</p>
          </div>
          <div className={clsx('col col--4')}></div>
          <div className={clsx('col col--4')}>
            <p>Reproducible build across the network by various nodes which perform consensus on valid the "correct" artifact to publish</p>
          </div>
        </div>

        <div className={clsx('row text--center')}>
          <div className={clsx('col col--4')}>
            <p>Controlled access over who can publish packages on the network</p>
          </div>
          <div className={clsx('col col--4')}></div>
          <div className={clsx('col col--4')}>
            <p>Traceable Identities across multiple public source control platform</p>
          </div>
        </div>

        <div className={clsx('row text--center')}>
          <div className={clsx('col col--4')}>
            <p>Limited support for package types. We are only focused on Docker</p>
          </div>
          <div className={clsx('col col--4')}></div>
          <div className={clsx('col col--4')}>
            <p>Full integration will all package managers</p>
          </div>
        </div>

        <div className={clsx('row text--center')}>
          <div className={clsx('col col--4')}>
            <p>Heavily distributed network</p>
          </div>
          <div className={clsx('col col--4')}></div>
          <div className={clsx('col col--4')}>
            <p>Truly decentralized network</p>
          </div>
        </div>

        <div className={clsx('row text--center')}>
          <div className={clsx('col col--4')}>
            <p>Fully qualified artifact references</p>
          </div>
          <div className={clsx('col col--4')}></div>
          <div className={clsx('col col--4')}>
            <p>Native support for all workflows</p>
          </div>
        </div>
      </div>
    </Layout >
  )

};
