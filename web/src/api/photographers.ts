import { Photographer } from 'models/photographer'

export const getPhotographerById = (id: number): Promise<Photographer> => {
    return Promise.resolve({
        id: 1,
        bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        instagram_username: 'inst_username',
        twitter_username: 'twit_username', 
        profile_image_url: 'url',
        location: 'location',
        name: 'John Johnson',
    })
}
