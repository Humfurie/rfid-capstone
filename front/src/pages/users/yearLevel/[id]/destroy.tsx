import { Modal } from "@mantine/core";
import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";

const DestroyYearLevel = (props: any) => {
    const { setId, yearlevelDelete } = useContext(FormContext)
    const { deleteOpen, yearLevel, handleCloseDelete, key } = props
    // console.log('this is year', yearLevel)
    return (
        <>
            <Modal
                key={key}
                opened={deleteOpen}
                onClose={() => handleCloseDelete(yearLevel.id)}
                title="Please consider this"
            // transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >
                <form onSubmit={e => {
                    e.preventDefault()
                    yearlevelDelete()
                }} >
                    <div className="flex flex-col">
                        <td className={`${Style.tableBorder}`}>
                            {yearLevel.id}
                        </td>
                        <td className={`${Style.tableBorder}`}>
                            {yearLevel.year}
                        </td>
                    </div>
                    <div className="flex justify-evenly">
                        <button onClick={e => handleCloseDelete(yearLevel.id)}>Cancel</button>
                        <button type="submit" onClick={e => {
                            setId(yearLevel.id)
                            location.reload()
                        }}>Delete</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default DestroyYearLevel;