import { useRef, Suspense, useEffect } from 'react'
import type { MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import { useSetRecoilState } from 'recoil'

import PhotoCard from './photoCard'

interface PhotoModalProps {
    show: boolean
    toggle: () => void
}

function PhotoModal (props: PhotoModalProps) {
    const containerRef = useRef(null)

    if (!props.show) {
        return null
    }
    
    const handleClick = (e:  MouseEvent) => {
        if (e.target === containerRef.current) {
            props.toggle()
        }
    }

    return createPortal(
        <div
            ref={containerRef}
            onClick={handleClick}
            className='
                bg-black bg-opacity-80 fixed top-0 left-0 h-full w-full
                flex items-center justify-center 
            '
        >
            <Suspense fallback={<div>Loading...</div>}>
                <PhotoCard />
            </Suspense>
        </div>,
        document.getElementById('modal-root')!
    )
}

export default PhotoModal
