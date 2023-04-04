const url = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData() {
  const data = await fetch(url, { method: "GET" });

  console.log(await data.json());

  console.log("Hi");
}

fetchData();
// 1. Callback
// 2. Promise
// 3. Async / Await
