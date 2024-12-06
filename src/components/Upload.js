import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState();
  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="button" onClick={upload}>
        Upload
      </button>
    </div>
  );
};
export default Upload;
