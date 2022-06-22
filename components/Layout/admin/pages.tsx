import React, { FC, useState } from "react";
import { Site } from "../../../src/interfaces";
import { FormCategory } from "./FormCategory";
import { FormSite } from "./FormSite";

interface Props {
  site: Site
}

 export const Pages:FC<Props> = ({site}) => {

    const [activeStatus, setActiveStatus] = useState(1);

    return (
        <>
          <div>
              {/* <div className="hidden sm:hidden relative w-11/12 mx-auto bg-white rounded">
                  <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="8 9 12 5 16 9" />
                          <polyline points="16 15 12 19 8 15" />
                      </svg>
                  </div>
                  <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                      <option className="text-sm text-gray-600">inactive </option>
                      <option className="text-sm text-gray-600">inactive </option>
                      <option selected className="text-sm text-gray-600">
                          Active{" "}
                      </option>
                      <option className="text-sm text-gray-600">inactive </option>
                      <option className="text-sm text-gray-600">inactive </option>
                  </select>
              </div> */}
              <div className="xl:w-full xl:mx-0 h-12 block bg-white shadow rounded">
                  <ul className="flex border-b px-5">
                      <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "text-sm border-lime-600 pt-3 rounded-t text-lime-600 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-lime-600 cursor-pointer"}>
                          <div className="flex items-center mb-3">
                              <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                  </svg>
                              </span>
                              <span className="ml-1 font-normal">{activeStatus == 1 ? "Sitio" : "Sitio"}</span>
                          </div>
                          {activeStatus == 1 && <div className="w-full h-1 bg-lime-600 rounded-t-md" />}
                      </li>
                      <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm border-lime-600 pt-3 rounded-t text-lime-600 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-lime-600 cursor-pointer"}>
                          <div className="flex items-center mb-3">
                              <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <circle cx={12} cy={12} r={2} />
                                      <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                      <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                                  </svg>
                              </span>
                              <span className="ml-1 font-normal">{activeStatus == 2 ? "Categorias" : "Categorias"}</span>
                          </div>
                          {activeStatus == 2 && <div className="w-full h-1 bg-lime-600 rounded-t-md" />}
                      </li>
                      <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm border-lime-600 pt-3 rounded-t text-lime-600 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-lime-600 cursor-pointer"}>
                          <div className="flex items-center mb-3">
                              <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <circle cx={12} cy={12} r={2} />
                                      <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                      <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                                  </svg>
                              </span>
                              <span className="ml-1 font-normal">{activeStatus == 3 ? "Paginas" : "Paginas"}</span>
                          </div>
                          {activeStatus == 3 && <div className="w-full h-1 bg-lime-600 rounded-t-md" />}
                      </li>
                  </ul>
              </div>
          </div>
          {
            activeStatus === 1
            ?
            // <FormSite site={site} />
            <div>
              hola2
            </div>
            : null
          }
          {/* {
            activeStatus === 2
            ?
            <FormCategory category={category} />
            : null
          } */}
          {
            activeStatus === 3
            ?
            <div>
              hola3
            </div>
            : null
          }
          

        </>
    );
};
