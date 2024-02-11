import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { EmployeeSchoolInfo } from "./includes/employee/EmployeeSchoolInfo";
import { ContactInfo } from "./includes/ContactInfo";
import { PersonalInfo } from "./includes/PersonalInfo";
import { EmergencyContactInfo } from "./includes/EmergencyContactInfo";
import UsersFormButtonSelection from "../../Tabs/UsersFormButtonSelection";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


const EmployeeRegistration = () => {
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole,
    userInfo,
    position
  } = useContext(FormContext);

  const [selection, setSelection] = useState('personal')
  const [active, setActive] = useState({
    personal: true,
    school: false,
    contact: false,
    emergency: false
  })

  const submitButton = (
    <div className={`flex justify-end mt-3`} >
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={`bg-gray-500`}
        endIcon={<CheckCircleRoundedIcon />}
        onClick={() => {
          setRole("employee")
        }}
        disabled={
          (userInfo.firstName
            && userInfo.lastName
            && userInfo.gender
            && userInfo.address
            && userInfo.idNumber
            && userInfo.rfidNumber
            && position
          ) === "" ? true : false
        }
      >
        Register
      </Button>
    </div>
  )

  return (
    <div className="w-full">

      <div className="text-center">Employee Registration</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setRegistration(false)
          userSubmit();
          router.push('/users/employee')
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

  );
};

export default EmployeeRegistration;
