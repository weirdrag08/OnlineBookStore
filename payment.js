var book_name, book_author, date_and_time, book_name_fill, book_author_fill, date_and_time_fill, order_number;

// ! HAVE TO MAKE BOTH OF THESE WORK (doing_payment() & get_info())
// function doing_payment() {
    // book_name_fill = document.getElementById('name_of_book');
    // book_author_fill = document.getElementById('name_of_author');
   
    // book_name_fill.innerHTML = book_name;
    // book_author_fill.innerHTML = book_author;
    // console.log("Payment Works!!");
// }

// function redirect(){
//     setTimeout('redirect()', 10000);
//     window.location = "http://127.0.0.1:5500/index.html";
//     console.log("redirection works!!!!")
// }

function get_info(){
    // book_name = document.getElementById('book-name').value;
    // book_author = document.getElementById('author-name').value;
    date_and_time_fill = document.getElementById('date_with_time');
    date_and_time = new Date();
    // console.log(book_name, book_author);
    date_and_time_fill.innerHTML = date_and_time.getDate() + "/" + date_and_time.getMonth() + "/"+ date_and_time.getFullYear() + " , " + 
    date_and_time.getHours() + ":" + date_and_time.getMinutes() + ":" + date_and_time.getSeconds();
    console.log("Function called!");
}



function getting_order_number(){
    order_number = Math.floor((Math.random() * 10e9));
    document.getElementById('o-number').innerHTML = "Order No: " + order_number;
    get_info();
}
