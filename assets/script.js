// script for index.hmtl
var buttons = document.querySelector(".buttons");
buttons.style.display = "none";

onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 100);

    const t = setTimeout(() => {
        buttons.style.display = "flex";
        clearTimeout(t);
    }, 3000)
};
// end script for index.hmtl


// script for shotingStar.html
let wishBtn = document.querySelector(".wish-area .wish-btn");
wishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let wishInput = document.querySelector("#wish-input");

    const data = {
        wishOfMy: wishInput.value
    }

    postGoogleForm(data);

    if (wishInput.value.trim().length <= 0) {
        document.querySelector(".wish-area .excessive-length-wish").style.display = "none";
        document.querySelector(".wish-area .no-wish").style.display = "flex";
    } else if (wishInput.value.trim().length >= 35) {
        document.querySelector(".wish-area .no-wish").style.display = "none";
        document.querySelector(".wish-area .excessive-length-wish").style.display = "flex";
    } else {
        document.querySelector(".wish-text-content").classList.add("hidden-wish-text-content");
    }
})

async function postGoogleForm(data) {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScC1IwrfHcnAj4dWeRVbLc6lRI6JC692a23U-8L5OVsTpRqYQ/formResponse";
    const formData = new FormData();
    formData.append("entry.492919640", data.wishOfMy);
    console.log(formData);

    await fetch(formURL, {
        method: "POST",
        body: formData
    }).catch(err => console.log(err));

}
// end script for shotingStar.html