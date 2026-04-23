"use client";

import { useEffect } from "react";

export function HomeInteractions() {
  useEffect(() => {
    const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".nav");
    const navLinks = [...document.querySelectorAll<HTMLAnchorElement>(".nav-links a")];
    const openQuoteButtons = document.querySelectorAll<HTMLButtonElement>("[data-open-quote]");
    const quoteModal = document.getElementById("quoteModal");
    const modalClose = document.querySelector<HTMLButtonElement>(".modal-close");
    const serviceSelect = document.getElementById("service") as HTMLSelectElement | null;
    const quoteForm = document.getElementById("quoteForm") as HTMLFormElement | null;
    const formStatus = document.getElementById("formStatus");
    const compareRange = document.getElementById("compareRange") as HTMLInputElement | null;
    const compareOverlay = document.getElementById("compareOverlay");
    const compareHandle = document.getElementById("compareHandle");

    const setCompare = (value: string) => {
      if (!compareOverlay || !compareHandle) return;
      compareOverlay.style.width = value + "%";
      compareHandle.style.left = value + "%";
    };

    if (compareRange) {
      setCompare(compareRange.value);
      compareRange.addEventListener("input", (event) => {
        setCompare((event.target as HTMLInputElement).value);
      });
    }

    const closeMenu = () => {
      nav?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
      if (!nav || !menuToggle) return;
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    };

    menuToggle?.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || ""))
      .filter((section): section is HTMLElement => Boolean(section));

    const activateCurrentSection = () => {
      const offset = window.scrollY + 140;
      let currentId = sections[0]?.id;

      sections.forEach((section) => {
        if (offset >= section.offsetTop) {
          currentId = section.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
      });
    };

    window.addEventListener("scroll", activateCurrentSection, { passive: true });
    activateCurrentSection();

    const openModal = () => {
      quoteModal?.classList.add("is-open");
      quoteModal?.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      quoteModal?.classList.remove("is-open");
      quoteModal?.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    openQuoteButtons.forEach((button) => button.addEventListener("click", openModal));
    modalClose?.addEventListener("click", closeModal);

    const modalBackgroundClose = (event: MouseEvent) => {
      if (event.target === quoteModal) closeModal();
    };
    quoteModal?.addEventListener("click", modalBackgroundClose);

    const keyClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        closeMenu();
      }
    };
    document.addEventListener("keydown", keyClose);

    document.querySelectorAll<HTMLElement>("[data-service]").forEach((link) => {
      link.addEventListener("click", () => {
        if (serviceSelect) serviceSelect.value = link.dataset.service || "";
      });
    });

    document.querySelectorAll<HTMLButtonElement>("[data-pick-service]").forEach((button) => {
      button.addEventListener("click", () => {
        if (serviceSelect) serviceSelect.value = button.dataset.pickService || "";
        closeModal();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => document.getElementById("name")?.focus(), 250);
      });
    });

    const showStatus = (message: string, type: "success" | "error") => {
      if (!formStatus) return;
      formStatus.textContent = message;
      formStatus.className = "form-status is-visible " + type;
    };

    const isValidPhone = (value: string) => value.replace(/\D/g, "").length >= 10;

    const submitQuote = (event: SubmitEvent) => {
      event.preventDefault();
      if (!quoteForm) return;

      const data = Object.fromEntries(new FormData(quoteForm).entries());
      const values = {
        name: String(data.name || "").trim(),
        phone: String(data.phone || "").trim(),
        email: String(data.email || "").trim(),
        service: String(data.service || "").trim(),
        details: String(data.details || "").trim(),
      };

      if (!values.name || !values.phone || !values.email || !values.service || !values.details) {
        showStatus("Merci de remplir tous les champs avant d'envoyer votre demande.", "error");
        return;
      }

      if (!isValidPhone(values.phone)) {
        showStatus("Ajoutez un numéro de téléphone valide pour que nous puissions vous rappeler.", "error");
        return;
      }

      const lead = { ...values, createdAt: new Date().toISOString() };
      const savedLeads = JSON.parse(localStorage.getItem("entretien-jcg-leads") || "[]");
      savedLeads.push(lead);
      localStorage.setItem("entretien-jcg-leads", JSON.stringify(savedLeads));

      const subject = encodeURIComponent("Demande de soumission - " + values.service);
      const body = encodeURIComponent([
        "Nom: " + values.name,
        "Téléphone: " + values.phone,
        "Courriel: " + values.email,
        "Service: " + values.service,
        "",
        "Détails du projet:",
        values.details,
      ].join("\n"));

      showStatus(
        "Votre demande a été enregistrée et un courriel prêt à envoyer va s'ouvrir. Si rien ne se passe, vos informations restent sauvegardées dans ce navigateur.",
        "success",
      );

      window.location.href = "mailto:entretienjcg@gmail.com?subject=" + subject + "&body=" + body;
      quoteForm.reset();
    };

    quoteForm?.addEventListener("submit", submitQuote);

    return () => {
      menuToggle?.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      window.removeEventListener("scroll", activateCurrentSection);
      openQuoteButtons.forEach((button) => button.removeEventListener("click", openModal));
      modalClose?.removeEventListener("click", closeModal);
      quoteModal?.removeEventListener("click", modalBackgroundClose);
      document.removeEventListener("keydown", keyClose);
      quoteForm?.removeEventListener("submit", submitQuote);
    };
  }, []);

  return null;
}
