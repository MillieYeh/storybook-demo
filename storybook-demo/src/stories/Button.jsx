import React from 'react';
import PropTypes from 'prop-types';
import '../stories/Button.css';
import { buttonTypes, buttonVariants, buttonSizes } from '../stories/constants.js';
import { AiOutlineHome } from 'react-icons/ai';
import CircularProgress from '@material-ui/core/CircularProgress';



  
const Button = (props) => {
  const {
    text,
    isDisabled,
    isLoading,
    type,
    size,
    backgroundColor,
    textColor,
    onClick,
    shadow,
    startIcon,
    endIcon,
  } = props;

  const shadows = shadow ? 'shadow' : '';
  const disabled = isDisabled ? 'disabled' : '';

  return (
    <button
      onClick={onClick}
      className={[
        'button',
        `${size}`,
        `${type}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      ].join(' ')}
      disabled={isDisabled}
      {...props}
    >
      {startIcon && (
        <AiOutlineHome class="icon-start" color="#FFF"/>
      )}
      {text}
      {endIcon && (
        <AiOutlineHome class="icon-end" color="#FFF"/>
      )}
      {isLoading && (
        <CircularProgress class="loading" size="1rem"/>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf([
    buttonTypes.outline,
    buttonTypes.filled,
    buttonTypes.text,
  ]),
  variant: PropTypes.oneOf([buttonVariants.oval, buttonVariants.rectangular]),
  size: PropTypes.oneOf([
    buttonSizes.small,
    buttonSizes.medium,
    buttonSizes.large,
  ]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isDisabled: false,
  type: 'filled',
  variant: 'oval',
  backgroundColor: 'transparent',
  textColor: 'white',
  shadow:false,
  size: 'small',
};

export default Button;