import { useMemo, useState } from 'react'

import { useRecoilValueLoadable, useRecoilState } from 'recoil'

import { Collection } from 'models/collection'
import { collectionsState, selectedCollectionState } from 'state'

const PLACEHOLDER = 'Collection'

export default function SelectBox() {
    const collectionsLoadable = useRecoilValueLoadable(collectionsState)
    const [selectedCollection, setSelectedCollection] = useRecoilState(selectedCollectionState)
    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const onChange = (item: Collection | null) => {
        setSelectedCollection(item)
    }

    const labelStyles = useMemo(
        () => (`absolute left-0 p-2 font-medium ${selectedCollection !== null ? '' : 'text-gray-300'}`),
        [selectedCollection]
    )

    const renderElements = (elements: Collection[]) => elements.map((item: any) => (
        <li 
            key={item.id} 
            className='py-2 px-2 hover:bg-gray-200 border-b cursor-pointer font-medium'
            onClick={(e) => onChange(item)}
        >
                { item.title }
        </li>
    ))

    const renderElementsLoadable = () => {
        switch (collectionsLoadable.state) {
            case 'hasValue':
              return <div>{renderElements(collectionsLoadable.getValue())}</div>
            case 'loading':
              return <div className="text-gray-400 text-center font-medium">Loading...</div>
            case 'hasError':
                <div className="text-red-400 text-center font-medium">Error occured</div> 
        }
    }

    return (
        <div className='rounded bg-white w-fullcursor-pointer drop-shadow' onClick={toggleIsOpen}>
            <select className='appearance-none bg-transparent py-2 px-2 font-medium drop-shadow'>
                
            </select>

            <label className={labelStyles}>
                {selectedCollection?.title ?? PLACEHOLDER }
            </label>

            <div className='absolute z-10 right-3 inset-y-1/2 w-3 h-3'>
                <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.744 6.17159C5.34666 6.61401 4.65334 6.61401 4.256 6.17159L0.436019 1.91818C-0.142142 1.27442 0.314743 0.249999 1.18002 0.249999L8.81999 0.25C9.68526 0.25 10.1421 1.27442 9.56398 1.91818L5.744 6.17159Z" fill="#050417"/>
                </svg>
            </div>
            
            <ul className='absolute bg-white top-9 w-full rounded-b' hidden={!isOpen}>
                {
                    renderElementsLoadable()
                }
            </ul>
        </div>
    )
}
