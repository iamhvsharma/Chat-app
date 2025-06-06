interface PropType {
    placeholder: string;
}


export function TextInput({ placeholder }: PropType) {
    return (
        <div>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}