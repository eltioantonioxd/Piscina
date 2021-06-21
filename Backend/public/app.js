// console.log(firebase);
const auth = firebase.auth();

const login = document.querySelector("#login");
const floatingInput = document.querySelector("#floatingInput");
const floatingPassword = document.querySelector("#floatingPassword");

const logout = document.querySelector("#logout");
const preview = document.querySelector("#preview");

const handleSubmit = (e) => {
  e.preventDefault();
  const email = floatingInput.value;
  const password = floatingPassword.value;
  console.log(email, password);
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((err) => {
      console.error(err);
    });
};
login?.addEventListener("submit", handleSubmit);
if (window.location.pathname == "/dashboard") {
  const socket = io();
  socket.on("dashboard:data", (data) => {
    preview.innerText = JSON.stringify(data, null, 2);
  });
}
logout?.addEventListener("click", () => auth.signOut());
auth.onAuthStateChanged((user) => {
  if (user && window.location.pathname != "/dashboard") {
    window.location.pathname = "/dashboard";
  } else if (!user && window.location.pathname != "/") {
    window.location.pathname = "/";
  }
});
