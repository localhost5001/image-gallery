import { useRecoilValue, useSetRecoilState } from 'recoil'

import { keywordState, selectedCollectionState, photoQueryState } from 'state'

export default function SearchBtn() {
    const keyword = useRecoilValue(keywordState)
    const selectedCollection = useRecoilValue(selectedCollectionState)
    const setPhotoQuery = useSetRecoilState(photoQueryState)
    
    const handleSearchClick = async () => {
        setPhotoQuery(
            { keyword: keyword, collectionId: selectedCollection?.id ?? null }
        )
    }

    return (
        <button 
            onClick={handleSearchClick}
            className="rounded-full w-full p-2 uppercase bg-indigo-800 hover:bg-indigo-600 text-white font-semibold text-md"
        >
            Search
        </button>
    )
}
