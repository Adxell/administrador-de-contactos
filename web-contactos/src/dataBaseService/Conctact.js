import axios from "axios";

class ServiceConctact {
  getContact() {
    return axios.get("http://localhost:5000/api/conctact");
  }

  getContactById(id) {
    return axios.get(`http://localhost:5000/api/conctact/${id}`);
  }

  updateContactById(id, updateContact) {
    return axios.put(`http://localhost:5000/api/conctact/${id}`, {
      firstName: updateContact.firstName,
      lastName: updateContact.lastName,
      correo: updateContact.correo,
      telefeno: updateContact.telefeno,
      celular: updateContact.celular,
      direccion: updateContact.direccion,
      ciudad: updateContact.ciudad,
    });
  }

  deleteContactById(id) {
    return axios.delete(`http://localhost:5000/api/conctact/${id}`);
  }

  createContact(createContact) {
    return axios.post(`http://localhost:5000/api/conctact/`, {
      firstName: createContact.firstName,
      lastName: createContact.lastName,
      correo: createContact.correo,
      telefeno: createContact.telefeno,
      celular: createContact.celular,
      direccion: createContact.direccion,
      ciudad: createContact.ciudad,
    });
  }
}

export default new ServiceConctact();
