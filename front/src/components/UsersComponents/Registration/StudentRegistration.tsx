import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { StudentPersonalInfo } from "./includes/student/StudentPersonalInfo";
import { StudentSchoolInfo } from "./includes/student/StudentSchoolInfo";
import { ContactInfo } from "./includes/ContactInfo";
import { EmergencyContactInfo } from "./includes/EmergencyContactInfo";

const StudentRegistration = () => {
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole
  } = useContext(FormContext);

  const [selection, setSelection] = useState('personal')
  // const info = ['personal', 'school', 'contact', 'emergency']

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl shadow-lg p-2">
        <h4 className="text-center">Student Registration</h4>
        <form
          onSubmit={(e) => {
            setRole("student")
            e.preventDefault();
            setRegistration(false)
            userSubmit();
            router.push("/users/student")
          }}
        >
          <div className="grid grid-cols-4 gap-1">
            <button type="button" onClick={e => {
              setSelection('personal')
            }} className={Style.registrationNavBar}>
              Personal Information
            </button>
            <button type="button" onClick={e => {
              setSelection('school')
            }} className={Style.registrationNavBar}>
              School Information
            </button>
            <button type="button" onClick={e => {
              setSelection('contact')
            }} className={Style.registrationNavBar}>
              Contact Information
            </button>
            <button type="button" onClick={e => {
              setSelection('emergency')
            }} className={Style.registrationNavBar}>
              Emergency Contact
            </button>
          </div>

          <div>
            {selection === 'personal' ? <StudentPersonalInfo /> : selection === 'school' ? <StudentSchoolInfo /> : selection === 'contact' ? <ContactInfo /> : selection === 'emergency' ? <EmergencyContactInfo /> : "We found nothing"}
            {/* <StudentPersonalInfo />
            <StudentSchoolInfo />
            <ContactInfo />
            <EmergencyContactInfo /> */}
          </div>

          <div className={Style.registerBtn}>
            <MyButton type="submit" label="Register" />
          </div>
        </form>
      </div>
    </div >
  );
};

export default StudentRegistration;
