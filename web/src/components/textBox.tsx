import { useRecoilState } from 'recoil'

import { keywordState } from 'state'

const PLACEHOLDER = 'Query'

export default function TextBox() {
    const [keyword, setKeyword] = useRecoilState(keywordState)

    return (
        <div className="">
            <input 
                defaultValue={ keyword }
                onChange={(e) => setKeyword(e.target.value)}
                className="rounded py-2 px-2 w-full min-w-20 font-medium placeholder:text-gray-300" 
                placeholder={PLACEHOLDER}
            />
        </div>
    )
}