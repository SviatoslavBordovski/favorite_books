// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

function addFavoriteBook(bookName) { // adding all books with bookName to 
    // the 'favoriteBooks' array that do not include the 'Great' word
    if (!bookName.includes("Great")){
        favoriteBooks.push(bookName);
    }
}

 function printFavoriteBooks() { // prints array length 
    //and every bookName of the favoriteBooks array
    console.log('Favorite Books: ' + favoriteBooks.length)

    for(let bookName of favoriteBooks) {
        console.log(bookName + ' is fantastic');
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

//console.log(favoriteBooks);

// TODO: print out favorite books

printFavoriteBooks();