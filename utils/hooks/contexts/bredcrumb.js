import { createContext, useState } from "react";

const BreadcrumbContext = createContext();

const BreadcrumbProvider = ({ children }) => {
  const [breadcrumbElements, setBreadcrumbElements] = useState([]);

  return (
    <BreadcrumbContext.Provider
      value={{ breadcrumbElements, setBreadcrumbElements }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export { BreadcrumbContext, BreadcrumbProvider };
