
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { EmployeeSchoolInfo } from "./includes/employee/EmployeeSchoolInfo";
import { ContactInfo } from "./includes/ContactInfo";
import { PersonalInfo } from "./includes/PersonalInfo";
import { EmergencyContactInfo } from "./includes/EmergencyContactInfo";

const EmployeeRegistration = () => {
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole,
  } = useContext(FormContext);
  const [selection, setSelection] = useState('personal')

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl mx-auto shadow-xl p-2">
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
            <button
              type="button"
              className={Style.registrationNavBar}
              onClick={e => {
                setSelection('personal')
              }}
            >
              Personal Information
            </button>
            <button
              type="button"
              className={Style.registrationNavBar}
              onClick={e => {
                setSelection('school')
              }}
            >
              School Information
            </button>
            <button
              type="button"
              className={Style.registrationNavBar}
              onClick={e => {
                setSelection('contact')
              }}
            >
              Contact Information
            </button>
            <button
              type="button"
              className={Style.registrationNavBar}
              onClick={e => {
                setSelection('emergency')
              }}
            >
              Emergency Contact
            </button>
          </div>
<div>
  { selection === 'personal' ? <PersonalInfo /> : selection === 'school' ? <EmployeeSchoolInfo /> : selection === 'contact' ? <ContactInfo /> : selection === 'emergency' ? <EmergencyContactInfo /> : "Sorry, we found nothing."}
</div>

          <div>
            
            
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
