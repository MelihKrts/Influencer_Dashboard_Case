"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Toast from "@/app/component/ui/Toast";
import {FaEye, FaEyeSlash } from "react-icons/fa";


export default function LoginForm() {

    useEffect(() => {
        document.title = "Login | Influencer Panel"
    }, []);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showToast, setShowToast] = useState<boolean>(false)
    const [showPassword,setShowPassword] = useState<boolean>(false)

    const router = useRouter()

    type InfoProps = {
        email: string;
        password: string,
    }

    const info: InfoProps = {
        email: "test@test.com",
        password: "1234",
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(email === info.email && password === info.password) {
            router.push("/dashboard")
        }
        else {
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-dvh">
            <Toast show={showToast} />
            <Card className="mx-4 max-w-lg w-full">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-center">Hesabınıza Giriş Yapın</h2>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="johndoe@example.com"
                                required
                            />
                            <Label htmlFor="password">Şifre</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-3 z-10 text-gray-400 hover:text-gray-600">
                                    {showPassword ? <FaEye/>: <FaEyeSlash/>}
                                </button>
                            </div>


                            <Button variant="outline" className="w-1/2 mx-auto">
                                Giriş Yap
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}