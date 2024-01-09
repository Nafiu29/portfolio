import { createContext, useState } from 'react';
import REPO from '../data/repos.json';

export const RepoContext = createContext();

export default function RepoProvider({ children }) {
  const [repo, setRepo] = useState(REPO);

  return (
    <RepoContext.Provider value={{ repo, setRepo }}>
      {children}
    </RepoContext.Provider>
  );
}
