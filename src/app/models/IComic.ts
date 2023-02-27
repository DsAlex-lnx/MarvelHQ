export interface IComic{  
    id: number,
    title: string,
    thumbnail: Thumbnail,
    description: string,
}

interface Thumbnail {
    path: string;
    extension: string;
}