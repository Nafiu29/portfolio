import { useContext } from 'react';
import { PersnalContext } from '../context/PersonalProvider';

export const usePersonal = () => useContext(PersnalContext);
