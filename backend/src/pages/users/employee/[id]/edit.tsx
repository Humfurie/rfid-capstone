import { useContext, useState } from "react";
import { Style } from "../../../../lib/Style";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { FormContext } from "../../../../lib/FormContext";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../../components/Header";
import Button from "@mui/material/Button";
import UsersFormButtonSelection from "../../../../components/Tabs/UsersFormButtonSelection";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../../../../components/Sidebar";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PersonalInfo from "../../../../components/UsersComponents/Update/PersonalInfo";
import EmployeeSchoolInfo from "../../../../components/UsersComponents/Update/employee/EmployeeSchoolInfo";
import ContactInfo from "../../../../components/UsersComponents/Update/ContactInfo";
import EmergencyContactInfo from "../../../../components/UsersComponents/Update/EmergencyContactInfo";


const edit = (props: any) => {

  const { apiPosition } = useContext(FormContext)
  const { user } = props
  const router = useRouter()

  console.log(user)
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

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={`flex h-screen`}>

      <Head>
        <title>Update Employee</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href=".../img/ais-rft-logo.jpg" />
      </Head>

      <div className={` w-full ${Style.mainContent}`}>

        <div>
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        </div>
        <div>
          <Sidebar open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
        </div>

        <div className={`flex flex-col w-full pt-12`}>
          <div className={`pt-3`}>
            <div className={`${Style.menuTab}`}>
              <Button
                startIcon={<ArrowBackRoundedIcon />}
                className={`${Style.textColor}`}
                href="/users/employee"
              >
                Back to List
              </Button>
            </div>
          </div>

          <div className={`${Style.tableBg}`}>
            <h3 className="text-center">Update Employee</h3>
            <form
              onSubmit={(e) => {

                e.preventDefault()
                userUpdate()
              }}
            >
              < UsersFormButtonSelection
                active={active}
                setActive={setActive}
                setSelection={setSelection}
              />
              <div>
                {selection === 'personal' ? <PersonalInfo formOnChange={formOnChange} form={form} /> : selection === 'school' ? <EmployeeSchoolInfo formOnChange={formOnChange} form={form} apiPosition={apiPosition} /> : selection === 'contact' ? <ContactInfo formOnChange={formOnChange} form={form} /> : selection === 'emergency' ? <EmergencyContactInfo formOnChange={formOnChange} form={form} /> : "Sorry, we found nothing."}
              </div>
              <div className="flex justify-end mt-3">
                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  className={`bg-gray-500`}
                  endIcon={<CheckCircleRoundedIcon />}
                  disabled={
                    (form.firstName
                      && form.lastName
                      && form.gender
                      && form.birthdate
                      && form.address
                      && form.idNumber
                      && form.rfidNumber
                      && form.position
                    ) === "" ? true : false
                  }
                >
                  Save Changes
                </Button>
              </div>
            </form>
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
