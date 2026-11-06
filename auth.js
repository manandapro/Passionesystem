(() => {
  const accounts = new Map([
    ["passione", "loyalordie143517"],
    ["Admin", "cl294029_passione"],
    ["Customer", "12345678"]
  ]);
  const pageName = location.pathname.split("/").pop();

  if (pageName !== "login.html" && !accounts.has(sessionStorage.getItem("passione-demo-user"))) {
    const destination = pageName === "mission.html" || pageName === "chat.html"
      ? `${pageName}${location.search}${location.hash}`
      : `index.html${location.hash}`;
    sessionStorage.setItem("passione-login-return", destination);
    location.replace("login.html");
    return;
  }

  const activeUser = sessionStorage.getItem("passione-demo-user");
  if (pageName !== "login.html") {
    document.documentElement.dataset.access = activeUser === "Customer" ? "customer" : "staff";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#login-form");
    if (form) {
      form.addEventListener("submit", event => {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const error = document.querySelector("#login-error");

        if (accounts.get(username) !== password) {
          error.hidden = false;
          document.querySelector("#password").value = "";
          document.querySelector("#password").focus();
          return;
        }

        sessionStorage.setItem("passione-demo-user", username);
        const requested = sessionStorage.getItem("passione-login-return") || "";
        sessionStorage.removeItem("passione-login-return");
        const safeDestination = /^(?:index|mission|chat)\.html(?:\?[^#]*)?(?:#.*)?$/.test(requested)
          ? requested
          : "index.html";
        location.replace(safeDestination);
      });
    }

    for (const link of document.querySelectorAll("[data-sign-out]")) {
      link.addEventListener("click", () => {
        sessionStorage.removeItem("passione-demo-user");
        sessionStorage.removeItem("passione-login-return");
      });
    }
  });
})();
