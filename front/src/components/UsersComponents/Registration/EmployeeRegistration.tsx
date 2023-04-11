
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { EmployeeSchoolInfo } from "./includes/employee/EmployeeSchoolInfo";
import { ContactInfo } from "./includes/ContactInfo";
import { PersonalInfo } from "./includes/PersonalInfo";
import { EmergencyContactInfo } from "./includes/EmergencyContactInfo";
import UsersFormButtonSelection from "../../Tabs/UsersFormButtonSelection";

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
          < UsersFormButtonSelection
            active={active}
            setActive={setActive}
            setSelection={setSelection}
          />
          <div>
            {selection === 'personal' ? <PersonalInfo /> : selection === 'school' ? <EmployeeSchoolInfo /> : selection === 'contact' ? <ContactInfo /> : selection === 'emergency' ? <EmergencyContactInfo /> : "Sorry, we found nothing."}
          </div>

          <div>

            {active.emergency === true ? submitButton : ''}

          </div>
        </form>
      </div >
    </div >
  );
};

export default EmployeeRegistration;
