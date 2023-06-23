const UNAME = "pooja";


const BookApi = {
  getAllBooks: async () => {
    const res = await fetch("https://localhost:7117/api/Book/GetBooks", { method: "GET" })
    console.log('I am called')
    var ress = await res.json();
    console.log(ress);
    return ress;
  },
  getBookByIsbn: async (bookIsbn) => {
    const res = await fetch(`https://localhost:7117/api/Book/GetBookById?id=${bookIsbn}`, { method: "GET" })
    return await res.json()
  },
  addBook: async (data) => {
    const res = await fetch("https://localhost:7117/api/Book/AddBook", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  patchBookByIsbn: async (bookIsbn, data) => {
    const res = await fetch(`/v1/book/${bookIsbn}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  deleteBook: async (bookIsbn) => {
    const res = await fetch(`/v1/book/${bookIsbn}`, { method: "DELETE" })
    return res.json()
  },
}

module.exports = { BookApi }