import React from 'react';

// import content
import { Projects } from './Content';

// styles
import './Work.scss';

export default function Work() {
  console.log(Projects);
  return (
    <div className='work'>
      <h1 style={{ marginTop: '400px' }}>Work</h1>
      {Projects.map(({ title, url, repo, figma, coLab, id }) => (
        <div key={id}>
          <h2>{title}</h2>
          <h4>{url}</h4>
          <h4>{repo}</h4>
          <h4>{figma}</h4>
          <h4>{coLab}</h4>
        </div>
      ))}
    </div>
  );
}
