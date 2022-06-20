
interface TextBoxProps {
    onChange: (val: string) => void
    placeholder?: string
}

export default function TextBox(props: TextBoxProps) {
    return (
        <div className="">
            <input 
                onChange={(e) => props.onChange(e.target.value)}
                className="rounded py-2 px-2 w-full min-w-20 font-medium placeholder:text-gray-300" 
                placeholder={props.placeholder}
            />
        </div>
    )
}