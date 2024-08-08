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
                    }, 10000);
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
            }, 10000);
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

    const user_upload_btn = document.querySelector("#user_upload_btn");
    const userID = user.uid;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    user_upload_btn.innerText = "Uploading...";

    db.collection("posts")
        .add({
            topic,
            subject,
            group,
            link,
            time: formattedDate,
            userID,
        })
        .then(() => {
            user_upload_btn.innerText = "Note Uploaded ✓";
            setTimeout(() => {
                user_upload_btn.innerText = "Upload";
            }, 10000);
        })
        .catch((error) => {
            console.log(error);
            alert(error.message);
            user_upload_btn.innerText = "Upload";
        });
});

// getting data
search_form.addEventListener("submit", (e) => {
    e.preventDefault();

    main_note_div.innerHTML = "";

    const date = document.querySelector("#date").value;
    const subject = document.querySelector("#search_subject").value;
    const group = document.querySelector("#group").value;

    db.collection("posts")
        .where("time", "==", date)
        .where("subject", "==", subject)
        .where("group", "==", group)
        .get()
        .then((snapshot) => {
            if (snapshot.size > 0) {
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    console.log(data, "data");

                    generateDom(data);
                });
            }
        });
});

function generateDom(data) {
    let data_user;
    db.collection("users")
        .doc(data.userID)
        .get()
        .then((snap) => {
            console.log(snap);

            data_user = snap.data();
            console.log(data_user);

            const div = document.createElement("div");
            div.classList.add("col-sm-6", "col-md-4");
            div.innerHTML = `<div class="card main_note_box mt-3">
                        <div class="card-body">
                            <h5 class="card-title">${data.topic}</h5>
                            <p class="card-text">
                                <small><i>by,</i></small> <br />
                                ${data_user.name} <br />
                                Roll: ${data_user.roll}
                            </p>
                            <a
                                href=${data.link}
                                class="btn btn-primary btn-sm stretched-link"
                                target="_blank"
                                >Get File &#x2B67;</a
                            >
                        </div>
                    </div>`;
            main_note_div.appendChild(div);
        })
        .catch((err) => {
            console.log(err);
        });
}

function showEmailVerif(email) {
    document.querySelector(
        "#alertBox"
    ).innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  A verification mail has been sent to <strong>${email}</strong>. Verify email to upload notes.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}
