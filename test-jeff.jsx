import React from 'react';
import PropTypes from 'prop-types';

const gnar = 'gnarly';

const info = ({ file = __filename, dir = __dirname }) =>
  <p>{dir}: {file}</p>;

info.propTypes = {
    file: PropTypes.string.isRequired,
    dir: PropTypes.string.isRequired,
};

switch (gnar) {
    default :
        console.log('gnarley');
        break;
}
