import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { useContext, useState } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { useRouter } from "next/router";
import PersonalInfo from "../../../../components/Edit/PersonalInfo";
import StudentSchoolInfo from "../../../../components/Edit/includes/student/StudentSchoolInfo";
import ContactInfo from "../../../../components/Edit/includes/ContactInfo";
import EmergencyContactInfo from "../../../../components/Edit/includes/EmergencyContactInfo";
import Button from "@mui/material/Button";
import Head from "next/head";
import Header from "../../../../components/Header";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";


const edit = (props: any) => {
  const { apiYearLevel } = useContext(FormContext)
  const router = useRouter()

  const { user } = props
  // const userYearLevel = user.yearLevel[0].id


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
    yearLevel: user?.yearLevel[0]?.id,
    emergencyName: user.emergencyContact.name,
    emergencyContactNumber: user.emergencyContact.contact_number,
    emergencyEmail: user.emergencyContact.email,
    emergencyFacebook: user.emergencyContact.facebook,
    role: "student"
  })


  const formOnChange = (value: any, column: string) => {
    setForm((prev: any) => {
      return { ...prev, [column]: value }
    })
  }
  console.log("this is setForm", form)

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
      yearLevel: form.yearLevel,
      emergencyName: form.emergencyName,
      emergencyContactNumber: form.emergencyContactNumber,
      emergencyEmail: form.emergencyEmail,
      emergencyFacebook: form.emergencyFacebook,
      role: "student"
    })
    router.push('/users/student')
  }
  const [selection, setSelection] = useState('personal')
  const [active, setActive] = useState({
    personal: true,
    school: false,
    contact: false,
    emergency: false
  })

  return (
    <div className="flex h-screen w-full">
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
            <div className="w-full p-2">
              <div>
                <Button
                  href="/users/student"
                  variant="contained" className="text-black bg-powder-blue hover:bg-magic-mint">
                  Back
                </Button>
              </div>
              <div className="w-full mt-1 bg-white rounded-2xl mx-auto shadow-xl p-2">
                <h4 className="text-center">Update Student</h4>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  userUpdate()
                }}
                >


                  <div className="grid grid-cols-4 gap-1  text-center ">

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
                      className={`${Style.registrationNavBar} ${active.school === true ? "bg-magic-mint" : ""}`}
                      onClick={e => {
                        setSelection('school')
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
                      className={`${Style.registrationNavBar} ${active.contact === true ? "bg-magic-mint" : ""}`}
                      onClick={e => {
                        setSelection('contact')
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
                      className={`${Style.registrationNavBar} ${active.emergency === true ? "bg-magic-mint" : ""}`}
                      onClick={e => {
                        setSelection('emergency')
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
                    {selection === 'personal' ? <PersonalInfo /> : selection === 'school' ? <StudentSchoolInfo /> : selection === 'contact' ? <ContactInfo /> : selection === 'emergency' ? <EmergencyContactInfo /> : "Sorry, we found nothing."}
                  </div>
                  <div>
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

    </div >
  );
};

export default edit;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context

  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/student/${params?.id}`)

  return {
    props: {
      user: data.data
    }
  }
}