// Initialize arrays to store book details
let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

// Function to create the initial book list
function createBookList(title, author, initialCopies) {
  bookTitles.push(title);
  authorNames.push(author);
  copiesAvailable.push(initialCopies);
}

// Function to add copies to a particular book
function addCopies(bookTitle, addedCopies) {
  const index = bookTitles.indexOf(bookTitle);
  if (index !== -1) {
    copiesAvailable[index] += addedCopies;
    console.log(
      `Added ${addedCopies} copies to ${bookTitle}. Updated copies available: ${copiesAvailable[index]}`
    );
  } else {
    console.log(`${bookTitle} not found in the book list.`);
  }
}

// Function to sell copies of a particular book
function sellBook(bookTitle, soldCopies) {
  const index = bookTitles.indexOf(bookTitle);
  if (index !== -1) {
    if (copiesAvailable[index] >= soldCopies) {
      copiesAvailable[index] -= soldCopies;
      console.log(
        `Sold ${soldCopies} copies of ${bookTitle}. Updated copies available: ${copiesAvailable[index]}`
      );
    } else {
      console.log(`Not enough copies available for ${bookTitle}.`);
    }
  } else {
    console.log(`${bookTitle} not found in the book list.`);
  }
}

// Function to get details of all books
function getDetails() {
  const bookDetails = [];
  for (let i = 0; i < bookTitles.length; i++) {
    bookDetails.push(
      `${bookTitles[i]} by ${authorNames[i]} - Copies available: ${copiesAvailable[i]}`
    );
  }
  return bookDetails;
}

// Sample Input
createBookList("Bohubrihi", "Humayun Ahmed", 10);

// Adding copies
addCopies("Bohubrihi", 5);

// Selling copies
sellBook("Bohubrihi", 3);

// Getting details
const details = getDetails();
console.log(details);
