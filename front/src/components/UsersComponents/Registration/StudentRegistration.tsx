import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { StudentSchoolInfo } from "./includes/student/StudentSchoolInfo";
import { ContactInfo } from "./includes/ContactInfo";
import { EmergencyContactInfo } from "./includes/EmergencyContactInfo";
import { PersonalInfo } from "./includes/PersonalInfo";

const StudentRegistration = () => {
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole
  } = useContext(FormContext);

  const [selection, setSelection] = useState('personal')
  const [active, setActive] = useState({
    personal: true,
    school: false,
    contact: false,
    emergency: false
  })

  const submitButton = (
    <div className={Style.registerBtn}>
      <MyButton type="submit" label="Register" />
    </div>
  )


  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl mx-auto shadow-xl p-2">
        <h4 className="text-center">Student Registration</h4>
        <form
          onSubmit={(e) => {
            setRole("student")
            e.preventDefault();
            setRegistration(false)
            userSubmit();

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
            {selection === 'personal' ? <PersonalInfo /> : selection === 'school' ? <StudentSchoolInfo /> : selection === 'contact' ? <ContactInfo /> : selection === 'emergency' ? <EmergencyContactInfo /> : "We found nothing"}
            {/* <StudentPersonalInfo />
            <StudentSchoolInfo />
            <ContactInfo />
            <EmergencyContactInfo /> */}
          </div>

          <div>
            {active.emergency === true ? submitButton : ''}
          </div>
        </form>
      </div>
    </div >
  );
};

export default StudentRegistration;
