import React from 'react';
import type { Metadata } from 'next';
import Display from '../../components/api/display';

export const metadata: Metadata = {
    title: 'Career',
}

export default function Career() {
    return (
        <div className="min-h-screen m-5">
            <div className="flex flex-col space-y-4 mb-5 text-center">
                <h1 className="text-5xl max-md:text-base mb-4">Career</h1>
                <p className='mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Display />
            </div>
        </div>
    );
  }