import React, { useState, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

import Conctact from "../../dataBaseService/Conctact";

import FormUpdate from "../Form/FormUpdate";

const Table = () => {
  const [data, setData] = useState(null);
  const [dataToUpdate, setDataToUpdate] = useState(null);
  const [isDelete, setIsDelete] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function isCloseModal() {
    setIsOpen(false);
  }

  async function getContact() {
    try {
      const responseGetContact = await Conctact.getContact();
      setData(responseGetContact.data.getContact);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getContact();
  }, [isDelete, isOpen]);

  async function updateConctact(id) {
    try {
      const responseContact = await Conctact.getContactById(id);
      setDataToUpdate(responseContact.data.contact[0]);
      openModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteContact(id) {
    try {
      const responseDeleteContact = await Conctact.deleteContactById(id);
      console.log(responseDeleteContact.data);
      setIsDelete(responseDeleteContact.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-start">
        <button className="bg-green-500 my-4 hover:bg-green-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link to={"/addContact"}>Agregar contactos</Link>
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p- text-sm font-semibold tracking-wide text-center">
              No.
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Nombres
            </th>
            <th className="p- text-sm font-semibold tracking-wide text-center">
              Apellidos
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Correo
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Telefonos
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Celular
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Direccion
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Ciudad
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((d, i) => {
              return (
                <tr className="bg-gray-50" key={i}>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{i + 1}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{d.firstName}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{d.lastName}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{d.correo}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{d.telefeno}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{d.celular}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{d.direccion}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">{d.ciudad}</td>
                  <td className="p-3 text-sm h-4 my-1 mx-2">
                    <button
                      type="button"
                      onClick={() => {
                        updateConctact(d.id);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        deleteContact(d.id);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <>
              <tr className="bg-white animate-pulse">
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
              </tr>
              <tr className="bg-white animate-pulse">
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
              </tr>
              <tr className="bg-white animate-pulse">
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm  text-center  bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
                <td>
                  <div className="w-13 rounded p-3 text-sm   text-center bg-gray-200 h-4 my-1 mx-2"></div>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={isCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4 flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 mx-4 text-gray-900"
                    >
                      Editar contacto
                    </Dialog.Title>
                    <button
                      onClick={() => {
                        isCloseModal();
                      }}
                      className="bg-green-500 hover:bg-green-700 text-white font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      x
                    </button>
                  </div>
                  {dataToUpdate ? (
                    <FormUpdate
                      id={dataToUpdate.id}
                      firstName={dataToUpdate.firstName}
                      lastName={dataToUpdate.lastName}
                      correo={dataToUpdate.correo}
                      telefeno={dataToUpdate.telefeno}
                      celular={dataToUpdate.celular}
                      direccion={dataToUpdate.direccion}
                      ciudad={dataToUpdate.ciudad}
                    />
                  ) : (
                    <></>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Table;
