import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';

const core = [];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Knowledge</span>
        </h1>
        <p className="hero__subtitle">
          A list of <span className="hero__highlight">tools</span> and <span className="hero__highlight">technologies</span> with which I have knowledge and experience.
        </p>
      </div>
    </header>
  );
}

function Feature({ url, imageUrl, title, className = '' }) {
  return (
    <div className="knowledge-feature">
      <Link className="knowledge-feature__link" to={url}>
        <img
          className={`knowledge-feature__image ${className}`}
          src={imageUrl}
          alt={title}
        />
      </Link>
    </div>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="knowledge__header">Core</h2>
        </div>
        <div className="row">
          {core.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Knowledge(): JSX.Element {
  return (
    <Layout
      title="Knowledge"
      description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!"
    >
      <Hero />
      <main className="knowledge">
        <Features />
      </main>
    </Layout>
  );
}
