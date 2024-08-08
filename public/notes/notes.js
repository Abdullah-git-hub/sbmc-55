let user;

const user_signup_form = document.querySelector("#user_signup_form");
const user_login_form = document.querySelector("#user_login_form");

user_signup_form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("#user_signup_email").value;
    const password = document.querySelector("#user_signup_pass").value;
    const name = document.querySelector("#user_signup_name").value;
    const roll = document.querySelector("#user_signup_roll").value;
    const user_signup_btn = document.querySelector("#user_signup_btn");

    user_signup_btn.innerText = "Signing up...";

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            user = userCredential.user;
            console.log(user);

            db.collection("users")
                .doc(user.uid)
                .set({
                    name,
                    roll,
                    email,
                    uid: user.uid,
                })
                .then(() => {
                    user_signup_btn.innerText = "Accound Created ✓";

                    setTimeout(() => {
                        user_signup_btn.innerText = "Signup";
                    }, 10000);
                })
                .catch((error) => {
                    console.log(error);
                    user_signup_btn.innerText = "Signup";
                });
        })
        .catch((error) => {
            console.log(error);
        });
});
