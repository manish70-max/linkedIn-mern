import dotenv from "dotenv";

dotenv.config();


if (!process.env.PORT) {
  throw new Error("PORT is not defined in environment variables");
}

if (!process.env.MONGODB_URL) {
  throw new Error("MONGO_URL is not defined in environment variables");
}

const config = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,

  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};



export default config;