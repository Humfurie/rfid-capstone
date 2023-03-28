import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";


const edit = (props: any) => {
  const {
    userRegistration,
    setRegistration,
    userSubmit,
    userOnChange,
    setPosition,
    emergencyOnChange,
    accountOnChange,
    apiPosition
  } = useContext(FormContext);

  const { users } = props
  const user = users[0]

  return (
    <div>


      <h3 className="text-center">Update Employee</h3>
      <form
        onSubmit={(e) => {
            
          e.preventDefault();
          setRegistration(false)
          userSubmit();
        }}
      >
        {}

        <div className="grid lg:grid-cols-4 gap-1  text-center mt-10 mb-2">
          <div>
            <h5 className={Style.registrationNavBar}>
              Personal Information
            </h5>
            <div className={Style.reg}>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  First Name:
                </label>
                <input
                  type="text"
                  value={user.first_name}
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "firstName");
                  }}
                />
              </div>

              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Middle Name:
                </label>
                <input
                  type="text"
                  value={user.middle_name}
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "middleName");
                  }}
                />
              </div>

              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Last Name:
                </label>
                <input
                  type="text"
                  value={user.last_name}
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "lastName");
                  }}
                />
              </div>

              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Birthday:
                </label>
                <input
                  type="date"
                  value={user.birthdate}
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "birthdate");
                  }}
                />
              </div>

              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Gender:
                </label>
                <select
                  name=""
                  id=""
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "gender");
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
              <div className="flex justify-center flex-col mt-2">
                <label htmlFor="" className={Style.label}>
                  Position:
                </label>
                <select
                  name="positions"
                  className={Style.inputType}
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                >
                  <option value=''>
                    ---Select Position---
                  </option>
                  {apiPosition.map((element: { id: number, position: string }, id: number) => (
                    <>
                      <option key={id} value={element.id}>{element.position}</option>
                    </>
                  ))}

                </select>
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
                  type="number"
                  className={Style.inputType}
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
                  onChange={(e) => {
                    userOnChange(e.target.value, "facebook");
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className={Style.registrationNavBar}>
              Emergency Contact
            </h5>

            <div className={Style.reg}>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Name:
                </label>
                <input
                  type="text"
                  className={Style.inputType}
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
                  type="number"
                  className={Style.inputType}
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
                  onChange={(e) => {
                    emergencyOnChange(e.target.value, "facebook");
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h5 className={Style.registrationNavBar}>Account</h5>

            <div className={Style.reg}>
              <div>
                <div className={Style.inputDiv}>
                  <label htmlFor="" className={Style.label}>
                    Username:
                  </label>
                  <input
                    type="text"
                    className={Style.inputType}
                    onChange={(e) => {
                      accountOnChange(e.target.value, "username");
                    }}
                  />
                </div>

                <div className={Style.inputDiv}>
                  <label htmlFor="" className={Style.label}>
                    Password:
                  </label>
                  <input
                    type="password"
                    className={Style.inputType}
                    onChange={(e) => {
                      accountOnChange(e.target.value, "password");
                    }}
                  />
                </div>

                <div className={Style.inputDiv}>
                  <label htmlFor="" className={Style.label}>
                    Confirm Password:
                  </label>
                  <input type="password" className={Style.inputType} />
                </div>
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

  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/employee/${params?.id}`)

  return {
      props: {
          users: data.data
      }
  }
}