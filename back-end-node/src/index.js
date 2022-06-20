import app from "./app.js"


import { sequelizee } from "./db.js";


import { ModelContacts } from "./models/Contacts.js";


async function creatingModel() {
  try {
    await ModelContacts.sync();
    console.log("Model Created");
  } catch (err) {
    console.log("Error to create the Model", err);
  }
}


async function connectToDd() {
  try {
    const response= await sequelizee.authenticate();
    console.log("Connection has been established successfully.");
    console.log("Connection has been established successfully.", response);
    creatingModel();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

setTimeout(() => {
  app.listen(5000, () => console.log("Server up on port 5000"));
  connectToDd();
}, 30000);
