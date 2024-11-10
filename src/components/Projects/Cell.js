import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
// import Chip from '@mui/material/Chip';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
      {/* <div className="technologies">
        <p>{data.technology.map((tech, index) => (
          key={index} label={tech} style={{ margin: '5px' }}
        ))}</p>
      </div> */}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    // technology: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Cell;
