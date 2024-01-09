import { useContext } from 'react';
import { RepoContext } from '../context/RepoProvider';

export const useRepo = () => useContext(RepoContext);
