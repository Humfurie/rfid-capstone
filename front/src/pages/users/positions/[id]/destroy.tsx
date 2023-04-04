import { Modal } from "@mantine/core";
import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";

const DestroyPosition = (props: any) => {
    const { setId, positionDelete } = useContext(FormContext)
    const { deleteOpen, position, handleClosePosition, key } = props
    return (
        <>
            <Modal
                key={key}
                opened={deleteOpen}
                onClose={() => handleClosePosition(position.id)}
                title="Please consider this"
            // transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >
                <form onSubmit={e => {
                    e.preventDefault()
                    positionDelete()
                }} >
                    <div className="flex flex-col">
                        <td className={`${Style.tableBorder}`}>
                            {position.id}
                        </td>
                        <td className={`${Style.tableBorder}`}>
                            {position.position}
                        </td>
                    </div>
                    <div className="flex justify-evenly">
                        <button onClick={e => handleClosePosition(position.id)}>Cancel</button>
                        <button type="submit" onClick={e => {
                            setId(position.id)
                            location.reload()
                        }}>Delete</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default DestroyPosition;