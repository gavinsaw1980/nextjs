import type { Metadata } from 'next';
import Popup from '../../components/Modal/Popup';

export const metadata: Metadata = {
    title: 'About Us',
}

export default function About() {

	return (        
        <div className="flex min-h-screen flex-col items-center justify-between p-4">
            <div className="text-center text-white">
                <h1 className='mb-4'>About Us</h1>
                <Popup />
            </div>
        </div>
	)
}