import { useState } from 'react'
import logo from '../logo.svg'

import type { PhotoQuery } from 'models/photoQuery'

import SelectBox from 'components/selectBox'
import TextBox from 'components/textBox'

export default function NavBar() {
    const [keyword, setKeyword] = useState('')
    const [collectionId, setCollectionId] = useState<number | null>(null)

    const handleKeywordChange = (newVal: string) => {
        setKeyword(newVal)
    }
    const handleSearchClick = () => {
        const query: PhotoQuery = { keyword: keyword, collectionId: collectionId }
    }

    const items = [
        { id: 1, text: 'Mountain' },
        { id: 2, text: 'Space' },
        { id: 3, text: 'City' },
    ]


    return (
    <nav className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto h-full flex items-center space-x-10">
            <div className='mx-auto'>
                <img src={logo} className="mr-3 h-10 mx-1"></img>
            </div>

            <div className='hidden md:flex flex-grow space-x-4'>
                <div className="basis-2/5">
                    <TextBox />
                </div>

                <div className="basis-2/5">
                    <SelectBox   />
                </div>

                <div className="basis-1/5">
                    <button className="rounded-full w-full p-2 bg-indigo-800 hover:bg-indigo-600 uppercase text-white font-semibold text-md">
                        Search
                    </button>
                </div>
            </div>
        </div>

        <div className='md:hidden block mx-2 space-y-5 mt-4'>
            <div className="">
                <TextBox />
            </div>

            <div className="">
                <SelectBox />
            </div>

            <div className="">
                <button 
                    onClick={handleSearchClick}
                    className="rounded-full w-full p-2 uppercase bg-indigo-800 hover:bg-indigo-600 text-white font-semibold text-md"
                >
                    Search
                </button>
            </div>
        </div>
    </nav>    
    )
}

