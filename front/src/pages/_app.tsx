import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
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
  const test = useCallback(async () => {
    try {
      await axios.get(`http://127.0.0.1:3333/auth`);
      Router.push("/AdminDashboard");
    } catch (error) {
      Router.push("/");
    }
  }, []);

  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const [registration, setRegistration] = useState(false);

  //form section complex stuff
  const [employeeRegistration, setEmployeeRegistration] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    address: "",
    email: '',
    contactNumber: '',
    facebook: ''
  });

  const [employeeEmergency, setEmployeeEmergency] = useState({
    name: "",
    contactNumber: "",
    facebook: "",
  });

  const [employeeAccount, setEmployeeAccount] = useState({
    username:'',
    password: ''
  })

  //functions
  const employeeOnChange = (value: any, column: string) => {
    setEmployeeRegistration((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const employeeEmergencyOnChange = (value: any, column: string) => {
    setEmployeeEmergency((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const employeeAccountOnChange = (value: any, column: string) => {
    setEmployeeAccount( prev => {
      return { ...prev, [column]: value }
    })
  }

  //endpoint section
  const employeeRegister = () => {};

  useEffect(() => {
    test();
  }, [test]);

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


        employeeRegister,

        employeeEmergencyOnChange,
 
        employeeAccountOnChange
      }}
    >
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
