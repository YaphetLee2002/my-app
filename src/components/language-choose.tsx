"use client"

import * as React from "react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuRadioGroupButton() {
    const [language, setLanguage] = React.useState("English")

    const handleLanguageChange = (value: string) => {
        setLanguage(value)

    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button style={{marginLeft: '30px'}} variant="secondary">Language</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-5">
                <DropdownMenuSeparator/>
                <DropdownMenuRadioGroup value={language} onValueChange={handleLanguageChange}>
                    <DropdownMenuRadioItem value="English">
                        <img src="/flags/uk.svg" alt="english" width={20} height={50} className="rounded"/>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Chinese">
                        <img src="/flags/china.svg" alt="english" width={20} height={50} className="rounded"/>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Japanese">
                        <img src="/flags/japan.svg" alt="english" width={20} height={50} className="rounded"/>
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
