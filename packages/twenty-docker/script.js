const email = "connectupintelligence@gmail.com";
const password = "Felipe3121";
async function run() {
  const loginRes = await fetch("http://localhost:3000/auth/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation { getLoginTokenFromCredentials( email: "${email}", password: "${password}" ) { loginToken } }`
    })
  });
  const loginData = await loginRes.json();
  console.log("Login Token:", JSON.stringify(loginData));
}
run();
