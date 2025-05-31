import { Author } from "./author.interfaces"

export interface Book {
    id: number
    author: Author
    title: String
    annotation: String
    genres: String[]
    avatarUrl: String
    resource: String
    info: String
}
