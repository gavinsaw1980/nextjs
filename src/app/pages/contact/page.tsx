import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '../../components/Form/Contact';

export const metadata: Metadata = {
    title: 'Contact Us',
}

export default function Contact() {
	return (        
        <div className="w-full max-w-screen-sm mx-auto p-4">
            <h1 className="text-5xl max-md:text-base mb-4 text-center">Contact Us</h1>
            <p className='mb-2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ContactForm />
        </div>
	)
}