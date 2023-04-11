import { Style } from "../../lib/Style";

const UsersFormButtonSelection = (props: any) => {
    const { setSelection, setActive, active } = props
    return (
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
    );
}

export default UsersFormButtonSelection;