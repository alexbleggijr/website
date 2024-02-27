import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';

const courses = [
  {
    url: '/docs/build-responsive-real-world-websites-with-html-and-css',
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    imageUrl: '../img/courses/build-responsive-real-world-websites-with-html-and-css.jpg',
    description: (
      <><a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
];

const books = [];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Courses</span>
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
      <div className="courses-feature">
        <Link className="courses-feature__link" to={url}>
          <div>
            <img className={`courses-feature__image ${className}`} src={imageUrl} alt={title} />
            <h3 className="courses-feature__heading">{title}</h3>
          </div>
        </Link>
        <p className="courses-feature__description">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="courses__header">Online Courses</h2>
        </div>
        <div className="row">
          {courses.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <h2 className="courses__header">Books</h2>
        </div>
        <div className="row">
          {books.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Courses(): JSX.Element {
  return (
    <Layout title="Courses" description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!">
      <Hero />
      <main className="courses">
        <Features />
      </main>
    </Layout>
  );
}
