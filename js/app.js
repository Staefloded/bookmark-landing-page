const buttons = document.querySelectorAll(".features__tab--btn");
const features = document.querySelector(".features__body");
const contents = document.querySelectorAll(".features__tab--content");
const questions = document.querySelectorAll(".faq--question");
const form = document.querySelector("form");
const email = form.elements["email"];

// tabs
features.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// collapsible
questions.forEach((question) => {
  const head = question.querySelector(".faq--question--title");
  head.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("faq__show--text");
      }
    });
    question.classList.toggle("faq__show--text");
  });
});

// email validation

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail();
});

function checkEmail() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Whoops, make sure it's an email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Whoops, make sure it's an email");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("h4");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

function isEmail(email) {
  return email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}

// Toggle Menu
const navToggle = document.querySelector(".header--nav__toggle");
const links = document.querySelector(".nav");
const showcase = document.querySelector(".showcase");

navToggle.addEventListener("click", () => {
  if (links.classList.contains("nav--side")) {
    links.classList.remove("nav--side");
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    navToggle.innerHTML = '<i class="fas fa-times" style="color: white"></i>';
    links.classList.add("nav--side");
  }
});
