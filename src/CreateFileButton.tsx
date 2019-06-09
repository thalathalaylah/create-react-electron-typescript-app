import React from 'react';

import { Remote } from 'electron';
import uuid from 'uuid';

declare global {
  interface Window {
    require: any;
  }
}

const remote: Remote = window.require('electron').remote;

function clicked() {
  const filename = uuid.v4() + '.txt';
  console.log('created: ' + filename);
}

export const CreateFileButton = () => {
  return (
    <button className="CreateFileButton" onClick={clicked}>
      Create file
    </button>
  );
};
