import React from 'react';
import type { Metadata } from 'next';
import Button from '../../components/Button/button';
import DisplayJson from '../../components/api/displayJson';

export const metadata: Metadata = {
  title: 'Services',
}

export default function Services() {
  
  return (
    <div className="min-h-screen m-5">
      <div className="flex flex-col space-y-4 text-center">
        <div className="mb-5">
          <h1 className="text-5xl max-md:text-base mb-4">Services</h1>
          <p className='mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <Button />
        </div>
        <DisplayJson />
      </div>
    </div>
  );
};
