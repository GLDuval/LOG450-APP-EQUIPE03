// Create a UserContext with a name
import { createContext } from 'react';
import User from '../models/User';

export const UserContext = createContext<User | null | undefined>({
  uid: 'uid',
  displayName: 'Felix-Antoine',
  email: 'felix-antoine.coco@gmail.com',
});
