import React, { useState } from "react";

import Conctact from "../../dataBaseService/Conctact";

const FormInformation = (props) => {
  const {
    id,
    firstName,
    lastName,
    correo,
    telefeno,
    celular,
    direccion,
    ciudad,
  } = props;
  const [firstNameForm, setFirstName] = useState(firstName);
  const [lastNameForm, setLastName] = useState(lastName);
  const [correoForm, setCorreo] = useState(correo);
  const [telefenoForm, setTelefeno] = useState(telefeno);
  const [celularForm, setCelular] = useState(celular);
  const [direccionForm, setDireccion] = useState(direccion);
  const [ciudadForm, setCiudad] = useState(ciudad);

  const onChangeUpdateFirstName = (e) => {
    const valueUpdatefirstName = e.target.value;
    setFirstName(valueUpdatefirstName);
  };
  const onChangeUpdateLastName = (e) => {
    const valueUpdateLastName = e.target.value;
    setLastName(valueUpdateLastName);
  };
  const onChangeUpdateCorreo = (e) => {
    const valueUpdateCorreo = e.target.value;
    setCorreo(valueUpdateCorreo);
  };
  const onChangeUpdateTelefono = (e) => {
    const valueUpdateTelefono = e.target.value;
    setTelefeno(valueUpdateTelefono);
  };
  const onChangeUpdateDireccion = (e) => {
    const valueUpdateTelefono = e.target.value;
    setDireccion(valueUpdateTelefono);
  };
  const onChangeUpdateCiudad = (e) => {
    const valueUpdateCiudad = e.target.value;
    setCiudad(valueUpdateCiudad);
  };
  const onChangeUpdateCelular = (e) => {
    const valueUpdateCelular = e.target.value;
    setCelular(valueUpdateCelular);
  };

  async function updateContact(id) {
    try {
      const dataUpdatContact = {
        firstName: firstNameForm,
        lastName: lastNameForm,
        correo: correoForm,
        telefeno: telefenoForm,
        celular: celularForm,
        direccion: direccionForm,
        ciudad: ciudadForm,
      };
      await Conctact.updateContactById(id, dataUpdatContact);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full max-w-sm">
          <form
            className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb4"
            method="POST"
          >
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nombres
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-4"
                value={firstNameForm}
                onChange={onChangeUpdateFirstName}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Apellidos
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-4"
                value={lastNameForm}
                onChange={onChangeUpdateLastName}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Correo
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-4"
                value={correoForm}
                onChange={onChangeUpdateCorreo}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Telefono
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-4"
                value={telefenoForm}
                onChange={onChangeUpdateTelefono}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Celular
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-4"
                value={celularForm}
                onChange={onChangeUpdateCelular}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Direccion
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-4"
                value={direccionForm}
                onChange={onChangeUpdateDireccion}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Ciudad
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-4"
                value={ciudadForm}
                onChange={onChangeUpdateCiudad}
              />
            </div>
            <div className="mb-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateContact(id);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormInformation;
