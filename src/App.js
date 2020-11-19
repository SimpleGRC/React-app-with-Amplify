import S3FileUpload from 'react-s3';

//Optional Import
import { uploadFile } from 'react-s3';

const config = {
    bucketName: 'simplegrc',
    dirName: 'Evidence', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'AKIAQ5FVT2TIN535D6US',
    secretAccessKey: '634yJSSsmPCW8pX66Mrw5B6+r+87uTbpFLj1gAA+',
}

/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */



S3FileUpload
    .uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err))

//** OR *//

uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err))

  /**
   * {
   *   Response: {
   *     bucket: "your-bucket-name",
   *     key: "photos/image.jpg",
   *     location: "https://your-bucket.s3.amazonaws.com/photos/image.jpg"
   *   }
   * }
   */
});
