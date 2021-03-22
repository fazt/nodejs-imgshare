import { config } from "dotenv";
config();

export default {
  database: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/imgshare",
  },
  port: process.env.PORT || 3000,
};
