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
import { startShift } from '@/ReduxToolkit/feature/ShiftReport/shiftReportThunk'
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
    const { branch } = useState(state => state.branch);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showForgotPassword, setShowForgotPassword] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault() // Prevents page reload
        console.log('Logging in .....', formData)

        const resultAction = await dispatch(login(formData))

        if (login.fulfilled.match(resultAction)) {
            toast.success("Login successful");
            const loginResponse = resultAction.payload; // Contains { jwt, message }
            console.log("Login Payload:", loginResponse);

            // 1. Dispatch the profile call using the fresh JWT token
            // Ensure your getUserProfile thunk unwraps or returns the API payload cleanly
            const profileAction = await dispatch(getUserProfile(loginResponse.jwt));

            if (getUserProfile.fulfilled.match(profileAction)) {
                const userProfile = profileAction.payload;
                console.log("Fetched User Profile:", userProfile);

                // 2. Read the role directly from the user profile data payload
                const userRole = userProfile.role;
                console.log("User Role determined:", userRole);

                if (userRole === "ROLE_BRANCH_CASHIER") {
                    navigate("/cashier");
                    dispatch(startShift(userProfile.branchId));
                } else if (userRole === "ROLE_STORE_MANAGER" || userRole === "ROLE_STORE_ADMIN") {
                    navigate("/store");
                } else if (userRole === "ROLE_BRANCH_MANAGER") {
                    navigate("/branch");
                } else if (userRole === "SUPER_ADMIN") {
                    navigate("/super-admin");
                } else {
                    toast.error("Unauthorized role or profile mismatch");
                }
            } else {
                toast.error("Failed to load user profile configuration");
            }
        } else {
            toast.error(resultAction.payload || "Login failed");
        }
    }

    const handleInputChange = (e) => {
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
                        {/* Single onSubmit listener handling form submission */}
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
                                    required
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
                                    required
                                />
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <Checkbox id="remember-me" name="remember-me"
                                        className={"h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-2xl"}
                                    />
                                    <Label htmlFor="remember-me">Remember me</Label>
                                </div>
                                <Button type="button" onClick={() => setShowForgotPassword(true)} variant={"ghost"}>Forgot Password</Button>
                            </div>

                            {/* REMOVED onClick={handleLogin} here to stop the double fire */}
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
                                    Demo Account :
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
                            <div>
                                <Label htmlFor="forgot-email" className={"py-2"}>Email Address</Label>
                                <Input
                                    id="forgot-email"
                                    name="forgot password email"
                                    type="email"
                                    placeholder="Enter your email..."
                                    value={forgotPasswordEmail}
                                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='flex items-center justify-between'>
                                <Button
                                    type="button"
                                    variant='outline'
                                    onClick={() => setShowForgotPassword(false)}
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
