import { config } from "dotenv";
config();

export default {
  database: {
    URI: process.env.MONGODB_URI || "mongodb+srv://inmobiliaria:HadesPassword@inmobiliariaproyect.yq1s0.mongodb.net/inmobiliariaProyect?retryWrites=true&w=majority",
  },
  port: process.env.PORT || 3000,
};
