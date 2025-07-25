  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  function closeMenu() {
    mobileMenu.classList.add("hidden");
  }

document.querySelectorAll(".card").forEach((card) => {
        const spotlight = card.querySelector(".spotlight");
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(96,165,250,0.2), transparent 80%)`;
        });
        card.addEventListener("mouseleave", () => {
          spotlight.style.background = `transparent`;
        });
      });
