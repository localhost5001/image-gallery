import { useMemo, useState } from 'react'

export interface Item {
    id: number
    text: string
}

interface SelectBoxProps {
    items: Item[]
    value: string | null
    palceholder?: string
    onChange: (id: number | null) => void
}

export default function SelectBox(props: SelectBoxProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [itemSelected, setItemSelected] = useState(false)
    const [labelText, setLabelText] = useState(props.palceholder)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const onChange = (item?: Item) => {
        if (!item) {
            setLabelText(props.palceholder)
            setItemSelected(false)
        } else {
            setLabelText(item.text)
            setItemSelected(true)
        }

        props.onChange(item?.id ?? null)
    }

    const labelStyles = useMemo(
        () => (`absolute left-0 p-2 font-medium ${itemSelected ? '' : 'text-gray-300'}`),
        [itemSelected]
    )

    return (
        <div className='rounded bg-white w-fullcursor-pointer drop-shadow' onClick={toggleIsOpen}>
            <select className='appearance-none bg-transparent py-2 px-2 font-medium drop-shadow'>
                
            </select>

            <label className={labelStyles}>
                {labelText}
            </label>

            <div className='absolute z-10 right-3 inset-y-1/2 w-3 h-3'>
                <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.744 6.17159C5.34666 6.61401 4.65334 6.61401 4.256 6.17159L0.436019 1.91818C-0.142142 1.27442 0.314743 0.249999 1.18002 0.249999L8.81999 0.25C9.68526 0.25 10.1421 1.27442 9.56398 1.91818L5.744 6.17159Z" fill="#050417"/>
                </svg>
            </div>
            
            <ul className='absolute bg-white top-9 w-full rounded-b' hidden={!isOpen}>
                {props.items.map((item) => (
                    <li 
                        key={item.id} 
                        className='py-2 px-2 hover:bg-gray-200 border-b cursor-pointer font-medium'
                        onClick={(e) => onChange(item)}
                    >
                            {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}
