import { Modal } from "@mantine/core";
import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import { useRouter } from "next/router";

const DestroyParent = (props: any) => {
    const { setId, parentDelete } = useContext(FormContext)
    const { setOpen, open, user } = props
    const router = useRouter()

    return (
        <>
            <Modal
                key={user.id}
                opened={open}
                onClose={() => setOpen(false)}
                title="Please consider this"
            // transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >
                <form onSubmit={e => {
                    e.preventDefault()
                    parentDelete()
                    router.push('/users/parent')
                }} >
                    <div className="flex flex-col">
                        <td className={`${Style.tableBorder}`}>
                            {user.id}
                        </td>
                        <td className={`${Style.tableBorder}`}>
                            {user.first_name} {user.last_name}
                        </td>
                        <td className={`${Style.tableBorder}`}>
                            {user.contact_number}
                        </td>
                    </div>
                    <div className="flex justify-evenly">
                        <button onClick={e => setOpen(false)}>Cancel</button>
                        <button type="submit" onClick={e => {
                            setId(user.id)
                            router.push("/users/parent")
                        }}>Delete</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default DestroyParent;