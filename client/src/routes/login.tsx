import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { LockKeyhole, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(6).max(50),
})

const Login = () => {
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        navigate('/')
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className='w-1/3'>
                <CardHeader>
                    <CardTitle className='text-primary'>Expense Tracker</CardTitle>
                    <CardDescription>Login to Continue</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="relative ml-auto flex-1 md:grow-0">
                                                <Input placeholder="Enter Email" {...field} />
                                                <User className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <div className="relative ml-auto flex-1 md:grow-0">
                                                <Input type='password' placeholder="Enter Password" {...field} />
                                                <LockKeyhole className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </FormControl>
                                        <FormDescription className='text-right'>
                                            <Link to='/forgot-password' className='text-primary'>
                                                Forgot Password?
                                            </Link>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormDescription>
                                Don't have an account? <Link to="/sign-up" className="text-primary">Sign Up</Link>
                            </FormDescription>
                            <Button type="submit" className='w-full'>
                                Sign In
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login