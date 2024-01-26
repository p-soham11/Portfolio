/**
 * Typing Animations
 *
 * @format
 */

var typed = new Typed(".typing", {
    strings: [
        "",
        "Web Developer",
        "Web Designer",
        "Full Stack Developer",
        "Engineer",
        "Life-Long Learner",
    ] /* using a empty quotations else the first string will not be executed  */,
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
});
/*Hamburger style nav*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (
            target ==
            navList[i].querySelector("a").getAttribute("href").split("#")[1]
        ) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}
// Function to send an email to the provided email address
function openGmailCompose() {
    var emailAddress = document.getElementById("emailID").value;
    var subject = document.getElementById("subjectInput").value;
    var name = document.getElementById("nameofSender").value;
    var body = document.getElementById("bodyInput").value;
    var mainbody = "\nMessage:\n" + body + "\nRespectfully,\n " + name;
    if (subject === "" || name === "" || body === "") {
        alert(
            "Any Fields cannot be empty, Please fill every details to proceed"
        );
        return false;
    } else {
        // Construct the Gmail compose URL
        var composeUrl =
            "https://mail.google.com/mail/?view=cm&fs=1&to=" +
            encodeURIComponent(emailAddress) +
            "&su=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(mainbody);

        // Open the Gmail compose window
        window.open(composeUrl);
    }
}
