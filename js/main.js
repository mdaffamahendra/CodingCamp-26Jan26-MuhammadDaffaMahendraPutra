document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("greetingModal");
  const nameInput = document.getElementById("nameInput");
  const submitBtn = document.getElementById("submitBtn");
  const homeSection = document.getElementById("home");
  const welcomeMessage = document.getElementById("welcomeMessage");

  modal.classList.remove("hidden");
  document.body.classList.add('site-locked');

  submitBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
      welcomeMessage.textContent = `Hi Tamu, Welcome to Or Company`;
    } else {
      welcomeMessage.textContent = `Hi ${name}, Welcome to Or Company`;
    }

    modal.classList.add("hidden");
    document.body.classList.remove('site-locked');
  });

  nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitBtn.click();
    }
  });

  nameInput.focus();

  const messageForm = document.getElementById("messageForm");
  const resultCard = document.getElementById("resultCard");
  const resName = document.getElementById("res-name");
  const resDob = document.getElementById("res-dob");
  const resGender = document.getElementById("res-gender");
  const resText = document.getElementById("res-text");
  const resultFields = document.querySelector(".result-fields");
  const resultEmpty = document.querySelector(".result-empty");
  const inpName = document.getElementById("msg-name");
  const inpDob = document.getElementById("dob");
  const inpMsg = document.getElementById("msg-text");

  function getGender() {
    const g = document.querySelector('input[name="gender"]:checked');
    return g ? g.value : "";
  }

  function clearErrors() {
    document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
    document
      .querySelectorAll(".input-invalid")
      .forEach((i) => i.classList.remove("input-invalid"));
  }

  function showError(id, message) {
    const el = document.querySelector('.error[data-for="' + id + '"]');
    if (el) el.textContent = message;
    const field = document.getElementById(id);
    if (field) field.classList.add("input-invalid");
  }

  if (messageForm) {
    if (resultFields) resultFields.style.display = "none";
    if (resultEmpty) resultEmpty.style.display = "block";

    messageForm.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();
      let valid = true;
      if (inpName.value.trim() === "") {
        showError("msg-name", "Nama wajib diisi");
        valid = false;
      }
      if (!inpDob.value) {
        showError("dob", "Tanggal lahir wajib diisi");
        valid = false;
      }
      if (!getGender()) {
        showError("gender", "Pilih jenis kelamin");
        valid = false;
      }
      if (inpMsg.value.trim() === "") {
        showError("msg-text", "Pesan wajib diisi");
        valid = false;
      }
      if (!valid) return;
      if (resName) resName.textContent = inpName.value.trim();
      if (resDob) resDob.textContent = inpDob.value;
      if (resGender) resGender.textContent = getGender();
      if (resText) resText.textContent = inpMsg.value.trim();
      if (resultEmpty) resultEmpty.style.display = "none";
      if (resultFields) resultFields.style.display = "block";
      alert("Pesan terkirim. Terima kasih!");
      messageForm.reset();
    });
  }

  const navToggle = document.getElementById("navToggle");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const closeSidebar = document.getElementById("closeSidebar");
  function openSidebar() {
    if (mobileSidebar) mobileSidebar.classList.add("open");
    if (mobileOverlay) mobileOverlay.style.display = "block";
  }
  function closeSidebarFn() {
    if (mobileSidebar) mobileSidebar.classList.remove("open");
    if (mobileOverlay) mobileOverlay.style.display = "none";
  }
  if (navToggle) navToggle.addEventListener("click", openSidebar);
  if (closeSidebar) closeSidebar.addEventListener("click", closeSidebarFn);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeSidebarFn);
  document
    .querySelectorAll("#mobileSidebar a")
    .forEach((a) => a.addEventListener("click", closeSidebarFn));
});
