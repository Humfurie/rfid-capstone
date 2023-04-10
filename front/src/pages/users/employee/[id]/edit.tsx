import { useContext, useState } from "react";
import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { FormContext } from "../../../../lib/FormContext";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../../components/Header";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import Button from "@mui/material/Button";


const edit = (props: any) => {

  const { apiPosition } = useContext(FormContext)
  const { user } = props
  const router = useRouter()


  const [form, setForm] = useState({
    firstName: user.first_name,
    middleName: user.middle_name,
    lastName: user.last_name,
    birthdate: user.birthdate,
    gender: user.gender,
    address: user.address,
    email: user.email,
    contactNumber: user.contact_number,
    facebook: user.facebook,
    idNumber: user.id_number,
    rfidNumber: user.rfid_number,
    isAlumni: user.is_alumni,
    position: user?.position[0]?.id,
    emergencyName: user.emergencyContact.name,
    emergencyContactNumber: user.emergencyContact.contact_number,
    emergencyEmail: user.emergencyContact.email,
    emergencyFacebook: user.emergencyContact.facebook,
    role: "employee"
  })

  const formOnChange = (value: any, column: string) => {
    setForm(prev => {
      return { ...prev, [column]: value }
    })
  }

  const userUpdate = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/edit/${user.id}`, {
      firstName: form.firstName,
      middleName: form.middleName,
      lastName: form.lastName,
      birthdate: form.birthdate,
      gender: form.gender,
      address: form.address,
      email: form.email,
      contactNumber: form.contactNumber,
      facebook: form.facebook,
      idNumber: form.idNumber,
      rfidNumber: form.rfidNumber,
      isAlumni: form.isAlumni,
      position: form.position,
      emergencyName: form.emergencyName,
      emergencyContactNumber: form.emergencyContactNumber,
      emergencyEmail: form.emergencyEmail,
      emergencyFacebook: form.emergencyFacebook,
      role: "employee"
    })
    router.push('/users/employee')
  }

  const [selection, setSelection] = useState('personal')
  const [active, setActive] = useState({
    personal: true,
    school: false,
    contact: false,
    emergency: false
  })

  return (
    <div className="flex h-screen">
      <Head>
        <title>Update Employee</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href=".../img/ais-rft-logo.jpg" />
      </Head>
      <div className="flex flex-col h-full w-full">
        <Header />
        <div className="flex h-full bg-gray-200">
          <div className="h-full">
            <AdminNavbar />
          </div>
          <div className="flex flex-col w-full">
            <div className={`w-full p-2`}>
              <div className="w-full bg-white rounded-2xl mx-auto shadow-xl p-2">

                <h3 className="text-center">Update Employee</h3>
                <form
                  onSubmit={(e) => {

                    e.preventDefault()
                    userUpdate()
                  }}
                >
                  <div className="grid grid-cols-4 gap-1  text-center ">
                    <div>

                      <button
                        type="button"
                        className={`${Style.registrationNavBar} ${active.personal === true ? "bg-magic-mint" : ""}`}
                        onClick={e => {
                          setSelection('personal')
                          setActive({
                            personal: true,
                            school: false,
                            contact: false,
                            emergency: false
                          })
                        }}
                      >
                        Personal Informmation
                      </button>
                      <button
                        type="button"
                        className={`${Style.registrationNavBar} ${active.personal === true ? "bg-magic-mint" : ""}`}
                        onClick={e => {
                          setSelection('personal')
                          setActive({
                            personal: false,
                            school: true,
                            contact: false,
                            emergency: false
                          })
                        }}
                      >
                        School Informmation
                      </button>
                      <button
                        type="button"
                        className={`${Style.registrationNavBar} ${active.personal === true ? "bg-magic-mint" : ""}`}
                        onClick={e => {
                          setSelection('personal')
                          setActive({
                            personal: false,
                            school: false,
                            contact: true,
                            emergency: false
                          })
                        }}
                      >
                        Contact Informmation
                      </button>
                      <button type="button"
                        className={`${Style.registrationNavBar} ${active.personal === true ? "bg-magic-mint" : ""}`}
                        onClick={e => {
                          setSelection('personal')
                          setActive({
                            personal: false,
                            school: false,
                            contact: false,
                            emergency: true
                          })
                        }}
                      >
                        Emergency Contact
                      </button>
                    </div>
                    <div>

                    </div>







                   
                    <div>
                      
                      <div >
                        <div className="flex justify-center flex-col mt-2">
                          <label htmlFor="" className={Style.label}>
                            Position:
                          </label>
                          <select
                            name="positions"
                            className={Style.inputType}
                            value={form.position}
                            onChange={(e) => {
                              formOnChange(e.target.value, 'position');
                            }}
                          >
                            <option value=''>
                              ---Select Position---
                            </option>
                            {(apiPosition?.data || []).map((element: { id: number, position: string }, id: number) => {
                              return (
                                <>
                                  <option key={id} value={element.id}>{element.position}</option>
                                </>
                              )
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className={Style.registrationNavBar}>
                        Contact Information
                      </h5>

                      <div className={Style.registerBtn}>
                        <div className={Style.inputDiv}>
                          <label htmlFor="" className={Style.label}>
                            E-mail:
                          </label>
                          <input
                            type="email"
                            className={Style.inputType}
                            value={form.email}
                            onChange={(e) => {
                              formOnChange(e.target.value, "email");
                            }}
                          />
                        </div>
                        <div className={Style.inputDiv}>
                          <label htmlFor="" className={Style.label}>
                            Contact Number:
                          </label>
                          <input
                            type="text" // should be number, but cannot get contact number cause value has characters
                            className={Style.inputType}
                            value={form.contactNumber}
                            onChange={(e) => {
                              formOnChange(e.target.value, "contactNumber");
                            }}
                          />
                        </div>
                        <div className={Style.inputDiv}>
                          <label htmlFor="" className={Style.label}>
                            Facebook:
                          </label>
                          <input
                            type="text"
                            className={Style.inputType}
                            value={form.facebook}
                            onChange={(e) => {
                              formOnChange(e.target.value, "facebook");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className={Style.registrationNavBar}>
                        Emergency Contact
                      </h5>

                      <div className={Style.registerBtn}>
                        <div className={Style.inputDiv}>
                          <label htmlFor="" className={Style.label}>
                            Name:
                          </label>
                          <input
                            type="text"
                            className={Style.inputType}
                            value={form.emergencyName}
                            onChange={(e) => {
                              formOnChange(e.target.value, "emergencyName");
                            }}
                          />
                        </div>

                        <div className={Style.inputDiv}>
                          <label htmlFor="" className={Style.label}>
                            Contact Number:
                          </label>
                          <input
                            type="text" // should be number, but cannot get contact number cause value has characters
                            className={Style.inputType}
                            value={form.emergencyContactNumber}
                            onChange={(e) => {
                              formOnChange(e.target.value, "emergencyContactNumber");
                            }}
                          />
                        </div>

                        <div className={Style.inputDiv}>
                          <label htmlFor="" className={Style.label}>
                            Email:
                          </label>
                          <input
                            type="email"
                            className={Style.inputType}
                            value={form.emergencyEmail}
                            onChange={(e) => {
                              formOnChange(e.target.value, "emergencyEmail");
                            }}
                          />
                        </div>

                        <div className={Style.inputDiv}>
                          <label htmlFor="" className={Style.label}>
                            Facebook:
                          </label>
                          <input
                            type="text"
                            className={Style.inputType}
                            value={form.emergencyFacebook}
                            onChange={(e) => {
                              formOnChange(e.target.value, "emergencyFacebook");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div >
                    <Button type="submit" variant="contained" color="success" className={`mx-auto ${Style.registerBtn}`}>
                      Save Changes
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default edit;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context

  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/employee/${params?.id}`)

  return {
    props: {
      user: data.data
    }
  }
}
