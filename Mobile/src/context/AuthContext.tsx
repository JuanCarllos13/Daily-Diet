import { createContext, useState, ReactNode, useEffect } from "react";

import { UserDTO } from "../dtos/userDTO";
import { api } from "../service/api";
import {
  storageAuthToken,
  storageAuthTokenGet,
  storageAuthTokenRemove,
} from "@storage/user/storageAuthToken";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/user/storageUser";
import * as LocalAuthentication from "expo-local-authentication";

interface AuthContextData {
  user: UserDTO;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  signOut: () => Promise<void>;
  logoutUser: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDTO>({
    email: "",
    id: "",
    name: "",
  });
  const isAuthenticated = !!user;

  async function UserAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser({
      email: userData.email,
      id: userData.id,
      name: userData.name,
      photo: userData.photo ?? null
    });
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      await storageUserSave(userData);
      await storageAuthToken(token);
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    console.log("ERROR LOGOUT");
    try {
     await storageAuthTokenRemove();
    } catch (err) {
      console.log("Error ao sair");
    }
  }

  async function signIn({ email, password }: SignInProps) {
    try {
      const { data } = await api.post("/session", {
        email,
        password,
      });
      UserAndTokenUpdate(data.user, data.token);
      storageUserAndTokenSave(data.user, data.token);
    } catch (err) {
      console.log("ERRO AO ENTRAR", err);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function logoutUser() {
    try {
      storageAuthTokenRemove();
      setUser({} as UserDTO);
    } catch (err) {
      console.log("ERRO AO SAIR", err);
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (userLogged && token) {
        UserAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    }
  }

  async function biometria() {
    let compatible = await LocalAuthentication.hasHardwareAsync();

    if (compatible) {
      let biometriaRecord = await LocalAuthentication.isEnrolledAsync();
      if (!biometriaRecord) {
        alert("Biometria não cadastrada");
      } else {
        const token = await storageAuthTokenGet();
        if (token) {
          let result = await LocalAuthentication.authenticateAsync();
          if (result.success) {
            loadUserData();
          } else {
            storageUserRemove();
            storageAuthTokenRemove();
            
          }
        } else {
          // TODO document why this block is empty
          console.log("error")
        }
      }
    }
  }

  useEffect(() => {
    biometria();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
        logoutUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
