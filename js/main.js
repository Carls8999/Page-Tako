(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  var body = document.body;

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------------- Mobile menu ---------------- */
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");

  function setMenu(open) {
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.documentElement.style.overflow = open ? "hidden" : "";
  }
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });
    mobileMenu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") setMenu(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) setMenu(false);
    });
  }

  /* ---------------- Nav scrolled state ---------------- */
  var nav = document.getElementById("nav");
  function onScrollNav() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* ---------------- No-animation fallback ---------------- */
  if (!hasGsap || reduceMotion) {
    body.classList.add("is-loaded");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- Preloader ---------------- */
  var preloader = document.getElementById("preloader");
  var countEl = document.getElementById("preloaderCount");
  var countObj = { val: 0 };

  var intro = gsap.timeline({
    onComplete: function () {
      body.classList.add("is-loaded");
      body.classList.add("is-anim");
    }
  });

  intro.to(countObj, {
    val: 100,
    duration: 0.9,
    ease: "power2.inOut",
    onUpdate: function () {
      countEl.textContent = String(Math.round(countObj.val));
    }
  }, 0.15);

  intro.to(preloader, {
    yPercent: -100,
    duration: 0.7,
    ease: "expo.inOut"
  }, "+=0.1");

  /* ---------------- Hero entrance ---------------- */
  gsap.set([".hero .hero__pill", ".hero .hero__title", ".hero .hero__sub", ".hero .hero__trust", ".hero .hero__actions", ".hero .hero__metrics"], { opacity: 0, y: 26 });

  intro.to(".hero .hero__pill", { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.6");
  intro.to(".hero .hero__title", { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" }, "-=0.65");
  intro.to([".hero .hero__sub", ".hero .hero__trust", ".hero .hero__actions"], { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 }, "-=0.6");
  intro.to(".hero .hero__metrics", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.45");

  /* ---------------- Safety net: never trap content ---------------- */
  window.setTimeout(function () {
    if (!body.classList.contains("is-loaded")) {
      body.classList.add("is-loaded");
      body.classList.add("is-anim");
      gsap.set([".hero .hero__pill", ".hero .hero__title", ".hero .hero__sub", ".hero .hero__trust", ".hero .hero__actions", ".hero .hero__metrics"], { opacity: 1, y: 0, clearProps: "all" });
      gsap.set(".reveal", { opacity: 1, y: 0, clearProps: "all" });
      ScrollTrigger.refresh();
    }
  }, 4000);

  /* ---------------- Scroll progress ---------------- */
  var progressBar = document.getElementById("progressBar");
  if (progressBar) {
    gsap.to(progressBar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 }
    });
  }

  /* ---------------- Scroll reveals ---------------- */
  var revealEls = gsap.utils.toArray(".reveal");
  revealEls.forEach(function (el) {
    gsap.from(el, {
      opacity: 0,
      y: 26,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" }
    });
  });

  /* Testimonials: staggered grid reveal */
  var tGrid = document.querySelector(".tgrid");
  if (tGrid) {
    gsap.from(tGrid.children, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: { trigger: tGrid, start: "top 85%" }
    });
  }

  /* Pricing: staggered grid reveal */
  var priceGrid = document.querySelector(".price-grid");
  if (priceGrid) {
    gsap.from(priceGrid.children, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: priceGrid, start: "top 82%" }
    });
  }

  /* Process: staggered timeline reveal */
  var processGrid = document.querySelector(".process");
  if (processGrid) {
    gsap.from(processGrid.children, {
      opacity: 0,
      y: 40,
      scale: 0.96,
      duration: 0.8,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: { trigger: processGrid, start: "top 82%" }
    });
  }

  /* ---------------- Contact form ---------------- */
  var form = document.getElementById("contactForm");
  if (form) {
    var statusEl = document.getElementById("formStatus");
    var submitBtn = document.getElementById("formSubmit");

    var fields = [
      { input: document.getElementById("fName"), err: "El nombre es obligatorio." },
      { input: document.getElementById("fEmail"), err: "Ingresa un email válido." },
      { input: document.getElementById("fType"), err: "Selecciona el tipo de proyecto." },
      { input: document.getElementById("fBudget"), err: "Selecciona un rango de presupuesto." },
      { input: document.getElementById("fMessage"), err: "Descríbete brevemente." }
    ];
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(field, message) {
      var wrap = field.input.closest(".field");
      var errEl = wrap.querySelector("[data-error-for]");
      var invalid = !!message;
      wrap.classList.toggle("field--invalid", invalid);
      field.input.setAttribute("aria-invalid", invalid ? "true" : "false");
      if (errEl) errEl.textContent = message;
    }

    function validateField(field) {
      var v = (field.input.value || "").trim();
      var message = "";
      if (!v) message = field.err;
      else if (field.input === fields[1].input && !emailRe.test(v)) message = "El email no parece válido.";
      setError(field, message);
      return !message;
    }

    fields.forEach(function (f) {
      f.input.addEventListener("blur", function () { validateField(f); });
      f.input.addEventListener("input", function () {
        if (f.input.closest(".field").classList.contains("field--invalid")) validateField(f);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = fields.every(validateField);
      if (!ok) {
        statusEl.textContent = "Completa los campos señalados.";
        statusEl.className = "form__status is-err";
        var firstBad = form.querySelector(".field--invalid .field__input");
        if (firstBad) firstBad.focus();
        return;
      }
      form.classList.add("is-sending");
      submitBtn.disabled = true;
      statusEl.textContent = "Enviando consulta…";
      statusEl.className = "form__status";
      window.setTimeout(function () {
        form.classList.remove("is-sending");
        submitBtn.disabled = false;
        statusEl.textContent = "Mensaje enviado — respondo en 24 horas.";
        statusEl.className = "form__status is-ok";
        form.reset();
        fields.forEach(function (f) {
          f.input.closest(".field").classList.remove("field--invalid");
          f.input.removeAttribute("aria-invalid");
        });
      }, 1200);
    });
  }

  /* ---------------- Cleanup scroll triggers on reduce-motion toggle ---------------- */
  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  function onMotionChange(m) {
    if (m.matches) {
      ScrollTrigger.getAll().forEach(function (t) { t.kill(); });
    }
  }
  motionQuery.addEventListener("change", onMotionChange);
  onMotionChange(motionQuery);

  /* ---------------- FAQ accordion animation ---------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var answer = item.querySelector(".faq-item__a");
    if (!answer) return;

    item.addEventListener("toggle", function () {
      if (item.open) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
      } else {
        answer.style.maxHeight = "0";
        answer.style.opacity = "0";
      }
    });

    /* Set initial state for open items */
    if (item.open) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = "1";
    } else {
      answer.style.maxHeight = "0";
      answer.style.opacity = "0";
    }

    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease";
  });
})();
