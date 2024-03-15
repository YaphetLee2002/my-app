"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {toast, useToast} from "@/components/ui/use-toast";
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {useState} from "react";
import Image from "next/image";

const FormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    advice: z
        .string()
        .min(6, {
            message: "advice must be at least 6 characters.",
        })
        .max(160, {
            message: "advice must not be longer than 30 characters.",
        }),
})

function onSubmit() {
    toast({
        title: "Submitted!",
        description: "We've received your advice. Thank you!",
    })
}


export default function ProfileForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });
    const {toast} = useToast();
    const [open, setOpen] = useState(false);

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleFormSubmit = () => {
        form.handleSubmit((data) => {
            onSubmit();
            handleCloseDialog();
            form.reset();
        })();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <a href="#" className="flex items-center justify-center">
                    <div className="text-white underline">
                        Contact Us↗︎
                    </div>
                    <Image src="/contact.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </a>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogTitle>Contact Us</DialogTitle>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@example.com" {...field} />
                                    </FormControl>
                                    <FormDescription>Please enter your email address.</FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="advice"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Advice</FormLabel>
                                    <FormControl>
                                        <Textarea className="resize-none" {...field} />
                                    </FormControl>
                                    <FormDescription>Please enter your advice for us.</FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
