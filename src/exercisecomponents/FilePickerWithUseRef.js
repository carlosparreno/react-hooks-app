import React from 'react';

const FilePickerWithUseRef = () => {
  const fileInputId = 'fileInputID';

  const handleChange = () => {
    console.log('Files: ', 'No idea 🤷🏼‍♀️');
  };

  return (
    <div data-target="[data-file-container]">
      <label className="ha-label" htmlFor={fileInputId}>
        File Picker
      </label>
      <input type="file" id={fileInputId} data-file onChange={handleChange} />
      <p>
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        This File Picker component should display in the console the Name of the file. <br />
        <span role="img" aria-label="emoji">
          👉🏽
        </span>
        Hint: The HTML input type="file" provides an object with the files 'current.files' <br />
        <span role="img" aria-label="emoji">
          👉🏽
        </span>
        Hint2: You need a way to reference that HTML input
      </p>
    </div>
  );
};

export default FilePickerWithUseRef;
