'use client'; 
import React, { useState } from 'react';
import './layout.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Popup() {
    // using https://www.npmjs.com/package/react-responsive-modal
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

	return ( 
        <div>
            <button onClick={onOpenModal} className="rounded p-2 bg-slate-400 hover:bg-slate-600">Open modal</button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <h2 className='text-5xl max-md:text-base'>my pop up</h2>
                <p className='pt-5 text-gray-800'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam. <a className="text-sky-400 after:content-['_↗'] hover:underline" href="https://www.nba.com" target="_blank">test</a>
                </p>
            </Modal>
        </div>
	)
}