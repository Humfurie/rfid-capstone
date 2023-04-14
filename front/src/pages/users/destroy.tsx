import { Modal } from "@mantine/core";
import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import { Style } from "../../lib/Style";
import { useRouter } from "next/router";

const Destroy = (props: any) => {
    const { setRole, setId, userDelete } = useContext(FormContext)
    const { setOpen, open, user, userRole } = props
    const router = useRouter()
    return (
        <>
            <Modal
                key={user.id}
                opened={open}
                onClose={() => setOpen(user.id)}
                title="Please consider this"
            // transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >
                <form onSubmit={e => {
                    e.preventDefault()
                    userDelete()
                    setOpen(user.id)
                    router.push(`/users/${userRole}`)
                }} >
                    <div className="flex flex-col">
                        <div className={`${Style.tableBorder}`}>
                            {user.id}
                        </div>
                        <div className={`${Style.tableBorder}`}>
                            {user.first_name} {user.last_name}
                        </div>
                        <div className={`${Style.tableBorder}`}>
                            {user.contact_number}
                        </div>
                        <div className={`${Style.tableBorder}`}>
                            {userRole}
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <button type="button" onClick={e => setOpen(user.id)}>Cancel</button>
                        <button type="submit" onClick={e => {
                            setId(user.id)
                            setRole(userRole)  
                        }}>Delete</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default Destroy;