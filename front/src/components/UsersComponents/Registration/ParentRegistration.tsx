import { useContext, useState } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { useRouter } from "next/router";
import { PersonalInfo } from "./includes/PersonalInfo";
import { ContactInfo } from "./includes/ContactInfo";

const ParentRegistration = () => {
  const [selection, setSelection] = useState('personal')
  const router = useRouter()
  const {
    setRegistration,
    userSubmit,
    setRole
  } = useContext(FormContext);

  const [active, setActive] = useState({
    personal: true,
    contact: false,
  })

  const submitButton = (
    <div className={Style.registerBtn}>
      <MyButton type="submit" label="Register" />
    </div>
  )

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl mx-auto shadow-xl p-2">
        <div className="text-center">Parent Registration</div>
        <form
          onSubmit={(e) => {
            setRole("parent")
            e.preventDefault();
            setRegistration(false)
            userSubmit();
            // router.push("/users/parent")
          }}
        >


          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              className={`${Style.registrationNavBar} ${active.personal === true ? "bg-magic-mint" : ""}`}
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
              className={`${Style.registrationNavBar} ${active.contact === true ? "bg-magic-mint" : ""}`}
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
            {selection === 'personal' ? <PersonalInfo /> : selection === 'contact' ? <ContactInfo /> : "We found nothing"}
          </div>
          <div>
            {active.contact === true ? submitButton : ''}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParentRegistration;
