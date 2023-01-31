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
    birthday: "",
    gender: "",
    address: "",
    email: "",
    contactNumber: "",
    facebook: "",
  });

  //student
  const [studentRegistration, setStudentRegistration] = useState({
    studentId: "",
    schoolYear: "",
    firstname: "",
    middlename: "",
    lastname: "",
    birthday: "",
    gender: "",
    address: "",
    email: "",
    contactNumber: "",
    facebook: "",
  });

  //parents
  const [parentRegistration, setParentRegistration] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    birthday: "",
    gender: "",
    address: "",
    email: "",
    contactNumber: "",
    facebook: "",
  });

  const [emergency, setEmergency] = useState({
    name: "",
    contactNumber: "",
    email: "",
    facebook: "",
  });

  const [account, setAccount] = useState({
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

  const studentOnChange = (value: any, column: string) => {
    setStudentRegistration((prev) => {
      return { ...prev, [column]: value };
    });
  };

  const parentOnChange = (value: any, column: string) => {
    setParentRegistration((prev) => {
      return { ...prev, [column]: value };
    });
  };

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
  const employeeRegister = () => {
    axios.post(`http://127.0.0.1:3333/employeeRegister`,{
      employeeRegistration: employeeRegistration,
      emergency: emergency,
      account: account, 
      role: 'employee'
    })
  };

  const studentRegister = () => {
    axios.post(`http://127.0.0.1:3333/studentRegister`,{
      studentRegistration: studentRegistration,
      emergency: emergency,
      account: account, 
      role: 'student'
  })
  };

  const parentRegister = () => {
    axios.post(`http://127.0.0.1:3333/parentRegister`,{
      parentRegistration: parentRegistration,
      account: account, 
      role: 'parent'
  })
  };

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

        //student functions
        studentRegister,
        studentOnChange,

        //parents functions
        parentRegister,
        parentOnChange,

        //emergency and account onChange
        emergencyOnChange,
        accountOnChange,
      }}
    >
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
