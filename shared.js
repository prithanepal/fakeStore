function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-count-badge");
  if (badge) {
    badge.style.display = totalItems > 0 ? "flex" : "none";
    badge.textContent = totalItems;
  }
}

function showUserGreeting() {
  const username = localStorage.getItem("currentUser");
  if (username) {
    const greeting = document.getElementById("user-greeting");
    const logout = document.getElementById("logout-btn");
    if (greeting && logout) {
      greeting.textContent = `Welcome, ${username}`;
      greeting.classList.remove("hidden");
      logout.classList.remove("hidden");
    }
  }
}

function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("currentUser");
  window.location.href = "auth.html";
}
