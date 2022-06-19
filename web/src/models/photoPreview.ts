import { Photo } from './photo'

export type PhotoPreview = Pick<Photo, 'id' | 'url' | 'height' | 'width'>
