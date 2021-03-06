import SelectBox from 'components/selectBox'
import TextBox from 'components/textBox'
import SearchBtn from 'components/searchBtn'

export default function NavBar() {
    return (
    <nav className="bg-gray-800 py-6">
        <div 
            className='
                md:flex md:mx-auto md:max-w-6xl 
                block
            '
        >
            <div 
                className='
                    md:flex md:flex-grow md:space-x-4 md:sm:space-y-0 md:mt-0
                    block mx-2 space-y-5 mt-4 flex-grow-0
                '
            >
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
    </nav>    
    )
}

