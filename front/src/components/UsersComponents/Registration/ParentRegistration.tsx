import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import { useRouter } from "next/router";
import { PersonalInfo } from "./includes/PersonalInfo";
import { ContactInfo } from "./includes/ContactInfo";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const ParentRegistration = () => {
  
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole,
    userInfo,
    children,
  } = useContext(FormContext);

  const [selection, setSelection] = useState('personal')
  const [active, setActive] = useState({
    personal: true,
    contact: false,
  })

  const [parent] = useState(true)

  const submitButton = (
    <div className={`flex justify-end mt-3`}>
      <Button
        variant="contained"
        color="primary"
         className={`bg-gray-500`}
        endIcon={<CheckCircleRoundedIcon/>}
        type="submit"
        onClick={() => {
          setRole("parent")
        }}
        disabled={
          (userInfo.firstName
            && userInfo.lastName
            && userInfo.gender
            && userInfo.address
          ) === "" ? true : false
        }
      >
        Register
      </Button>
    </div>
  )

  return (
    <div className="w-full">
     
        <div className="text-center">Parent Registration</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setRegistration(false)
            userSubmit();
            router.push("/users/parent")
          }}
        >


          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              className={`${Style.registrationNavBar} ${active.personal === true ? "bg-slate-300 text-gray-700" : ""}`}
              onClick={e => {
                setSelection('personal')
                setActive({
                  personal: true,
                  contact: false,
                })
              }}
            >
              Personal Information
            </button>

            <button
              type="button"
              className={`${Style.registrationNavBar} ${active.contact === true ? "bg-slate-300 text-gray-700" : ""}`}
              onClick={e => {
                setSelection('contact')
                setActive({
                  personal: false,
                  contact: true,
                })
              }}
            >
              Contact Information
            </button>

          </div>
          <div>
            {selection === 'personal' ? <PersonalInfo parent={parent} /> : selection === 'contact' ? <ContactInfo /> : "We found nothing"}
          </div>
          <div>
            {active.contact === true ? submitButton : ''}
          </div>
        </form>
      </div>
    
  );
};

export default ParentRegistration;
