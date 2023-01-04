import React, { createContext, useState } from "react";
export const Context = createContext();
function StateContext({ children }) {
  const [formData, setFormData] = useState([]);

  return (
    <Context.Provider value={{ formData, setFormData }}>
      {children}
    </Context.Provider>
  );
}

export default StateContext;
