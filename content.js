(function () {
  // Avoid adding the popup twice
  if (document.getElementById("steam-open-in-app-popup")) return;

  // Only run if it's a Steam domain (extra safety)
  const host = window.location.hostname;
  if (
    !host.endsWith("steampowered.com") &&
    !host.endsWith("steamcommunity.com")
  ) {
    return;
  }

  const popup = document.createElement("div");
  popup.id = "steam-open-in-app-popup";

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Open in Steam app";

  button.addEventListener("click", () => {
    const currentUrl = window.location.href;
    const steamUrl = "steam://openurl/" + currentUrl;

    // Try to trigger Steam via custom protocol
    window.location.href = steamUrl;
  });

  popup.appendChild(button);
  document.body.appendChild(popup);
})();
