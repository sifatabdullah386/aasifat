import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const ProjectItem = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <div className="cell-header">
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          <h5 className="worked-for">
            <a href={data.workedurl}>{data.workedfor}</a>
          </h5>
        </div>
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
      <div className="technologies">
        {data.technology.map((tech) => (
          <button key={tech} className="tech-button" type="button">
            {tech}
          </button>
        ))}
      </div>
    </article>
  </div>
);

ProjectItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    workedfor: PropTypes.string.isRequired,
    workedurl: PropTypes.string.isRequired,
    technology: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectItem;
