interface TextInputProps {
    placeholder: string;
    type?: string;
}

function TextInput({ placeholder, type = "text" }: TextInputProps) {
    return (
        <input type={type} placeholder={placeholder} className="text-input" />
    );
}

export default TextInput;
