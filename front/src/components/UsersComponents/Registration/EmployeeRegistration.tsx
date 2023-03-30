
import { useRouter } from "next/router";
import { useContext } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { EmployeePersonalInfo } from "./includes/employee/EmployeePersonalInfo";
import { EmployeeSchoolInfo } from "./includes/employee/EmployeeSchoolInfo";
import { ContactInfo } from "./includes/ContactInfo";

const EmployeeRegistration = () => {
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole,
  } = useContext(FormContext);

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl shadow-lg p-2">
        <div className="text-center">Employee Registration</div>
        <form
          onSubmit={(e) => {
            setRole("employee")
            e.preventDefault();
            setRegistration(false)
            userSubmit();
            router.push("/users/employee")
          }}
        >
          <div className="grid grid-cols-4 gap-1">
            <button className={Style.registrationNavBar}>
              Personal Information
            </button>
            <button className={Style.registrationNavBar}>
              School Information
            </button>
            <button className={Style.registrationNavBar}>
              Contact Information
            </button>
            <button className={Style.registrationNavBar}>
              Emergency Contact
            </button>
          </div>
          <div>
            <EmployeePersonalInfo />
            <EmployeeSchoolInfo />
            <ContactInfo />
            <div className={Style.registerBtn}>
              <MyButton type="submit" label="Register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
