let user;

const user_signup_form = document.querySelector("#user_signup_form");
const user_login_form = document.querySelector("#user_login_form");
const user_upload_form = document.querySelector("#user_upload_form");
const main_note_div = document.querySelector(".main_note_div");
const search_form = document.querySelector("#search_form");

// signup
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
                    auth.currentUser
                        .sendEmailVerification()
                        .then(() => {
                            showEmailVerif(auth.currentUser.email);
                        })
                        .catch((err) => {
                            alert(err.message + " Please try again later");
                            console.log(err.code);
                            auth.currentUser.delete();
                        });

                    user_signup_btn.innerText = "Accound Created ✓";
                    setTimeout(() => {
                        user_signup_btn.innerText = "Signup";
                    }, 5000);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error.message);
                    user_signup_btn.innerText = "Signup";
                });
        })
        .catch((error) => {
            console.log(error);
            alert(error.message);
        });
});

// login
user_login_form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("#user_login_mail").value;
    const password = document.querySelector("#user_login_pass").value;
    const user_login_btn = document.querySelector("#user_login_btn");

    user_login_btn.innerText = "Logging in...";

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            user = userCredential.user;
            console.log(user);
            user_login_btn.innerText = "Logged In ✓";
            setTimeout(() => {
                user_login_btn.innerText = "Login";
            }, 5000);
        })
        .catch((error) => {
            alert(error.message);
            console.log(error);
            user_login_btn.innerText = "Login ";
        });
});

// cheaking auth state
auth.onAuthStateChanged((userData) => {
    user = userData;

    const loginBtn = document.querySelector(".loginBtn");
    const SignupBtn = document.querySelector(".SignupBtn");
    const uploadBtn = document.querySelector(".uploadBtn");
    const logoutBtn = document.querySelector(".logoutBtn");

    if (user == null) {
        uploadBtn.style.display = "none";
        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
        SignupBtn.style.display = "block";
    } else {
        uploadBtn.style.display = "block";
        logoutBtn.style.display = "block";
        loginBtn.style.display = "none";
        SignupBtn.style.display = "none";
    }
});

// upload a post
user_upload_form.addEventListener("submit", function (e) {
    e.preventDefault();

    const topic = document.querySelector("#user_upload_topic").value;
    const subject = document.querySelector("#user_upload_subject").value;
    const group = document.querySelector("#user_upload_group").value;
    const link = document.querySelector("#user_upload_link").value;
    const time = document.querySelector("#user_upload_time").value;

    const user_upload_btn = document.querySelector("#user_upload_btn");
    const userID = user.uid;

    user_upload_btn.innerText = "Uploading...";

    db.collection("posts")
        .add({
            topic,
            subject,
            group,
            link,
            time,
            userID,
        })
        .then(() => {
            user_upload_btn.innerText = "Note Uploaded ✓";
            setTimeout(() => {
                user_upload_btn.innerText = "Upload";
            }, 5000);
        })
        .catch((error) => {
            console.log(error);
            alert(error.message);
            user_upload_btn.innerText = "Upload";
        });
});

function showEmailVerif(email) {
    auth.signOut();
    document.querySelector(
        "#alertBox"
    ).innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  A verification mail has been sent to <strong>${email}</strong>. Verify email to upload notes.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}
