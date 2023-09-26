'use client'; 
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Contact() {
    // refer to https://jasonwatmore.com/post/2021/09/03/next-js-form-validation-example-with-react-hook-form
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        first_name: Yup.string()
            .required("First Name is required"),
        last_name: Yup.string()
            .required("Last name is required"),
        gender: Yup.string()
            .required("gender is required"),
        dob: Yup.string()
            .required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required("password is required"),
        accept_terms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data:any) {
        // display form data on success
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(data, null));
        return false;
    }
    
	return (      
        <form action="" method="post" onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded p-8 mb-20">
            <div className='mb-8 relative z-40'>
                <svg width="20" height="20" fill="currentColor" className="absolute z-10 left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input 
                    type="text" 
                    placeholder="Filter projects..." 
                    className="appearance-none bg-transparent w-full text-sm leading-tight text-white focus:outline-none placeholder:text-slate-400 py-2 pl-10 border-b border-sky-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Title
                </label>
                <select 
                    {...register('title')}
                    className={`bg-transparent w-full p-2.5 mb-2 border-b border-sky-500 text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control ${errors.title ? 'is-invalid' : ''}`}>
                    <option value="">Please select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                </select>
                <div className="text-xs text-red-700">
                    {errors.title?.message}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                </label>
                <input 
                    type="text" 
                    autoComplete="off"
                    {...register('first_name')} 
                    className={`appearance-none bg-transparent border-b border-sky-500 w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-2 form-control ${errors.first_name ? 'is-invalid' : ''}`} />
                <div className="text-xs text-red-700">
                    {errors.first_name?.message}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                </label>
                <input
                    type="text" 
                    autoComplete="off"
                    {...register('last_name')}  
                    className={`appearance-none bg-transparent border-b border-sky-500 w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-2 form-control ${errors.last_name ? 'is-invalid' : ''}`} />
                <div className="text-xs text-red-700">
                    {errors.last_name?.message}
                </div>
            </div>
            <div className='mb-4'>
                <p className="block text-gray-700 text-sm font-bold mb-2">Gender</p>
                <label className='text-gray-700 text-sm font-bold mr-4'>
                <input
                    {...register("gender")}
                    type="radio"
                    value="male"
                    className="accent-pink-500 focus:accent-pink-500"
                />
                &nbsp; male
                </label>
                <label className='text-gray-700 text-sm font-bold'>
                <input
                    {...register("gender")}
                    type="radio"
                    value="female"
                    className="accent-pink-500 focus:accent-pink-500"
                />
                &nbsp; female
                </label>
                <div className="text-xs mt-2 text-red-700">
                    {errors.gender?.message}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                <input 
                    type="date" 
                    placeholder="MM/DD/YYYY"
                    {...register('dob')} 
                    className={`-z-10 mb-2 border-b border-sky-500 w-full text-gray-500 pb-1 form-control ${errors.dob ? 'is-invalid' : ''}`} />
                <div className="text-xs text-red-700">
                    {errors.dob?.message}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input 
                    type="text" 
                    {...register('email')}  
                    autoComplete="off"
                    className={`appearance-none bg-transparent border-b border-sky-500 w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-2 form-control ${errors.email ? 'is-invalid' : ''}`} />
                <div className="text-xs text-red-700">
                    {errors.email?.message}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input 
                    {...register('password')}  
                    autoComplete="off"
                    type="password" 
                    placeholder="**********" 
                    className={`appearance-none bg-transparent border-b border-sky-500 w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-2 form-control ${errors.email ? 'is-invalid' : ''}`} />
                <div className="text-xs text-red-700">
                    {errors.password?.message}
                </div>
            </div>
            <div className='mb-6'>
                <input 
                    type="checkbox" {...register('accept_terms')} 
                    className={`mb-2 accent-pink-500 focus:accent-pink-500 form-check-input ${errors.accept_terms ? 'is-invalid' : ''}`} />
                <label className="text-gray-700 text-xs pl-2">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                <div className="text-xs text-red-700">
                    {errors.accept_terms?.message}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
	)
}