import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HomeContext } from '../contexts/HomeContext';

Banner.propTypes = {
  banner: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

function Banner(props) {
  const { banner, index } = props;
  const { bannerSelected } = useContext(HomeContext);
  const className = index === bannerSelected ? 'goodfoods-banner active' : 'goodfoods-banner';

  return (
    <>
      {index === bannerSelected && (
        <div className={className}>
            <div className="banner-text">
              <h2>{banner.title1}<br />{banner.title2}</h2>
              <p>{banner.content}</p>
              <Link to="/">Read More</Link>
            </div>
            <div className="banner-img">
              <img src={require(`../assets/images/banners/${banner.image}`)} alt="" />
            </div>
        </div>
      )}
    </>
  );
}

export default Banner;