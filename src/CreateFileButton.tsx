import React from 'react';

function clicked() {
  console.log('clicked');
}

export const CreateFileButton = () => {
  return (
    <button className="CreateFileButton" onClick={clicked}>
      Create file
    </button>
  );
};
