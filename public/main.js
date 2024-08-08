const form = document.querySelector(".main_form");
const main_info_div = document.querySelector(".main_info_div");
const routine_table = document.querySelector(".routine_table");

main_info_div.style.display = "none";
routine_table.style.display = "none";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userRollInput = form.elements["user_roll"].value;
    console.log(userRollInput);

    displayInfo(userRollInput);
});

function displayInfo(roll) {
    var userAnatomyGrp;
    var userNotAnatomyGrp;
    const anatomyGrpLink = [
        ["https://m.me/j/AbbN5R2pqAcqvPRm", "A"],
        ["https://m.me/j/AbavrsPMfqyqVYkm", "B"],
        ["https://m.me/j/AbYeOPxWv4_677Zb", "C"],
        ["https://m.me/j/AbYVQ818DeNudheb", "D"],
        ["https://m.me/j/AbYr7g66jo-nLbfl", "E"],
    ];
    const routine8 = [
        [
            "A: Histology",
            "B: Tutorial (Anatomy)",
            "C: Tutorial (Anatomy)",
            "D: Tutorial (Anatomy)",
            "E: Tutorial (Anatomy)",
        ],
        [
            "A: Tutorial (Anatomy)",
            "B: Histology",
            "C: Tutorial (Anatomy)",
            "D: Tutorial (Anatomy)",
            "E: Tutorial (Anatomy)",
        ],
        [
            "A: Tutorial (Anatomy)",
            "B: Tutorial (Anatomy)",
            "C: Histology",
            "D: Tutorial (Anatomy)",
            "E: Tutorial (Anatomy)",
        ],
        [
            "A: Tutorial (Anatomy)",
            "B: Tutorial (Anatomy)",
            "C: Tutorial (Anatomy)",
            "D: Tutorial (Anatomy)",
            "E: Tutorial (Anatomy)",
        ],
        [
            "A: Tutorial (Anatomy)",
            "B: Tutorial (Anatomy)",
            "C: Tutorial (Anatomy)",
            "D: Histology",
            "E: Tutorial (Anatomy)",
        ],
        [
            "A: Tutorial (Anatomy)",
            "B: Tutorial (Anatomy)",
            "C: Tutorial (Anatomy)",
            "D: Tutorial (Anatomy)",
            "E: Histology",
        ],
    ];
    const routine1120 = [
        [
            "A: Biochem Practical",
            "B: Physiology Practical",
            "C: Biochem Practical",
            "D: Physiology Practical",
        ],
        [
            "A: Physiology Practical",
            "B: Biochem Practical",
            "C: Physiology Practical",
            "D: Biochem Practical",
        ],
        [
            "A: Biochem Practical",
            "B: Physiology Practical",
            "C: Biochem Practical",
            "D: Physiology Practical",
        ],
        [
            "A: Physiology Practical",
            "B: Biochem Practical",
            "C: Physiology Practical",
            "D: Biochem Practical",
        ],
        [
            "A: Biochem Practical",
            "B: Physiology Practical",
            "C: Biochem Practical",
            "D: Physiology Practical",
        ],
        [
            "A: Physiology Practical",
            "B: Biochem Practical",
            "C: Physiology Practical",
            "D: Biochem Practical",
        ],
    ];

    // anatomy check
    if (roll < 51) userAnatomyGrp = 0;
    else if (roll < 101) userAnatomyGrp = 1;
    else if (roll < 151) userAnatomyGrp = 2;
    else if (roll < 201) userAnatomyGrp = 3;
    else userAnatomyGrp = 4;

    // NotAnatomy check
    if (roll < 63) userNotAnatomyGrp = 0;
    else if (roll < 126) userNotAnatomyGrp = 1;
    else if (roll < 188) userNotAnatomyGrp = 2;
    else userNotAnatomyGrp = 3;

    main_info_div.innerHTML = ``;
    main_info_div.innerHTML = `<h3><span class="badge bg-warning text-dark">Roll: ${roll}</span></h3>
            <div class="row">
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Anatomy Group:${anatomyGrpLink[userAnatomyGrp][1]}</h5>
                            <p class="card-text">Messenger group</p>
                            <a href="${anatomyGrpLink[userAnatomyGrp][0]}" class="btn btn-primary">Join Group ></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Physiology</h5>
                            <p class="card-text">WhatsApp group</p>
                            <a href="https://chat.whatsapp.com/KJgeCgGX58TF2m7XVWkR2Z" class="btn btn-success">Join Group ></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Biochemistry</h5>
                            <p class="card-text">WhatsApp group</p>
                            <a href="https://chat.whatsapp.com/H6kft4cqtoP24aADZD815n " class="btn btn-success">Join Group ></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Official Notice group</h5>
                            <p class="card-text">Telegram group</p>
                            <a href="https://t.me/+TkHjmOZ0zwM5NzVl" class="btn btn-info">Join Group ></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Discussion group</h5>
                            <p class="card-text">Telegram group</p>
                            <a href="https://t.me/+BMcKKkXCPh9mMTI9" class="btn btn-info">Join Group ></a>
                        </div>
                    </div>
                </div>
            </div>`;
    main_info_div.style.display = "block";

    routine_table.innerHTML = ``;
    routine_table.innerHTML = `<h4 class="mt-3 mb-2 text-center">
                CLASS SCHEDULE FOR 1ST YEAR MBBS
            </h4>
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">8-10am</th>
                        <th scope="col">10-11am</th>
                        <th scope="col">11.20-1pm</th>
                        <th scope="col">1-2pm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-day-index="6">
                        <th scope="row">Saturday</th>
                        <td>${routine8[0][userAnatomyGrp]}</td>
                        <td>Physiology Lecture [G-2]</td>
                        <td>${routine1120[0][userNotAnatomyGrp]}</td>
                        <td>Anatomy Lecture [Dr. Chandona]</td>
                    </tr>
                    <tr data-day-index="0">
                        <th scope="row">Sunday</th>
                        <td>${routine8[1][userAnatomyGrp]}</td>
                        <td>Biochemistry Lecture [G-2]</td>
                        <td>${routine1120[1][userNotAnatomyGrp]}</td>
                        <td>Physiology Lecture [G-3]</td>
                    </tr>
                    <tr data-day-index="1">
                        <th scope="row">Monday</th>
                        <td>${routine8[2][userAnatomyGrp]}</td>
                        <td>Physiology Lecture [G-2]</td>
                        <td>${routine1120[2][userNotAnatomyGrp]}</td>
                        <td>Biochemistry Lecture [G-3]</td>
                    </tr>
                    <tr data-day-index="2">
                        <th scope="row">Tuesday</th>
                        <td>${routine8[3][userAnatomyGrp]}</td>
                        <td>Break</td>
                        <td>${routine1120[3][userNotAnatomyGrp]}</td>
                        <td>Physiology/Biochem Lecture [G-3]</td>
                    </tr>
                    <tr data-day-index="3">
                        <th scope="row">Wednesday</th>
                        <td>${routine8[4][userAnatomyGrp]}</td>
                        <td>Biochemistry Lecture [G-2]</td>
                        <td>${routine1120[4][userNotAnatomyGrp]}</td>
                        <td>Anatomy Lecture [Dr. Shakila]</td>
                    </tr>
                    <tr data-day-index="4">
                        <th scope="row">Thursday</th>
                        <td>${routine8[5][userAnatomyGrp]}</td>
                        <td>Anatomy Lecture [Dr. Chandona]</td>
                        <td>${routine1120[5][userNotAnatomyGrp]}</td>
                        <td>Anatomy Lecture [Dr. Shakila]</td>
                    </tr>
                </tbody>
            </table>`;

    routine_table.style.display = "block";

    const today = new Date();
    const dayIndex = today.getDay();
    console.log(dayIndex);
    try {
        document
            .querySelector(`tr[data-day-index="${dayIndex}"]`)
            .classList.add("table-warning");
    } catch (error) {}
}

// =============================

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

function showEmailVerif(email) {
    auth.signOut();
    document.querySelector(
        "#alertBox"
    ).innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  A verification mail has been sent to <strong>${email}</strong>. Verify email to upload notes.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}
