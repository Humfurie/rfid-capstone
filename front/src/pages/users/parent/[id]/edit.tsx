import { useState } from "react";
import { Style } from "../../../../lib/Style";
import Head from "next/head";
import Header from "../../../../components/Header";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import PersonalInfo from "../../../../components/Edit/includes/PersonalInfo";
import ContactInfo from "../../../../components/Edit/includes/ContactInfo";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../../../../components/Sidebar";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

const edit = (props: any) => {
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
    facebook: user.facebook
  })

  const formOnChange = (value: any, column: string) => {
    setForm((prev: any) => {
      return { ...prev, [column]: value }
    })
  }
  // console.log("thiis form", form)

  const parentUpdate = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/parent/edit/${user.id}`, {
      firstName: form.firstName,
      middleName: form.middleName,
      lastName: form.lastName,
      birthdate: form.birthdate,
      gender: form.gender,
      address: form.address,
      email: form.email,
      contactNumber: form.contactNumber,
      facebook: form.facebook
    })
    router.push("/users/parent/")

  }
  const [selection, setSelection] = useState('personal')
  const [active, setActive] = useState({
    personal: true,
    contact: false,
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
        <title>Update Parent</title>
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
                href="/users/parent"
              >
                Back
              </Button>
            </div>
          </div>

          <div className={`${Style.tableBg}`}>

            <h4 className="text-center">Update Parent</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                parentUpdate()
              }}
            >
              <div className="grid grid-cols-2 gap-1">
                <button
                  type="button"
                  className={`${Style.registrationNavBar} ${active.personal === true ? "bg-magic-mint" : ""}`}
                  onClick={e => {
                    setSelection('personal')
                    setActive({
                      personal: true,
                      contact: false,
                    })
                  }}
                >
                  Personal Information
                </button>

                <button
                  type="button"
                  className={`${Style.registrationNavBar} ${active.contact === true ? "bg-magic-mint" : ""}`}
                  onClick={e => {
                    setSelection('contact')
                    setActive({
                      personal: false,
                      contact: true,
                    })
                  }}
                >
                  Contact Information
                </button>

              </div>
              <div>
                {selection === 'personal' ? <PersonalInfo formOnChange={formOnChange} form={form} /> : selection === 'contact' ? <ContactInfo formOnChange={formOnChange} form={form} /> : "We found nothing"}
              </div>
              <div className="flex justify-end mt-3">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={`bg-gray-500`}
                  endIcon={<CheckCircleRoundedIcon />}
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
}


export default edit;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context

  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parent/${params?.id}`)

  return {
    props: {
      user: data.data
    }
  }
}