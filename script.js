// Paste your Google Apps Script Web App URL here:
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

https://script.google.com/macros/s/AKfycby6L2uafgndPgwCC3-UYdQ8ncp7utwlfkK2eSfP8JCijQ7snccFo4LHrUDg4nGWlfU/exec
document.getElementById("clubForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const successBox = document.getElementById("success");
  const errorBox = document.getElementById("error");
  successBox.classList.add("hidden");
  errorBox.classList.add("hidden");

  if (GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
    errorBox.textContent = "Setup needed: Please paste your Google Apps Script Web App URL in script.js.";
    errorBox.classList.remove("hidden");
    return;
  }

  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  data.activities = [...document.querySelectorAll('input[name="activities"]:checked')].map(x=>x.value);
  data.acknowledgement = form.querySelector('input[name="acknowledgement"]').checked;

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {"Content-Type": "text/plain;charset=utf-8"},
      body: JSON.stringify(data)
    });

    successBox.innerHTML = "🎉 Thank you! Your registration has been submitted. Please check your email for confirmation.";
    successBox.classList.remove("hidden");
    form.reset();
    window.scrollTo({top: successBox.offsetTop - 80, behavior:"smooth"});

  } catch (err) {
    errorBox.textContent = "Something went wrong. Please try again or contact Cape Breton Laughter Club.";
    errorBox.classList.remove("hidden");
  }
});