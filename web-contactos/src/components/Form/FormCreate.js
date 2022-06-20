import React, { useState } from "react";

import { Link } from "react-router-dom";

import Conctact from "../../dataBaseService/Conctact";

const FormCreate = (props) => {
  const [firstNameForm, setFirstName] = useState("");
  const [lastNameForm, setLastName] = useState("");
  const [correoForm, setCorreo] = useState("");
  const [telefenoForm, setTelefeno] = useState("");
  const [celularForm, setCelular] = useState("");
  const [direccionForm, setDireccion] = useState("");
  const [ciudadForm, setCiudad] = useState("");

  const [isCreate, setIsCreate] = useState(false);

  const onChangeFirstName = (e) => {
    const valuefirstName = e.target.value;
    setFirstName(valuefirstName);
  };
  const onChangeLastName = (e) => {
    const valueLastName = e.target.value;
    setLastName(valueLastName);
  };
  const onChangeCorreo = (e) => {
    const valueCorreo = e.target.value;
    setCorreo(valueCorreo);
  };
  const onChangeTelefono = (e) => {
    const valueTelefono = e.target.value;
    setTelefeno(valueTelefono);
  };
  const onChangeDireccion = (e) => {
    const valueDireccion = e.target.value;
    setDireccion(valueDireccion);
  };
  const onChangeCiudad = (e) => {
    const valueCiudad = e.target.value;
    setCiudad(valueCiudad);
  };
  const onChangeCelular = (e) => {
    const valueCelular = e.target.value;
    setCelular(valueCelular);
  };

  async function createContact() {
    try {
      const createDataContact = {
        firstName: firstNameForm,
        lastName: lastNameForm,
        correo: correoForm,
        telefeno: telefenoForm,
        celular: celularForm,
        direccion: direccionForm,
        ciudad: ciudadForm,
      };
      const responseCreateContact = await Conctact.createContact(
        createDataContact
      );
      if ((responseCreateContact.data.success = "saved")) {
        setIsCreate(true);
      }
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
                onChange={onChangeFirstName}
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
                onChange={onChangeLastName}
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
                onChange={onChangeCorreo}
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
                onChange={onChangeTelefono}
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
                onChange={onChangeCelular}
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
                onChange={onChangeDireccion}
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
                onChange={onChangeCiudad}
              />
            </div>
            <div className="flex mb-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  createContact();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
              {isCreate ? (
                <div className="px-4">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to={"/"}>Regresar</Link>
                  </button>
                </div>
              ) : (
                <div className="px-4">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to={"/"}>Cancelar</Link>
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormCreate;
