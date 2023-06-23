const UNAME = "pooja";


const UserApi = {
  borrowBook: async (BookId, userId) => {
    const res = await fetch("/v1/user/borrow", {
      method: "POST",
      body: JSON.stringify({ BookId, userId }),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  returnBook: async (BookId, userId) => {
    const res = await fetch("/v1/user/return", {
      method: "POST",
      body: JSON.stringify({ BookId, userId }),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  getBorrowBook: async () => {
    const res = await fetch("/v1/user/borrowed-books", { method: "GET" })
    return res.json()
  },
  login: async (username, password) => {
    var pass = encodeURI(password);
    var uname = encodeURI(username);
    var url = `https://localhost:7117/api/Login/Login?userName=${uname}&password=${pass}`;
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
    var rtt = await res.json();
    console.log(rtt);
    return rtt;
  },
  getProfile: async () => {
    const res = await fetch("/v1/user/profile", { method: "GET" })
    return res.json()
  },
  logout: async () => {
    const res = await fetch("/v1/user/logout", { method: "GET" })
    return res.json()
  },
}

module.exports = { UserApi }