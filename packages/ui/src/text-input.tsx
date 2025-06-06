'use client';

import { ChangeEvent } from "react";

interface PropType {
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


export function TextInput({ placeholder, onChange }: PropType) {
    return (
        <div>
            <input type="text" onChange={onChange} placeholder={placeholder} />
        </div>
    )
}