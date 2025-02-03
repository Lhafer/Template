import AWS from "aws-sdk";
import "dotenv/config";
AWS.config.update({
  accessKeyId: process.env.VITE_ACCESS_KEY,
  secretAccessKey: process.env.VITE_SECRET_KEY,
  region: process.env.VITE_REGION,
});

export const s3 = new AWS.S3();

export const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.VITE_BUCKET_NAME,
    Key: file.name,
    Body: file,
    ContentType: file.type,
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
