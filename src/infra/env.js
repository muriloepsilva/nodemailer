import { config } from "dotenv-safe";
config();
const CONFIG = {};

CONFIG.email = process.env.email || null;
CONFIG.email_password = process.env.email_password || null;

export default CONFIG;
