import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (data) => {
        console.log('after login', data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(location.state || "/")
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center">Welcome back</h3>
            <p className="text-center">Please Login</p>
            <form className='card-body' onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">

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

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>new to Zap Shift? <Link state={location.state} className='text-blue-600 hover:underline' to="/register">Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    )
}

export default Login