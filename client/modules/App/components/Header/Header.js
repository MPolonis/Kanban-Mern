import React from 'react';
import PropTypes from 'prop-types';


// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div>
      <h1 className={styles.header}>Kanban App</h1>
        {
          context.router.isActive('/', true)
        }
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default Header;
