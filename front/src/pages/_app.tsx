import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { FormContext } from "../lib/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  /**
   * next router
   */
  const router = useRouter()

  /**
   * nookies cookie parser
   */
  const parsedToken = parseCookies();

  /**
   * axios interceptor, custom made
   */
  axios.interceptors.request.use(async (config) => {
    const token = parsedToken.Admin;
    if (token) {
      config.headers!.authorization = "Bearer " + token;
    }
    return config;
  });

  /**
   * states
   */
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const [registration, setRegistration] = useState(false);


  /**
   * these states contain backend data
   */

  /*
   *
   * this here contains all the forms and states stuff of the users
   */
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    address: "",
    email: "",
    contactNumber: "",
    facebook: "",
    year: "",
    idNumber: "",
    rfidNumber: "",
    isAlumni: false,
  })
  // console.log(userRegistration)
  // year levels
  const [year, setYear] = useState("")
  //position-employee
  const [position, setPosition] = useState("")
  //role
  const [role, setRole] = useState('')
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
  //specific id for delete
  const [id, setId] = useState('')

  /*
   *
   * this here contains all the functions
   */
  const userOnChange = (value: any, column: string) => {
    setUserInfo((prev) => {
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
  // add position
  const positionSubmit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/position`, {
      position: position,
    })
    setPosition('')
    router.push('/users/position')
  }
  // add year
  const yearSubmit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/year_level`, {
      year: year,
    })
    setYear('')
    router.push('/users/year_level')
  }
  const userSubmit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/registration`, {
      userRegistration: userInfo,
      position: position,
      role: role,
      emergency: emergency,
    })
    setUserInfo({
      firstName: "",
      middleName: "",
      lastName: "",
      birthdate: "",
      gender: "",
      address: "",
      email: "",
      contactNumber: "",
      facebook: "",
      year: "",
      idNumber: "",
      rfidNumber: "",
      isAlumni: false,
    })
    setPosition("")
    setRole('')
    setEmergency({
      name: "",
      contactNumber: "",
      email: "",
      facebook: "",
    })
    setAccount({
      username: "",
      password: "",
    })
  }


  /**
   * Delete User
   */
  const userDelete = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/delete`, {
      role: role,
      id: id
    })
    setRole('')
    setId('')
  }

  const parentDelete = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/parent/delete`, {
      id: id
    })
    setId('')
  }

  console.log(role)

  useEffect(() => {
    (async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`);
        // router.push("/AdminDashboard");
      } catch (error) {
        // router.push("/");
      }
    })()
  }, [])

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
        userInfo,
        setUserInfo,
        emergency,
        setEmergency,

        userOnChange,
        setRole,

        //emergency and account onChange
        emergencyOnChange,
        accountOnChange,

        //onsubmit event action
        userSubmit,
        positionSubmit,
        yearSubmit,

        //input position
        position,
        setPosition,
        //year
        year,
        setYear,
        //retrieved data

        //user delete
        userDelete,
        parentDelete,

        id,
        setId,
      }}
    >
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
