//book class
class Book{
    constructor(title,author,isbn){
        this.title =title;
        this.author = author;
        this.isbn = isbn
    }
}


//ui class
class UI{
    static displayBooks(){
        const StoredBooks =[
            {
                title:'Book One',
                author:'John Doe',
                isbn:'343434'
            },
            {
                title:'Book Two',
                author:'Jane Doe',
                isbn:'45545'
            }
        ];

        const books = StoredBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger delete">Delete</a></td>
        `;
        list.appendChild(row);
    }
    static deleteBook(ele){
        if(ele.classList.contains('delete')){
            ele.parentElement.parentElement.remove();
        }
 
    }
    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        //vanish in 3seconds
        setTimeout(()=> document.querySelector('.alert').remove(),3000);

    }
    static clearFileds(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
}


//store class

//event display books

document.addEventListener('DOMContentLoaded',UI.displayBooks);

//event to add book
document.getElementById('book-form').addEventListener('submit',(e)=>{
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

//valideate
if(title === ''|| author === ''|| isbn === ''){
    UI.showAlert('Please fill in all fields','danger');
}else{
//instaniate book
const book = new Book(title,author,isbn);
    
//add book to uI
UI.addBookToList(book);

UI.showAlert('Book Added','success');

//clear fields
UI.clearFileds();
}    
});


//event to remove book

document.querySelector('#book-list').addEventListener('click',(e)=>{
   UI.deleteBook(e.target);

   UI.showAlert('Book removed','success');
});
