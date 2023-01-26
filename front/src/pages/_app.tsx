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

  /*
   *
   * this here contains all the forms and states stuff of the users
   */

  //employee
  const [employeeRegistration, setEmployeeRegistration] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    address: "",
    email: "",
    contactNumber: "",
    facebook: "",
  });

  const [employeeEmergency, setEmployeeEmergency] = useState({
    name: "",
    contactNumber: "",
    email: "",
    facebook: "",
  });

  const [employeeAccount, setEmployeeAccount] = useState({
    username: "",
    password: "",
  });

  //student
  const [studentRegistration, setStudentRegistration] = useState({
    studentId: "",
    schoolYear: "",
    firstname: "",
    middlename: "",
    lastname: "",
    address: "",
    email: "",
    contactNumber: "",
    facebook: "",
  });

  const [studentEmergency, setStudentEmergency] = useState({
    name: "",
    contactNumber: "",
    email: "",
    facebook: "",
  });

  const [studentAccount, setStudentAccount] = useState({
    username: "",
    password: "",
  });

  //parents
  const [parentRegistration, setParentRegistration] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    address: '',
    email: '',
    contactNumber: '',
    facebook: ''
  })

  const [parentAccount, setParentAccount] = useState({
    username: "",
    password: "",
  });

  /*
   *
   * this here contains all the functions
   */
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
    setEmployeeAccount((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const studentOnChange = (value: any, column: string) => {
    setStudentRegistration((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const studentEmergencyOnChange = (value: any, column: string) => {
    setStudentEmergency((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const studentAccountOnChange = (value: any, column: string) => {
    setStudentAccount((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const parentOnChange = (value: any, column: string) => {
    setParentRegistration((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const parentAccountOnChange = (value: any, column: string) => {
    setParentAccount((prev) => {
      return { ...prev, [column]: value };
    });
  };

  /*
   *
   * this here contains all the endpoints
   */
  const employeeRegister = () => {};

  const studentRegister = () => {};

  const parentRegister = () => {};

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

        //employee functions
        employeeRegister,
        employeeOnChange,
        employeeEmergencyOnChange,
        employeeAccountOnChange,

        //student functions
        studentRegister,
        studentOnChange,
        studentEmergencyOnChange,
        studentAccountOnChange,

        //parents functions
        parentRegister,
        parentOnChange,
        parentAccountOnChange,
      }}
    >
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
