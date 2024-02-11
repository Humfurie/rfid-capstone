import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import { useRouter } from 'next/router';
import { Modal } from "@mantine/core";
import * as React from 'react';
import Button from '@mui/material/Button';


const DestroyPosition = (props: any) => {
    const { setId, positionDelete } = useContext(FormContext)
    const { deleteOpen, position, handleClosePosition, key } = props
    const router = useRouter()

    return (
        <>
            <Modal
                key={position.id}
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
                        {/* <button onClick={e => handleClosePosition(position.id)}>Cancel</button> */}
                        <Button variant="text" onClick={e => handleClosePosition(position.id)}>Cancel</Button>
                        <button type="submit" onClick={e => {
                            setId(position.id)
                            router.push('/users/position')
                        }}>Delete</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default DestroyPosition;