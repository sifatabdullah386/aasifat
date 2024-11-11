import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './CategoryButton';
import ProjectItem from './ProjectItem';

const ProjectContainer = ({ projects, categories }) => {
  const initialButtons = Object.fromEntries(
    [['All', false]].concat(categories.map(({ name }) => [name, false])),
  );

  const [buttons, setButtons] = useState(initialButtons);

  const handleChildClick = (label) => {
    // Toggle button that was clicked. Turn all other buttons off.
    const newButtons = Object.keys(buttons).reduce(
      (obj, key) => ({
        ...obj,
        [key]: label === key && !buttons[key],
      }),
      {},
    );
    // Turn on 'All' button if other buttons are off
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getRows = () => {
    // search for true active categories
    const actCat = Object.keys(buttons).reduce(
      (cat, key) => (buttons[key] ? key : cat),
      'All',
    );

    const comparator = (a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    return projects
      .sort(comparator)
      .filter((skill) => actCat === 'All' || skill.category.includes(actCat))
      .map((skill) => (
        <ProjectItem categories={categories} data={skill} key={skill.title} />
      ));
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="project-category">
      <div className="skill-button-container">{getButtons()}</div>
      <div className="skill-row-container">{getRows()}</div>
    </div>
  );
};

ProjectContainer.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.string,
      date: PropTypes.string,
      desc: PropTypes.string,
      technology: PropTypes.arrayOf(PropTypes.string),
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

ProjectContainer.defaultProps = {
  projects: [],
  categories: [],
};

export default ProjectContainer;
