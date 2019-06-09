import React from 'react';

import { Remote } from 'electron';
import uuid from 'uuid';
import fsType from 'fs';
import pathType from 'path';

declare global {
  interface Window {
    require: any;
  }
}

const remote: Remote = window.require('electron').remote;

const fs: typeof fsType = remote.require('fs');
const path: typeof pathType = remote.require('path');

const testDir = path.join(remote.app.getAppPath(), 'test/');

function createFile() {
  const filename = uuid.v4() + '.txt';
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir);
  }

  const filePath = testDir + filename;
  fs.closeSync(fs.openSync(filePath, 'w'));

  console.log('created: ' + filename);
}

export const CreateFileButton = () => {
  return (
    <button className="CreateFileButton" onClick={createFile}>
      Create file
    </button>
  );
};
