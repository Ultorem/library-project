//library declared as an array
let myLibrary = [];



//dark or light?
function lightSwitch() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

//makes the pop up appear
function toggleAddBook() {
    var element = document.getElementById("popUpContainer");
    element.style.display = "block";
}

//makes the popup disappear
function closePopUp() {
    var element = document.getElementById("popUpContainer");
        element.style.display = "none";
}


//displays the books
function displayBooks() {

    console.table(myLibrary);

}

//Book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}



//function to add book to library array and display it on the page
function addBookToLibrary(event) {

}

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    console.log(event);
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
    closePopUp();
});







function addBookToLibrary() {
  // do stuff here
}



