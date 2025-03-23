// Destructuring objects and arrays

const book = {
    title: 'titlee',
    author: 'authorr',
    genre: ['fiction', 'humour', 'horror']
}

const { title, author, ...other } = book

console.log(title, author, other) // Output: [ 'titlee', 'authorr' ]

const [primaryGenre, secondaryGenre, ...othergenres] = book.genre

console.log(primaryGenre, secondaryGenre, othergenres) // Output [ 'fiction', 'humour' ]


const updatedBook = {
    ...book,
    title: 'new title', // overwrite existing property
}

console.log(updatedBook)

