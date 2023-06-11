import React from 'react';
import PropTypes from 'prop-types';

const DevItems = ({developer}) => {

  return (

    <li className='collection-item'>
        <div>

            {/* Developer name */}
            {developer.firstName + ' ' + developer.lastName}

            {/* Delete Icon */}
            <a href="#!" className="secondary-content">
              <i className='material-symbols-outlined del-btn'> Delete</i>
            </a>
        </div>
    </li>
  )
}

DevItems.propTypes = {

    developer: PropTypes.object.isRequired
}

export default DevItems;