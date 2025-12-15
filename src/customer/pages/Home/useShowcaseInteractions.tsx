import { useEffect } from "react";

const useShowcaseInteractions = () => {
  useEffect(() => {
    /* -------------------------------
       Scroll Reveal Observer
    -------------------------------- */
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const revealElements =
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    /* -------------------------------
       Navbar Glass Effect
    -------------------------------- */
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "border-zinc-800");
        navbar.classList.replace("bg-[#030304]/70", "bg-[#030304]/90");
      } else {
        navbar.classList.remove("shadow-lg", "border-zinc-800");
        navbar.classList.replace("bg-[#030304]/90", "bg-[#030304]/70");
      }
    };

    window.addEventListener("scroll", handleScroll);

    /* -------------------------------
       3D Tilt Effect
    -------------------------------- */
    const tiltCards = document.querySelectorAll<HTMLElement>("[data-tilt]");

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.04, 1.04, 1.04)
      `;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    };

    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    /* -------------------------------
       Cleanup (VERY IMPORTANT)
    -------------------------------- */
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);

      tiltCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
};

export default useShowcaseInteractions;
