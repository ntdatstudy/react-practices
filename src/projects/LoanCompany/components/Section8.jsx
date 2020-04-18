import React from 'react';
import Blog from './Blog';
import news from '../data/news.json';

function Section8() {
  return (
    <div className="section8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="title-container">
              <h1 className="primary-title">News form our latest blog</h1>
              <h3 className="secondary-title">News from around the world selected by us.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {news.map(blog => (
            <div key={blog.id} className="col-md-6">
              <Blog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section8;