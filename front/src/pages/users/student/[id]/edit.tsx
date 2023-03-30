import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";


const edit = (props: any) => {
  const {
    setRegistration,
    userOnChange,
    emergencyOnChange,
    userSubmit,
    setRole,
    userUpdate,
  } = useContext(FormContext);

  const { user, yearLevel } = props
  const userYearLevel = user.yearLevel[0]
  console.log('yearLevel', yearLevel)
  return (
    <div>
      <h4 className="text-center">Update Student</h4>
      <form
        onSubmit={(e) => {
          setRole("student")
          e.preventDefault();
          setRegistration(false)
          userUpdate()
        }}
      >
        <div className="grid lg:grid-cols-4 gap-1  text-center mt-10 mb-2">
          <div>
            <h5 className={Style.registrationNavBar}>
              Personal Information
            </h5>
            <div className={Style.reg}>
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
            <div className={Style.reg}>
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
                  <option value="grade 8">Grade 8</option>
                  <option value="grade 9">Grade 9</option>
                  <option value="grade 10">Grade 10</option>
                  <option value="grade 11">Grade 11</option>
                  <option value="grade 12">Grade 12</option> */}
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
            <div className={Style.reg}>
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

            <div className={Style.reg}>
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