import { useState } from "react";
import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";
import Head from "next/head";
import Header from "../../../../components/Header";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

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
  console.log("thiis form", form)

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

  return (
    <div className="flex h-screen">
      <Head>
        <title>Update Parent/Guardian</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href=".../img/ais-rft-logo.jpg" />
      </Head>
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex h-full bg-gray-200">
          <div className="flex h-full">
            <AdminNavbar />
          </div>
          <div className="flex flex-col w-screen p-2 ">
            <div className="w-full p-2 bg-white shadow-lg rounded-lg">
              <h4 className="text-center">Update Parent</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  parentUpdate()
                }}
              >
                <div className="grid grid-cols-2 gap-1  text-center">
                  <div>
                    <h5 className={Style.registrationNavBar}>
                      Personal Information
                    </h5>
                    <div>
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          First Name:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={form.firstName}
                          onChange={(e) => {
                            formOnChange(e.target.value, "firstName");
                          }}
                        />
                      </div>
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Middle Name:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={form.middleName}
                          onChange={(e) => {
                            formOnChange(e.target.value, "middleName");
                          }}
                        />
                      </div>
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Last Name:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={form.lastName}
                          onChange={(e) => {
                            formOnChange(e.target.value, "lastName");
                          }}
                        />
                      </div>
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Birthday:
                        </label>
                        <input
                          type="date"
                          className={Style.inputType}
                          value={form.birthdate}
                          onChange={(e) => {
                            formOnChange(e.target.value, "birthdate");
                          }}
                        />
                      </div>
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Gender:
                        </label>
                        <select
                          className={Style.inputType}
                          value={form.gender}
                          onChange={(e) => {
                            formOnChange(e.target.value, "gender");
                          }}
                        >
                          <option value=''>
                            ---Select Gender---
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Address:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={form.address}
                          onChange={(e) => {
                            formOnChange(e.target.value, "address");
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className={Style.registrationNavBar}>
                      Contact Information
                    </h5>
                    <div>
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
                          type="number"
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
                </div>
                <div className={Style.registerBtn}>
                  <MyButton type="submit" label="Save Changes" />
                </div>
              </form>
            </div>
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