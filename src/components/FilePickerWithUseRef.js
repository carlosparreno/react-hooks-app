import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const FilePickerWithUseRef = props => {
  const {
    label,
    onChange,
  } = props;

  const fileInputId = 'fileInputID';
  const inputRef = useRef();

  const handleChange = event => {
    if (onChange) {
      onChange(event, inputRef.current.files);
    }
  };

  return (
    <div
      data-target="[data-file-container]"
    >
      <label className="ha-label" htmlFor={fileInputId}>   
        {label}
      </label>
      <input
        type="file"
        id={fileInputId}
        ref={inputRef}
        data-file
        onChange={handleChange}
      />
    </div>
  );
};

FilePickerWithUseRef.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
}
FilePickerWithUseRef.defaultProps = {
  onChange: () => {},
};

export default FilePickerWithUseRef;
