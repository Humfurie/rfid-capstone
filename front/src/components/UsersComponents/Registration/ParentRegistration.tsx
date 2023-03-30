import { useContext } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";
import { useRouter } from "next/router";

const ParentRegistration = () => {
  const router = useRouter()
  const {
    registration,
    setRegistration,
    userOnChange,
    accountOnChange,
    userSubmit,
    roleOnChange
  } = useContext(FormContext);

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl mx-auto shadow-xl p-2">
        <div className="text-center">Parent Registration</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setRegistration(false)
            userSubmit();
            router.push("/users/parent")
          }}
        >




          <div>
            <h5 className={Style.registrationNavBar}>
              Contact Information
            </h5>
            <div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  E-mail:
                </label>
                <input
                  type="email"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "email");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Contact Number:
                </label>
                <input
                  type="number"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "contactNumber");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Facebook:
                </label>
                <input
                  type="text"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "facebook");
                  }}
                />
              </div>
            </div>
          </div>
        

          <div className={Style.registerBtn}>
            <MyButton type="submit" label="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParentRegistration;
