import {gql} from '@apollo/client'

export const ALL_AUTHORS = gql`
    query {
        allAuthors {
            name
            born
            bookCount
        }
    }
`
export const ALL_BOOKS = gql`
    query {
        allBooks {
            title
            published
            author
        }
    }
`

export const ADD_BOOK = gql`
    mutation createBook($title: String!, $author: String!, $published: Int, $genres: [String!]!) {
        addBook(
            title: $title, 
            author: $author,
            published: $published,
            genres: $genres
        ) {
            title
            author
            published
            genres
        }
    }
`

export const EDIT_AUTHOR_BIRTH = gql`
    mutation editYear($name: String!, $born: Int!) {
        editAuthor(
            name: $name, 
            born: $born
        ) {
            name
            born
        }
    }
`