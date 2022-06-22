import { useRecoilValue } from 'recoil'

import { selectedPhotoState, selectedPhotoPhotographerState, selectedPhotoCollectionState } from 'state/selectedPhoto'

export default function PhotoCard() {
    const photo = useRecoilValue(selectedPhotoState)
    const photographer = useRecoilValue(selectedPhotoPhotographerState)
    const colleciton = useRecoilValue(selectedPhotoCollectionState)
    
    if (photo === null || photographer === null || colleciton === null) {
        throw new Error('Error occured while loading photo data')
    }

    const renderSocialLink = () => {
        if (photographer.instagram_username) {
            return (
                <a 
                    className='font-bold text-lg text-indigo-800'
                    href={`https://www.instagram.com/${photographer.instagram_username}`}
                >
                    @{photographer.instagram_username}
                </a>
            )
        }
        if (photographer.twitter_username) {
            return (
                <a 
                    className='font-bold text-lg text-indigo-800'
                    href={`https://twitter.com/${photographer.twitter_username}`}
                >
                    @{photographer.instagram_username}
                </a>
            )
        }

        return null
    }

    const renderPhotoGrapherProfileImg = () => {
        if (photographer.profile_image_url)
        {
            return (
                <img
                    src={photographer.profile_image_url}
                    className='mb-3 w-14 h-14 rounded-full'
                />
            )
        }

        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }

    const renderDescription = () => {
        if (photographer.location) {
            return (
                <div>
                    <svg className='inline-block mr-2' width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4 8.82676C11.9567 7.95009 12.277 6.92295 12.277 5.82483C12.277 2.60787 9.52867 0 6.13848 0C2.74829 0 0 2.60787 0 5.82483C0 6.92153 0.319402 7.94743 0.874752 8.82335L4.42984 14.6663C5.20899 15.9469 7.06788 15.9469 7.84703 14.6663L11.4 8.82676ZM8.79842 5.82484C8.79842 7.21886 7.60749 8.34894 6.13841 8.34894C4.66933 8.34894 3.4784 7.21886 3.4784 5.82484C3.4784 4.43082 4.66933 3.30075 6.13841 3.30075C7.60749 3.30075 8.79842 4.43082 8.79842 5.82484Z" fill="#050417"/>
                    </svg>
                    <div className='inline-block font-bold'>{photographer.location}</div>
                </div>
            )
        }

        if (photo.description) {
            return (
                <div className='inline-block font-bold'>{photographer.location}</div>
            )
        }

        return null
    }

    return (
        <div 
            className='
                rounded bg-white 
                md:h-4/6 md:w-4/6
                max-w-4xl h-1/2
            '
        >
            <div className='flex flex-col h-full'>
                <div 
                    className='m-2 overflow-auto'
                >
                    <img
                        className=''
                        src={photo.url}
                    />
                </div>

                <div 
                    className='
                        grow 
                        flex items-center justify-between mx-2
                        h-1/4
                    ' 
                    >
                    <div className='flex flex-row items-center'>
                        {renderPhotoGrapherProfileImg()}
                        <div className='flex flex-col ml-2'>
                            <div className='font-bold text-2xl'>{photographer.name}</div>
                            {renderSocialLink()}
                        </div>
                    </div>
                    
                    {renderDescription()}
                </div>
            </div>
        </div>
    )
}
