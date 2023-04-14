import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { FormContext } from "../lib/FormContext";
import CustomAlert from "../components/alert";

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
  const [alertOpen, setAlertOpen] = useState(false)


  /**
   * these states contain backend data
   */

  /*
   *
   * this here contains all the forms and states stuff of the users
   */

  const [imageFile, setImageFile] = useState('')

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

  // year levels
  const [year, setYear] = useState("")

  //children
  const [children, setChildren] = useState("")
  const [apiChildren, setApiChildren] = useState({})

  //position-employee
  const [position, setPosition] = useState("")
  const [apiPosition, setApiPosition] = useState({})
  const [apiYearLevel, setApiYearLevel] = useState({})
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
    }).catch(err => console.log(err))
    setPosition('')
    router.push('/users/position')
  }
  // add year
  const yearSubmit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/year_level`, {
      year: year,
    }).catch(err => console.log(err))
    setYear('')
    router.push('/users/year-level')
  }

  const userSubmit = async () => {

    const formdata = new FormData()
    formdata.append('banner', imageFile);


    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/registration`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: {
        userRegistration: userInfo,
        position: position,
        role: role,
        emergency: emergency,
        children: children,
      },

    }).catch(err => console.log(err))
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
    setRole("")
    setEmergency({
      name: "",
      contactNumber: "",
      email: "",
      facebook: "",
    })
    setChildren("")
  }

  console.log('this is children',children, apiPosition, apiYearLevel)

  /**
   * Delete User
   */
  const userDelete = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/delete`, {
      role: role,
      id: id
    }).then(res => {
      setAlertOpen(true)
      return <CustomAlert message={res} />
    }).catch(err => {
      setAlertOpen(true)
      return <CustomAlert message={err} />
    })
    setRole('')
    setId('')
  }

  const parentDelete = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/parent/delete`, {
      id: id
    }).catch(err => console.log(err))
    setId('')
  }
  /**
   * Delete Position
   */
  const positionDelete = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/position/delete`, {
      id: id
    }).catch(err => console.log(err))
    setId('')
  }
  /**
   * Delete Year Level
   */
  const yearlevelDelete = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/year_level/delete`, {
      id: id
    }).catch(err => console.log(err))
    setId('')
  }

  const effect = useCallback(async () => {
    try {
      const admin = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`);
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/position`).then(res => setApiPosition(res)).catch(err => console.log(err))
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/year_level`).then(res => setApiYearLevel(res)).catch(err => console.log(err))
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rfid`)
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/parent`).then(res => setApiChildren(res)).catch(err => console.log(err))
    } catch (error) {
      router.push("/");
    }

  }, [])

  useEffect(() => {
    effect()
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

        //position
        apiPosition,
        //input position
        position,
        setPosition,

        //year
        year,
        setYear,
        apiYearLevel,
        //retrieved data

        //delete
        userDelete,
        parentDelete,
        positionDelete,
        yearlevelDelete,

        id,
        setId,

        //image
        imageFile,
        setImageFile,
        children,
        setChildren,
        apiChildren, 
        setApiChildren,

        setAlertOpen, //alert
      }}
    >
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
