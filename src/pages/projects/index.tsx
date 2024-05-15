import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';

const personal = [];

const course = [];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Projects</span>
        </h1>
        <p className="hero__subtitle">
          A list of <span className="hero__highlight">personal</span> and <span className="hero__highlight">course</span> projects.
        </p>
      </div>
    </header>
  );
}

function Feature({ url, imageUrl, title, description, className }) {
  return (
    <div className="col col--4">
      <div className="projects-feature">
        <Link className="projects-feature__link" to={url}>
          <div>
            <img
              className={`projects-feature__image ${className}`}
              src={imageUrl}
              alt={title}
            />
            <h3 className="projects-feature__heading">{title}</h3>
          </div>
        </Link>
        <p className="projects-feature__description">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="projects__header">Personal Projects</h2>
        </div>
        <div className="row">
          {personal.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <h2 className="projects__header">Course Projects</h2>
        </div>
        <div className="row">
          {course.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!"
    >
      <Hero />
      <main className="projects">
        <Features />
      </main>
    </Layout>
  );
}
