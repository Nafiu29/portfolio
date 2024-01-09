import { createContext, useState } from 'react';
import PERSONAL from '../data/personal.json';

export const PersnalContext = createContext(null);

export default function PersonalProvider({ children }) {
  const [personal, setPersonal] = useState(PERSONAL);

  return (
    <PersnalContext.Provider value={{ personal, setPersonal }}>
      {children}
    </PersnalContext.Provider>
  );
}
