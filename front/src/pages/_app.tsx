import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Router from "next/router";
import { parseCookies } from "nookies";
import { FormContext } from "../lib/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  const parsedToken = parseCookies();
  console.log(parsedToken);
  axios.interceptors.request.use(async (config) => {
    const token = parsedToken.JWToken;
    if (token) {
      config.headers!.authorization = "Bearer " + token;
    }
    return config;
  });

  useMemo(async () => {
    try {
      await axios.get(`http://127.0.0.1:3333/auth`);
      Router.push("/AdminDashboard");
    } catch (error) {
      Router.push("/");
    }
  }, [])

  const addUser = ( ) => {
    axios.post(``);
    Router.push("")
  }

  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const [registration, setRegistration] = useState(false);

  /*
   *
   * this here contains all the forms and states stuff of the users
   */
  //users

  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    birthday: "",
    gender: "",
    address: "",
    email: "",
    contactNumber: "",
    facebook: "",
    year: "",
    idNumber: "",
    isAlumni: "",
  })

  //position-employee
  const [position, setPosition] = useState({
    name: "",
  })

  //role
  const [role, setRole] = useState({
    name: "",
  })
  //emergency contact
  const [emergency, setEmergency] = useState({
    name: "",
    contactNumber: "",
    email: "",
    facebook: "",
  });
  //account
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  console.log("hihi",userRegistration, position, role)
  /*
   *
   * this here contains all the functions
   */
  const userOnChange = (value: any, column: string) => {
    setUserRegistration((prev) => {
      return { ...prev, [column]: value };
    })
  }

  const positionOnChange = (value: any, column: string) => {
    setPosition((prev) => {
      return { ...prev, [column]: value };
    })
  }

  const roleOnChange = (value: any, column: string) => {
    setRole((prev) => {
      return { ...prev, [column]: value };
    })
  }

  const emergencyOnChange = (value: any, column: string) => {
    setEmergency((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const accountOnChange = (value: any, column: string) => {
    setAccount((prev) => {
      return { ...prev, [column]: value };
    });
  };

  /*
   *
   * this here contains all the endpoints
   */

  return (
    <FormContext.Provider
      value={{
        open,
        setOpen,
        submenuOpen,
        setSubmenuOpen,
        currentMenu,
        setCurrentMenu,
        registration,
        setRegistration,

        userOnChange,
        positionOnChange,
        roleOnChange,

        addUser,
        
        //emergency and account onChange
        emergencyOnChange,
        accountOnChange,
      }}
    >
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
