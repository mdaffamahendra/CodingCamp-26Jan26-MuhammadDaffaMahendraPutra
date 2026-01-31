document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("greetingModal");
  const nameInput = document.getElementById("nameInput");
  const submitBtn = document.getElementById("submitBtn");
  const homeSection = document.getElementById("home");
  const welcomeMessage = document.getElementById("welcomeMessage");

  modal.classList.remove("hidden");
  homeSection.classList.add("hidden");

  submitBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
      welcomeMessage.textContent = `Hi Tamu, Welcome to Or Company`;
    } else {
      welcomeMessage.textContent = `Hi ${name}, Welcome to Or Company`;
    }

    modal.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitBtn.click();
    }
  });

  nameInput.focus();
});
