import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = (data) => {
        console.log('after registration', data.photo[0]);

        const profileImg = data.photo[0]

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                // 1.store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);
                
                // 2.send the photo to store and get the url
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        console.log('after uplod', res.data)

                        //updete user profile to firebaje
                        const userProfile ={
                            displayName : data.name,
                            photoURL: res.data.data.url
                        }
                        updateUserProfile(userProfile)
                        .then(()=>{
                            console.log('profile updated dune')
                            navigate(location.state || "/");
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form className='card-body' onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">

                    {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', {
                        required: true,
                    })}
                        className="input" placeholder="Your Name"
                    />

                    {errors.name?.type === 'required' && (
                        <p className='text-red-500'>Name is required.</p>
                    )}

                    {/* Photo */}
                    <label className="label">Photo</label>
                    <input type="file" {...register('photo', {
                        required: true,
                    })}
                        className="file-input" placeholder="Your Photo"
                    />

                    {errors.photo?.type === 'required' && (
                        <p className='text-red-500'>Photo is required.</p>
                    )}

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        })}
                        className="input"
                        placeholder="Email"
                    />

                    {errors.email?.type === 'required' && (
                        <p className='text-red-500'>Email is required.</p>
                    )}

                    {errors.email?.type === 'pattern' && (
                        <p className='text-red-500'>Enter a valid email address.</p>
                    )}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                        })}
                        className="input"
                        placeholder="Password"
                    />

                    {errors.password?.type === 'required' && (
                        <p className='text-red-500'>Password is required.</p>
                    )}

                    {errors.password?.type === 'minLength' && (
                        <p className='text-red-500'>Password must be at least 6 characters.</p>
                    )}

                    {errors.password?.type === 'pattern' && (
                        <p className='text-red-500'>
                            Password must include at least: uppercase letter,lowercase letter, number, special character
                        </p>
                    )}

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account to Zap Shift? <Link 
                state={location.state} className='text-blue-600 hover:underline' to="/login">Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    )
}

export default Register