import logo from '../logo.svg'

import SelectBox from 'components/selectBox'
import TextBox from 'components/textBox'
import SearchBtn from 'components/searchBtn'

export default function NavBar() {
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
                    <SearchBtn />
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
               <SearchBtn />
            </div>
        </div>
    </nav>    
    )
}

