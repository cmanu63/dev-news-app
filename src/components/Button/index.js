import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    onClick, 
    className, 
    children,
  }) =>
    <button
      type = "button"
      className = { className }
      onClick = { onClick }
    >
      { children }
    </button>

  Button.defaultProps = {
    className : ''
  };

  Button.propTypes = {
    onClick : PropTypes.func.isRequired,
    className : PropTypes.string,
    children : PropTypes.node.isRequired
  };
  
  const Loading = () =>
    <div> Loading... </div>
  
  const withLoading = ( Component) => ({ isLoading, ...rest }) =>
    isLoading
      ? <Loading />
      : <Component { ...rest } />
  
  const ButtonWithLoading = withLoading(Button);

  export { Button, ButtonWithLoading };