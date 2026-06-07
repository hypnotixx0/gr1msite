document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    accordion.querySelectorAll(".faq-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const card = trigger.closest(".faq-card");
            const isOpen = card.classList.contains("open");

            accordion.querySelectorAll(".faq-card").forEach((item) => {
                item.classList.remove("open");
                item.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                card.classList.add("open");
                trigger.setAttribute("aria-expanded", "true");
            }
        });
    });
});
