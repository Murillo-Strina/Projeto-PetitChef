import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

function InputField({
  label,
  type = 'text',
  value = '',
  onChange,
  onKeyDown = () => {},
  placeholder = '',
}) {
  return (
    <div className={styles.inputField}>
      <label className={styles.label}>
        <span>{label}</span>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputField;
