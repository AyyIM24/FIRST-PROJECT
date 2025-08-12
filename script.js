// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
  
    sidebar.classList.toggle("active");
    main.classList.toggle("shifted");
  }
  
  // Show only the selected section
  function showSection(id) {
    const sections = document.querySelectorAll("main, section");
    sections.forEach(section => {
      section.style.display = "none";
    });
  
    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
    }
  }
  
  // Handle nav link clicks
  document.addEventListener("DOMContentLoaded", () => {
    // Default view
    showSection("main");
  
    // Nav link handling
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const id = link.getAttribute("href").substring(1);
        showSection(id);
  
        // Also close the sidebar if open
        document.getElementById("sidebar").classList.remove("active");
        document.getElementById("main").classList.remove("shifted");
      });
    });
  
    // Add to cart handling (demo only)
    const cartSection = document.getElementById("cart");
    const cartList = document.createElement("ul");
    cartSection.appendChild(cartList);
    let cartItems = [];
  
    document.querySelectorAll(".product-card button").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".product-card");
        const name = card.querySelector("h2").textContent;
        const price = card.querySelector("p").textContent;
        cartItems.push({ name, price });
        renderCart();
      });
    });
  
    function renderCart() {
      cartList.innerHTML = "";
      if (cartItems.length === 0) {
        cartList.innerHTML = "<li>No items in cart.</li>";
        return;
      }
  
      cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        cartList.appendChild(li);
      });
    }
  });
  
  // Category filter
  function filterProducts(category) {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
      if (card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  