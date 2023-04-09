const url = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData() {
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  console.log("Hi", data);
}

fetchData();
// 1. Callback
// 2. Promise
// 3. Async / Await
