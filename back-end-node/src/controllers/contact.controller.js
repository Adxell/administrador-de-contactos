import { ModelContacts } from "../models/Contacts.js";
export const getContacts = async (req, res) => {
  try {
    const getContact = await ModelContacts.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ getContact });
  } catch (error) {
    res.status(400).json({ message: "Error to server" });
  }
};
export const updateContactsById = async (req, res) => {
  try {
    const id = req.params.contactid;
    const {
      firstName,
      lastName,
      correo,
      telefeno,
      celular,
      direccion,
      ciudad,
    } = req.body;
    const conctact = await ModelContacts.findOne({ where: { id: id } });
    await conctact.update({
      firstName: firstName,
      lastName: lastName,
      correo: correo,
      telefeno: telefeno,
      celular: celular,
      direccion: direccion,
      ciudad: ciudad,
    });
    res.status(200).json({ message: "Contact Update" });
  } catch (error) {
    res.status(400).json({ message: "Error to server" });
  }
};
export const getContactsById = async (req, res) => {
  try {
    const id = req.params.contactid;
    const contact = await ModelContacts.findAll({ where: { id: id } });
    res.status(200).json({ contact });
  } catch (error) {
    res.status(400).json({ message: "Error to server" });
  }
};
export const createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      correo,
      telefeno,
      celular,
      direccion,
      ciudad,
    } = req.body;
    const contact = ModelContacts.build({
      firstName: firstName,
      lastName: lastName,
      correo: correo,
      telefeno: telefeno,
      celular: celular,
      direccion: direccion,
      ciudad: ciudad,
    });
    await contact.save();
    res.status(200).json({ success: "saved" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
export const deleteContact = async (req, res) => {
  try {
    const id = req.params.contactid;
    await ModelContacts.destroy({ where: { id: id } });
    res.status(200).json({ success: "Element deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error to delete" });
  }
};
