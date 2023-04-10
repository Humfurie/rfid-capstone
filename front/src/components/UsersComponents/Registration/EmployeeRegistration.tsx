
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
  const [active, setActive] = useState({
    personal: true,
    school: false,
    contact: false,
    emergency: false
  })

  const submitButton = (
    <div >
      <button
        type="submit"
        className={Style.registerBtn}
        onClick={() => {
          setRole("employee")
        }}
      >
        Register
      </button>
    </div>
  )

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl mx-auto shadow-xl p-2">
        <div className="text-center">Employee Registration</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setRegistration(false)
            userSubmit();
            router.push("/users/employee")
          }}
        >
          <div className="grid grid-cols-4 gap-1">
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
              Personal Information
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
              School Information
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
              Contact Information
            </button>
            <button
              type="button"
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
            {selection === 'personal' ? <PersonalInfo /> : selection === 'school' ? <EmployeeSchoolInfo /> : selection === 'contact' ? <ContactInfo /> : selection === 'emergency' ? <EmergencyContactInfo /> : "Sorry, we found nothing."}
          </div>

          <div>

            {active.emergency === true ? submitButton : ''}

          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
