import React, { useRef } from 'react';

const FilePickerWithUseRef = () => {
  const fileInputId = 'fileInputID';
  const inputRef = useRef();

  const handleChange = () => {
    console.log('Files: ', inputRef.current.files);
  };

  return (
    <div data-target="[data-file-container]">
      <label className="ha-label" htmlFor={fileInputId}>
        File Picker
      </label>
      <input type="file" id={fileInputId} ref={inputRef} data-file onChange={handleChange} />
    </div>
  );
};

export default FilePickerWithUseRef;
