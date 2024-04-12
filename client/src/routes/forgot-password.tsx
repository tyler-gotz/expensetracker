import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "lucide-react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const formSchema = z.object({
    email: z.string().min(2).max(50)
})

const ForgotPassword = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-1/3">
                <CardHeader>
                    <CardTitle className="text-primary">Expense Tracker</CardTitle>
                    <CardDescription>Forgot Password?</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Email</FormLabel>
                                        <FormControl>
                                            <div className="relative ml-auto flex-1 md:grow-0">
                                                <Input placeholder="Email" {...field} />
                                                <User className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='w-full'>
                                Submit
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-center">
                        Remembered your password? <Link to="/login" className="text-primary">Login</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ForgotPassword