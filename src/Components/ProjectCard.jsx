import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { SiSitepoint } from 'react-icons/si';

function ProjectCard({
  description, linkWebSite, linkGitHub, title,
}) {
  return (
    <>
      <div className="Project">
        <h3 className="Title-Project">
          { title }
        </h3>
        <p className="Abstract-Project">
          { description }
        </p>
        <div className="Buttons-Project">
          <a
            href={linkWebSite}
            className="link-btn-project"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="Btn-Project-Links">
              <SiSitepoint />
              <span className="whats">WebSite</span>
            </button>
          </a>
          <a
            href={linkGitHub}
            className="link-btn-project"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="Btn-Project-Links">
              <FaGithub />
              <span className="whats"> GitHub </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  linkGitHub: PropTypes.string,
  linkWebSite: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  linkGitHub: '',
  linkWebSite: '',
};

export default ProjectCard;