import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../assets/js/common';

Blog.propTypes = {
  blog: PropTypes.object.isRequired
};

function Blog(props) {
  const { blog } = props;

  return (
    <div className="blog-container">
      <div className="cover">
        <img src={require(`../assets/images/news/${blog.cover}`)} alt="" />
      </div>
      <div className="caption">
        <h3 className="created-at">{formatDate(blog.createdAt)}</h3>
        <a className="title" href="/">{blog.title}</a>
        <h3 className="posted-at">{formatDate(blog.postedAt)} by {blog.author}</h3>
      </div>
    </div>
  );
}

export default Blog;