import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import S3FileUpload from 'react-s3';
//Optional Import
import { uploadFile } from 'react-s3';
Amplify.configure(aws_exports);

const config = {
    bucketName: 'simplegrc',
    dirName: 'Evidence', /* optional */
    region: 'us-east-2',
    accessKeyId: 'AKIAQ5FVT2TIC7UKRNYU',
    secretAccessKey: 'tvgMKBHL2bZdhKVUH79F',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <h3>
          aws s3 upload
          </h3>
          <input
          type="file"
          onChange={this.upload}
          />

        </p>


        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
