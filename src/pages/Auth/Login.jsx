// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { ShoppingCartIcon } from 'lucide-react'
// import React, { use, useState } from 'react'

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     })
//     const [showForgotPassword, setShowForgotPassword] = useState(false);
//     const handleLogin = () => {
//         console.log("Logging in .....", formData);
//     }

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     }
//     return (
//         <div className='min-h-screen bg-gradient-to-br from-primary/5 
//         to-primary/10 flex items-center justify-center p-4 relative'>
//             <div className='w-full max-w-md'>
//                 <div className='text-center mb-8'>
//                     <div className='flex items-center justify-center
//     space-x-2 mb-4'>
//                         <div className='w-10 h-10 bg-primary rounded-lg flex
//                         items-center justify-center'>
//                             <ShoppingCartIcon className='w-6 h-6
//                             text-primary-foreground' />
//                         </div>
//                         <span className='text-2xl font-bold
//                         text-foreground'>
//                             Pos Portal
//                         </span>
//                         <h1 className='text-2xl font-bold text-foreground'>
//                             {showForgotPassword ? "Reset Password" : "Welcome Back"}
//                         </h1>
//                         <p className='text-muted-foreground mt-2'>
//                             {showForgotPassword ? `Enter your email to receive
//                             reset instructions` : `Sign in to your account to continue`}</p>

//                         <span>Pos pro</span>
//                         {!showForgotPassword && <div className='bg-card rounded-2xl
//                         shadow-xl p-8'>
//                             <form onSubmit={handleLogin}>
//                                 <div>
//                                     <Label>Email Address</Label>
//                                     <Input
//                                         onChange={handleInputChange}
//                                         placeholder='Enter your email...' type={"email"} id="email" name="email" value={FormData.email}></Input>
//                                 </div>
//                             </form>
//                         </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { login } from '@/ReduxToolkit/feature/Auth/authThunk'
import { getUserProfile } from '@/ReduxToolkit/feature/User/userThunk'
import { ShoppingCartIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Login = () => {
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [showForgotPassword, setShowForgotPassword] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log('Logging in .....', formData)

        const resultAction = await dispatch(login(formData))
        if (login.fulfilled.match(resultAction)) {
            toast("Login successfull");
            const user = resultAction.payload
            console.log("user ", user)

            dispatch(getUserProfile(resultAction.payload.jwt))

            const userRole = user.role;
            if (userRole == "ROLE_BRANCH_CASHIER") {
                navigate("/cashier")
            } else if (userRole == "ROLE_STORE_MANAGER") {
                navigate("/store")
            } else if (userRole == "ROLE_BRANCH_MANAGER") {
                navigate("/branch")
            } else if (userRole == "SUPER_ADMIN") {
                navigate("/super-admin")
            }
            console.log("user ", user);
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleForgotPassword = (e) => {
        e.preventDefault()
        console.log("forgot password email", forgotPasswordEmail)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-4">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <ShoppingCartIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-2xl font-bold text-foreground">
                        POS Portal
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-center text-foreground">
                    {showForgotPassword ? 'Reset Password' : 'Welcome Back'}
                </h1>

                <p className="text-muted-foreground text-center mt-2 mb-6">
                    {showForgotPassword
                        ? 'Enter your email to receive reset instructions'
                        : 'Sign in to your account to continue'}
                </p>

                {/* Card */}
                {!showForgotPassword && (
                    <div className="bg-card rounded-2xl shadow-xl p-8">
                        <form onSubmit={handleLogin} className="space-y-4">

                            {/* Email */}
                            <div>
                                <Label htmlFor="email" className={"py-2"}>Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email..."
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <Label htmlFor="password" className={"py-2"}>Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password..."
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <Checkbox name="remember-me" type={'checkbox'}
                                        className={"h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-2xl"}
                                    />
                                    <Label>Remember me</Label>
                                </div>
                                <Button onClick={() => setShowForgotPassword(true)} variant={"ghost"}>Forgot Password</Button>

                            </div>

                            {/* Button */}
                            <Button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground rounded-lg py-2 font-semibold hover:opacity-90 transition"
                            >
                                Sign In
                            </Button>
                        </form>
                        <Separator />
                        <div className='mt-6 p-4 bg-muted rounded-lg'>
                            <p className='text-sm text-muted-foreground text-center'>
                                <strong>
                                    Demon Account :
                                </strong>
                                <br />
                                Email: demo@gmail.com <br />
                                Password : 1234@demo
                            </p>

                        </div>
                    </div>
                )}

                {
                    showForgotPassword && <div className='bg-card rounded-2xl shadow-xl p-8'>
                        <form onSubmit={handleForgotPassword} className="space-y-4">

                            {/* Email */}
                            <div>
                                <Label htmlFor="email" className={"py-2"}>Email Address</Label>
                                <Input
                                    id="email"
                                    name="forgot password email"
                                    type="email"
                                    placeholder="Enter your email..."
                                    value={forgotPasswordEmail}
                                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                                />
                            </div>

                            {/* Button */}
                            <div className='flex items-center justify-between'>
                                <Button
                                    variant='outline'
                                    onClick={() => setShowForgotPassword(false)}
                                    className="bg-primary text-primary-foreground rounded-lg py-2 font-semibold hover:opacity-90 transition"
                                >
                                    Back to Login
                                </Button>

                                <Button
                                    type="submit"
                                    className="bg-primary text-primary-foreground rounded-lg py-2 font-semibold hover:opacity-90 transition"
                                >
                                    Send Reset Link
                                </Button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login
