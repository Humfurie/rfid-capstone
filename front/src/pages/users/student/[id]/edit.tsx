import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
<<<<<<< HEAD
import Head from "next/head";
import Header from "../../../../components/Header";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
=======
import { useState } from "react";
>>>>>>> 203ac0926645b7a052753d97bdf6386e30cdf482


const edit = (props: any) => {

  const { user, yearLevel } = props
  const userYearLevel = user.yearLevel[0].id

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
    yearLevel: userYearLevel,
    emergencyName: user.emergencyContact.name,
    emergencyContactNumber: user.emergencyContact.contact_number,
    emergencyEmail: user.emergencyContact.email,
    emergencyFacebook: user.emergencyContact.facebook,
    role: "student"
  })
  console.log(form)

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
      yearLevel: form.yearLevel,
      emergencyName: form.emergencyName,
      emergencyContactNumber: form.emergencyContactNumber,
      emergencyEmail: form.emergencyEmail,
      emergencyFacebook: form.emergencyFacebook,
      role: "student"
    })
    setForm({
      firstName: "",
      middleName: "",
      lastName: "",
      birthdate: "",
      gender: "",
      address: "",
      email: "",
      contactNumber: "",
      facebook: "",
      idNumber: "",
      rfidNumber: "",
      isAlumni: false,
      yearLevel: "",
      emergencyName: "",
      emergencyContactNumber: "",
      emergencyEmail: "",
      emergencyFacebook: "",
      role: ""
    })
  }

  console.log('yearLevel', yearLevel)
  return (
<<<<<<< HEAD
    <div className="flex h-screen">
      <Head>
        <title>Update Student</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href=".../img/ais-rft-logo.jpg" />
      </Head>
      <div className="flex flex-col max-h-full">
        <Header />
        <div className="flex h-full bg-gray-200">

          <div className="h-full">
            <AdminNavbar />
          </div>
          <div className="flex flex-col w-full">
            <div className={`w-full p-2`}>
              <h4 className="text-center">Update Student</h4>
              <form
                onSubmit={(e) => {
                  setRole("student")
                  e.preventDefault();
                  setRegistration(false)
                  userUpdate()
                }}
              >
                <div className="grid lg:grid-cols-4 gap-1  text-center ">
                  <div>
                    <h5 className={Style.registrationNavBar}>
                      Personal Information
                    </h5>
                    <div>
                      <div className="flex justify-center flex-col mt-2">
                        <label htmlFor="" className={Style.label}>
                          First Name:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={user.first_name}
                          onChange={(e) => {
                            userOnChange(e.target.value, "firstName");
                          }}
                        />
                      </div>

                      <div className="flex justify-center flex-col mt-2">
                        <label htmlFor="" className={Style.label}>
                          Middle Name:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={user.middle_name}
                          onChange={(e) => {
                            userOnChange(e.target.value, "middleName");
                          }}
                        />
                      </div>

                      <div className="flex justify-center flex-col mt-1">
                        <label htmlFor="" className={Style.label}>
                          Last Name:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={user.last_name}
                          onChange={(e) => {
                            userOnChange(e.target.value, "lastName");
                          }}
                        />
                      </div>

                      <div className="flex justify-center flex-col mt-1">
                        <label htmlFor="" className={Style.label}>
                          Birthday:
                        </label>
                        <input
                          type="text" // reminder
                          className={Style.inputType}
                          value={user.birthdate}
                          onChange={(e) => {
                            userOnChange(e.target.value, "birthdate");
                          }}
                        />
                      </div>

                      <div className="flex justify-center flex-col mt-1">
                        <label htmlFor="" className={Style.label}>
                          Gender:
                        </label>
                        <select
                          name=""
                          id=""
                          className={Style.inputType}
                          value={user.gender}
                          onChange={(e) => {
                            userOnChange(e.target.value, "gender");
                          }}
                        >
                          <option selected disabled>
                            ---Select Gender---
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>

                      <div className="flex justify-center flex-col mt-1">
                        <label htmlFor="" className={Style.label}>
                          Address:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={user.address}
                          onChange={(e) => {
                            userOnChange(e.target.value, "address");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className={Style.registrationNavBar}>
                      School Information
                    </h5>
                    <div >
                      <div className="flex justify-center flex-col mt-1">
                        <label htmlFor="" className={Style.label}>
                          Student ID:
                        </label>
                        <input
                          type="number"
                          className={Style.inputType}
                          onChange={(e) => {
                            userOnChange(e.target.value, "studentId");
                          }}
                        />
                      </div>

                      <div className="flex justify-center flex-col mt-2">
                        <label htmlFor="" className={Style.label}>
                          School Year:
                        </label>
                        <select
                          name=""
                          id=""
                          value={userYearLevel.id}
                          className={Style.inputType}
                          onChange={(e) => {
                            userOnChange(e.target.value, "schoolYear");
                          }}
                        >
                          <option selected disabled>
                            ---Select School Year---
                          </option>
                          {yearLevel.map((yearLevel: { id: number, year: string }, id: number) => {
                            return (
                              <>
                                <option key={id} value={yearLevel.id}>{yearLevel.year}</option>
                              </>
                            )
                          })}
                          {/* <option value="grade 7">Grade 7</option>
=======
    <div>
      <h4 className="text-center">Update Student</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          userUpdate()
        }}
      >
        <div className="grid lg:grid-cols-4 gap-1  text-center mt-10 mb-2">
          <div>
            <h5 className={Style.registrationNavBar}>
              Personal Information
            </h5>
            <div className={Style.registerBtn}>
              <div className="flex justify-center flex-col mt-2">
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

              <div className="flex justify-center flex-col mt-2">
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

              <div className="flex justify-center flex-col mt-1">
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

              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={Style.label}>
                  Birthday:
                </label>
                <input
                  type="date" // reminder
                  className={Style.inputType}
                  value={form.birthdate}
                  onChange={(e) => {
                    formOnChange(e.target.value, "birthdate");
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={Style.label}>
                  Gender:
                </label>
                <select
                  name=""
                  id=""
                  className={Style.inputType}
                  value={form.gender}
                  onChange={(e) => {
                    formOnChange(e.target.value, "gender");
                  }}
                >
                  <option selected disabled>
                    ---Select Gender---
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex justify-center flex-col mt-1">
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
              School Information
            </h5>
            <div className={Style.registerBtn}>
              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={Style.label}>
                  Student ID:
                </label>
                <input
                  type="number"
                  className={Style.inputType}
                  value={form.idNumber}
                  onChange={(e) => {
                    formOnChange(e.target.value, "idNumber");
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-2">
                <label htmlFor="" className={Style.label}>
                  School Year:
                </label>
                <select
                  name=""
                  id=""
                  value={form.yearLevel}
                  className={Style.inputType}
                  onChange={(e) => {
                    formOnChange(e.target.value, "schoolYear");
                  }}
                >
                  <option selected disabled>
                    ---Select School Year---
                  </option>
                  {yearLevel.map((yearLevel: { id: number, year: string }, id: number) => {
                    return (
                      <>
                        <option key={id} value={yearLevel.id}>{yearLevel.year}</option>
                      </>
                    )
                  })}
                  {/* <option value="grade 7">Grade 7</option>
>>>>>>> 203ac0926645b7a052753d97bdf6386e30cdf482
                  <option value="grade 8">Grade 8</option>
                  <option value="grade 9">Grade 9</option>
                  <option value="grade 10">Grade 10</option>
                  <option value="grade 11">Grade 11</option>
                  <option value="grade 12">Grade 12</option> */}
<<<<<<< HEAD
                        </select>
                      </div>
                      <div className="flex justify-center flex-col mt-2">
                        <input
                          type="checkbox"
                          className={Style.inputType}
                          onChange={(e) => {
                            userOnChange(e.target.value, "schoolYear");
                          }}
                        />
                        <label htmlFor="" className={Style.label}>
                          Alumni
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className={Style.registrationNavBar}>
                      Contact Information
                    </h5>
                    <div >
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          E-mail:
                        </label>
                        <input
                          type="email"
                          className={Style.inputType}
                          value={user.email}
                          onChange={(e) => {
                            userOnChange(e.target.value, "email");
                          }}
                        />
                      </div>

                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Contact Number:
                        </label>
                        <input
                          type="text" // reminder
                          className={Style.inputType}
                          value={user.contact_number}
                          onChange={(e) => {
                            userOnChange(e.target.value, "contactNumber");
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
                          value={user.facebook}
                          onChange={(e) => {
                            userOnChange(e.target.value, "facebook");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className={Style.registrationNavBar}>Emergency Contact</h5>

                    <div>
                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Name:
                        </label>
                        <input
                          type="text"
                          className={Style.inputType}
                          value={user.emergencyContact.name}
                          onChange={(e) => {
                            emergencyOnChange(e.target.value, "name");
                          }}
                        />
                      </div>

                      <div className={Style.inputDiv}>
                        <label htmlFor="" className={Style.label}>
                          Contact Number:
                        </label>
                        <input
                          type="text" // reminder
                          className={Style.inputType}
                          value={user.emergencyContact.contact_number}
                          onChange={(e) => {
                            emergencyOnChange(e.target.value, "contactNumber");
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
                          value={user.emergencyContact.email}
                          onChange={(e) => {
                            emergencyOnChange(e.target.value, "email");
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
                          value={user.emergencyContact.facebook}
                          onChange={(e) => {
                            emergencyOnChange(e.target.value, "facebook");
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
=======
                </select>
              </div>
              <div className="flex justify-center flex-col mt-2">
                <input
                  type="checkbox"
                  className={Style.inputType}
                  onChange={(e) => {
                    formOnChange(e.target.checked, "isAlumni");
                  }}
                />
                <label htmlFor="" className={Style.label}>
                  Alumni
                </label>
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
                  type="text" // reminder
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
            <h5 className={Style.registrationNavBar}>Emergency Contact</h5>

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
                  type="text" // reminder
                  className={Style.inputType}
                  value={form.emergencyContactNumber}
                  onChange={(e) => {
                    formOnChange(e.target.value, "contactNumber");
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
>>>>>>> 203ac0926645b7a052753d97bdf6386e30cdf482
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

  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/student/${params?.id}`)

  return {
    props: {
      user: data.data[0],
      yearLevel: data.data[1]
    }
  }
}