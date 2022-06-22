import { Suspense, useMemo, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { photosState } from 'state'
import { selectedPhotoIdState } from 'state/selectedPhoto'

import { splitChunks } from 'helpers/splitChunks'

import PhotoModal from 'components/photoModal'

const COL_COUNT = 3

function PhotoGallery() {
    const [modalImgUrl, setModalImgUrl] = useState('')
    const setSelectedPhotoId = useSetRecoilState(selectedPhotoIdState)

    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(!showModal)

    const openModal = (photoId: number) => {
        setSelectedPhotoId(photoId)
        toggleModal()
    }

    const photos = useRecoilValue(photosState)
    const chunks = useMemo(() => splitChunks(photos, COL_COUNT), [photos])

    return (
        <>
            <div 
                className="
                    py-10 flex flex-wrap flex-grow justify-center space-x-5
                    space-y-5 md:space-y-0
                "
            >
                {
                    chunks.map((chunk, index) => (
                        <div key={index} 
                            className='
                                md:basis-1/5 md:mx-0 md:space-y-5
                                sm:basis-full space-y-10 mx-5
                            '
                        >
                            {
                                chunk.map(photo => (
                                    <div key={photo.id}>
                                        <img 
                                            src={photo.url}
                                            alt={photo.description}
                                            onClick={() => openModal(photo.id)}
                                            className="
                                                cursor-pointer
                                                transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-300
                                            " 
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                
            </div>
            <PhotoModal 
                show={showModal} 
                toggle={toggleModal} 
            />
        </>
    )
}

export default function PhotoGallerySuspensed() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PhotoGallery />
        </Suspense>
    )
}
