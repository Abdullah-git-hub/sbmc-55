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
                                >Get File   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a
                            >
                        </div>
                    </div>`;
            main_note_div.appendChild(div);
        })
        .catch((err) => {
            console.log(err);
        });
}
