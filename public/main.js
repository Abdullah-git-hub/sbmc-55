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
                            <a href="${anatomyGrpLink[userAnatomyGrp][0]}" class="btn btn-primary">Join Group <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Physiology</h5>
                            <p class="card-text">WhatsApp group</p>
                            <a href="https://chat.whatsapp.com/KJgeCgGX58TF2m7XVWkR2Z" class="btn btn-success">Join Group <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Biochemistry</h5>
                            <p class="card-text">WhatsApp group</p>
                            <a href="https://chat.whatsapp.com/H6kft4cqtoP24aADZD815n " class="btn btn-success">Join Group <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
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
                            <a href="https://t.me/+TkHjmOZ0zwM5NzVl" class="btn btn-info">Join Group <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Discussion group</h5>
                            <p class="card-text">Telegram group</p>
                            <a href="https://t.me/+BMcKKkXCPh9mMTI9" class="btn btn-info">Join Group <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>
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
