import React from 'react';
import { CORE_CONCEPTS } from '../js/data';

function CoreContent({ image,title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreContent key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
