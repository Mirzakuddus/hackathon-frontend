import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '@/redux/authSlice';

const LoginPage = () => {
   const navigate = useNavigate();
   const{user}=useSelector(store=>store.auth);
   const dispatch=useDispatch();
    const [formData, setFormData] = useState({
      email:"",
      password:""
    })


    const handleForm=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
      console.log(formData);
    }


    const handleSubmit =(e)=>{
           e.preventDefault();
         const {email, password} = formData;
         axios.post('http://localhost:3000/users/login',{
          email,password
         }).then((res)=>{
          console.log(res.data);
          localStorage.setItem("token",res.data.token);
          localStorage.setItem("user",JSON.stringify(res.data.user));
          dispatch(setAuthUser(res.data.user));
          navigate('/');
         }).catch((err)=>{
          console.log(err)
         })
    }
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
 
      <div className="absolute inset-0 bg-[url('/Image/construction.jpg')] bg-cover bg-center opacity-30 z-0" />

      <div className="absolute inset-0 bg-black/60 z-10" />

   \
      <motion.div
        className="z-20 w-full max-w-md px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card className="backdrop-blur bg-white/90 dark:bg-gray-800 shadow-2xl rounded-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Welcome Back, Engineer 👷‍♂
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" onChange={(e)=>{handleForm(e)}}/>
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                <Input id="password" type="password" name="password" placeholder="••••••••"  onChange={(e)=>{handleForm(e)}}/>
              </div>
              <Button type="submit" className="w-full mt-4">Login</Button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
              Don't have an account? <Link to={"/signuppage"}> <a href="/register" className="text-blue-600 hover:underline">Sign up</a> </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;