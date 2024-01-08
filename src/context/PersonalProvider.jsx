import { createContext, useState } from 'react';

export const PersnalContext = createContext(null);

export default function PersonalProvider({ children }) {
  const [personal, setPersonal] = useState([]);

  return (
    <PersnalContext.Provider value={{ personal, setPersonal }}>
      {children}
    </PersnalContext.Provider>
  );
}
