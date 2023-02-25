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
  const [apiPosition, setApiPosition] = useState([])
  const [apiYearLevel, setApiYearLevel] = useState([])

  /*
   *
   * this here contains all the forms and states stuff of the users
   */
  const [userRegistration, setUserRegistration] = useState({
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
    isAlumni: "",
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

  /*
   *
   * this here contains all the functions
   */
  const userOnChange = (value: any, column: string) => {
    setUserRegistration((prev) => {
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
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/position`, {
      position: position,
    })
    setPosition('')
    router.push('/Positions/PositionsDashboard')
  }
  // add year
  const yearSubmit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/year_level`, {
      year: year,
    })
    setYear('')
  }

  const userSubmit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users_registration`, {
      userRegistration: userRegistration,
      position: position,
      role: role,
      emergency: emergency,
      account: account,
    })
    setUserRegistration({
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
      isAlumni: "",
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

  useEffect(() => {
    (async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`);
        // router.push("/AdminDashboard");
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/position`).then(res => {
          setApiPosition(res.data)
        })
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/year_level`).then(res => {
          setApiYearLevel(res.data)
        })
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
        apiPosition,
        apiYearLevel
      }}
    >
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
