"use client";

import { useEffect } from "react";

type QuoteValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  details: string;
};

function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length >= 10;
}

function setStatus(form: HTMLFormElement, message: string, type: "success" | "error") {
  const status = form.querySelector<HTMLElement>(".form-status");
  if (!status) return;
  status.textContent = message;
  status.className = `form-status is-visible ${type}`;
}

function setServiceValue(value: string) {
  document.querySelectorAll<HTMLSelectElement>('select[name="service"]').forEach((select) => {
    select.value = value;
  });
}

export function SiteInteractions() {
  useEffect(() => {
    const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".nav");
    const navLinks = [...document.querySelectorAll<HTMLAnchorElement>(".nav-links a")];
    const quoteModal = document.getElementById("quoteModal");
    const modalClose = document.querySelector<HTMLButtonElement>(".modal-close");
    const openQuoteButtons = document.querySelectorAll<HTMLButtonElement>("[data-open-quote]");
    const compareCards = document.querySelectorAll<HTMLElement>(".compare-card");
    const forms = document.querySelectorAll<HTMLFormElement>(".quote-form");

    const closeMenu = () => {
      nav?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
      if (!nav || !menuToggle) return;
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    };

    const openModal = (service?: string) => {
      if (service) setServiceValue(service);
      quoteModal?.classList.add("is-open");
      quoteModal?.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      quoteModal?.classList.remove("is-open");
      quoteModal?.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    const setupCompare = (card: HTMLElement) => {
      const range = card.querySelector<HTMLInputElement>(".compare-range");
      const overlay = card.querySelector<HTMLElement>(".compare-overlay");
      const handle = card.querySelector<HTMLElement>(".compare-handle");
      if (!range || !overlay || !handle) return;

      const setCompare = (value: string) => {
        overlay.style.width = `${value}%`;
        handle.style.left = `${value}%`;
      };

      setCompare(range.value);
      range.addEventListener("input", () => setCompare(range.value));
    };

    const applyQueryService = () => {
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service");
      if (service) setServiceValue(service);
    };

    const submitQuote = (event: SubmitEvent) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const data = Object.fromEntries(new FormData(form).entries());
      const values: QuoteValues = {
        name: String(data.name || "").trim(),
        phone: String(data.phone || "").trim(),
        email: String(data.email || "").trim(),
        service: String(data.service || "").trim(),
        details: String(data.details || "").trim(),
      };

      if (!values.name || !values.phone || !values.email || !values.service || !values.details) {
        setStatus(form, "Merci de remplir tous les champs avant d'envoyer votre demande.", "error");
        return;
      }

      if (!isValidPhone(values.phone)) {
        setStatus(form, "Ajoutez un numéro de téléphone valide pour que nous puissions vous rappeler.", "error");
        return;
      }

      const lead = { ...values, createdAt: new Date().toISOString() };
      const savedLeads = JSON.parse(localStorage.getItem("entretien-jcg-leads") || "[]");
      savedLeads.push(lead);
      localStorage.setItem("entretien-jcg-leads", JSON.stringify(savedLeads));

      const subject = encodeURIComponent(`Demande de soumission - ${values.service}`);
      const body = encodeURIComponent(
        [
          `Nom: ${values.name}`,
          `Téléphone: ${values.phone}`,
          `Courriel: ${values.email}`,
          `Service: ${values.service}`,
          "",
          "Détails du projet:",
          values.details,
        ].join("\n"),
      );

      setStatus(
        form,
        "Votre demande est sauvegardée et un courriel prêt à envoyer va s'ouvrir.",
        "success",
      );
      window.location.href = `mailto:entretienjcg@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    };

    menuToggle?.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    openQuoteButtons.forEach((button) => {
      button.addEventListener("click", () => openModal(button.dataset.service));
    });
    modalClose?.addEventListener("click", closeModal);
    quoteModal?.addEventListener("click", (event) => {
      if (event.target === quoteModal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
        closeMenu();
      }
    });
    compareCards.forEach(setupCompare);
    forms.forEach((form) => form.addEventListener("submit", submitQuote));
    applyQueryService();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
