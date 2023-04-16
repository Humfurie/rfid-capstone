import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { StudentSchoolInfo } from "./includes/student/StudentSchoolInfo";
import { ContactInfo } from "./includes/ContactInfo";
import { EmergencyContactInfo } from "./includes/EmergencyContactInfo";
import { PersonalInfo } from "./includes/PersonalInfo";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import UsersFormButtonSelection from "../../Tabs/UsersFormButtonSelection";

const StudentRegistration = () => {
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole,
    userInfo,
  } = useContext(FormContext);

  const [selection, setSelection] = useState('personal')
  const [active, setActive] = useState({
    personal: true,
    school: false,
    contact: false,
    emergency: false
  })

  const submitButton = (
    <div className="flex justify-end mt-3">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={`bg-gray-500`}
        endIcon={<CheckCircleRoundedIcon />}
        onClick={() => {
          setRole("student")
        }}
        disabled={
          (userInfo.firstName
            && userInfo.lastName
            && userInfo.gender
            && userInfo.address
            && userInfo.idNumber
            && userInfo.rfidNumber
            && userInfo.year
          ) === "" ? true : false
        }
      >
        Register
      </Button>
    </div>
  )


  return (
    <div className="w-full">

      <h4 className="text-center">Student Registration</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setRegistration(false)
          userSubmit();
          router.push("/users/student")
        }}
      >
        < UsersFormButtonSelection
          active={active}
          setActive={setActive}
          setSelection={setSelection}
        />

        <div>
          {selection === 'personal' ? <PersonalInfo /> : selection === 'school' ? <StudentSchoolInfo /> : selection === 'contact' ? <ContactInfo /> : selection === 'emergency' ? <EmergencyContactInfo /> : "We found nothing"}

        </div>

        <div>
          {active.emergency === true ? submitButton : ''}
        </div>
      </form>
    </div>

  );
};

export default StudentRegistration;
