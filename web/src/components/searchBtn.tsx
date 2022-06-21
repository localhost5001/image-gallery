import { useRecoilValue } from 'recoil'

import { keywordState, selectedCollectionState } from 'state'
import { photosApi } from 'api'

export default function SearchBtn() {
    const keyword = useRecoilValue(keywordState)
    const selectedCollection = useRecoilValue(selectedCollectionState)
    
    const handleSearchClick = async () => {
        if (!selectedCollection?.id || !keyword) {
            return
        }

        const photos = await photosApi.getPhotos(
            { keyword: keyword, collectionId: selectedCollection.id }
        )
        console.log(photos)
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
