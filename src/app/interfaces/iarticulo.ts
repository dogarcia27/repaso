export interface ISource {
    id?: string,
    name: string
}

export interface IArticulo {
    source: ISource,
    author?: string,
    title: string,
    description?: string,
    url?: string,
    urlToImage?: string,
    publishedAt?: string,
    content?: string
}
