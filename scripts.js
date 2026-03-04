/**
 * Harvest Hub Tutorial — shared scripts
 * Copy buttons, accordions, smooth scroll, fade-in
 */

document.addEventListener("DOMContentLoaded", function () {
  initCopyButtons();
  initAccordions();
  initSmoothScroll();
  document.body.classList.add("loaded");
});

function initCopyButtons() {
  document.querySelectorAll(".code-block-wrapper").forEach(function (wrapper) {
    var pre = wrapper.querySelector("pre");
    var code = pre ? pre.querySelector("code") : null;
    if (!code) return;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy-button";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code");

    button.addEventListener("click", function () {
      var text = code.textContent;
      navigator.clipboard.writeText(text).then(
        function () {
          button.textContent = "Copied!";
          setTimeout(function () {
            button.textContent = "Copy";
          }, 2000);
        },
        function () {
          button.textContent = "Failed";
          setTimeout(function () {
            button.textContent = "Copy";
          }, 2000);
        }
      );
    });

    wrapper.appendChild(button);
  });
}

function initAccordions() {
  document.querySelectorAll(".accordion-header").forEach(function (header) {
    header.addEventListener("click", function () {
      var item = header.closest(".accordion-item");
      var content = header.nextElementSibling;
      if (!content || !content.classList.contains("accordion-content")) return;

      var isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

      document.querySelectorAll(".accordion-content").forEach(function (c) {
        c.style.maxHeight = null;
      });
      document.querySelectorAll(".accordion-item").forEach(function (i) {
        i.classList.remove("open");
      });

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        item.classList.add("open");
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var id = anchor.getAttribute("href");
    if (id === "#") return;
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
