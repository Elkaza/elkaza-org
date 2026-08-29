const siteInteractivityScript = String.raw`
(function () {
  var routePairs = {
    "/": "/en",
    "/leistungen": "/en/services",
    "/leistungen/networking": "/en/services/networking",
    "/leistungen/security-baseline": "/en/services/security-baseline",
    "/leistungen/automation": "/en/services/automation",
    "/referenzen": "/en/case-studies",
    "/ueber-uns": "/en/about",
    "/kontakt": "/en/contact",
    "/impressum": "/en/imprint",
    "/datenschutz": "/en/privacy",
    "/referenzen/netzwerk-modernisierung-handelsunternehmen": "/en/case-studies/network-modernization-retail",
    "/referenzen/security-baseline-dienstleister": "/en/case-studies/security-baseline-it-service",
    "/referenzen/zero-trust-finanzberatung": "/en/case-studies/zero-trust-fintech",
    "/referenzen/ransomware-resilience-produktion": "/en/case-studies/ransomware-recovery-manufacturing",
    "/referenzen/m365-sicherheit-compliance": "/en/case-studies/m365-security-audit"
  };

  var reversePairs = {};
  Object.keys(routePairs).forEach(function (key) {
    reversePairs[routePairs[key]] = key;
  });

  function normalizePath(value) {
    if (!value) return "/";
    var path = value.split("?")[0].split("#")[0].replace(/\/+$/, "");
    return path || "/";
  }

  function withTrailingSlash(path) {
    return path === "/" ? "/" : path + "/";
  }

  function currentPath() {
    return normalizePath(window.location.pathname);
  }

  function mapLanguagePath(path) {
    if (routePairs[path]) return routePairs[path];
    if (reversePairs[path]) return reversePairs[path];
    if (path.indexOf("/referenzen/") === 0) {
      return "/en/case-studies" + path.slice("/referenzen".length);
    }
    if (path.indexOf("/en/case-studies/") === 0) {
      return "/referenzen" + path.slice("/en/case-studies".length);
    }
    return path.indexOf("/en") === 0 ? "/" : "/en";
  }

  function updateLocale() {
    var path = currentPath();
    var isEnglish = path === "/en" || path.indexOf("/en/") === 0;
    document.documentElement.lang = isEnglish ? "en" : "de-AT";
    document.documentElement.setAttribute("data-locale", isEnglish ? "en" : "de");

    var target = withTrailingSlash(mapLanguagePath(path)) + window.location.search + window.location.hash;
    document.querySelectorAll("[data-language-switch]").forEach(function (link) {
      link.setAttribute("href", target);
    });
  }

  function updateActiveNavigation() {
    var path = currentPath();
    document.querySelectorAll("[data-nav-href]").forEach(function (link) {
      var href = normalizePath(link.getAttribute("data-nav-href"));
      var active = path === href || (href !== "/" && path.indexOf(href + "/") === 0);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function updateThemeButton() {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    var isEnglish = document.documentElement.lang === "en";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      var label = isEnglish
        ? (isDark ? "Switch to light mode" : "Switch to dark mode")
        : (isDark ? "Zum hellen Design wechseln" : "Zum dunklen Design wechseln");
      var title = isEnglish
        ? (isDark ? "Light mode" : "Dark mode")
        : (isDark ? "Helles Design" : "Dunkles Design");
      button.setAttribute("aria-label", label);
      button.setAttribute("title", title);
      var moon = button.querySelector('[data-theme-icon="moon"]');
      var sun = button.querySelector('[data-theme-icon="sun"]');
      if (moon) moon.classList.toggle("hidden", isDark);
      if (sun) sun.classList.toggle("hidden", !isDark);
    });
  }

  function initThemeToggle() {
    updateThemeButton();
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        var nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        try {
          window.localStorage.setItem("theme", nextTheme);
        } catch (error) {}
        updateThemeButton();
      });
    });
  }

  function initMobileMenu() {
    var button = document.querySelector("[data-mobile-menu-toggle]");
    var menu = document.getElementById("mobile-navigation");
    if (!button || !menu) return;

    function menuLabel(open) {
      var isEnglish = document.documentElement.lang === "en";
      if (isEnglish) return open ? "Close menu" : "Open menu";
      return open ? "Menü schließen" : "Menü öffnen";
    }

    function setOpen(open, restoreFocus) {
      menu.hidden = !open;
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.setAttribute("aria-label", menuLabel(open));
      document.body.style.overflow = open ? "hidden" : "";
      var openIcon = button.querySelector('[data-mobile-menu-icon="open"]');
      var closeIcon = button.querySelector('[data-mobile-menu-icon="close"]');
      if (openIcon) openIcon.classList.toggle("hidden", open);
      if (closeIcon) closeIcon.classList.toggle("hidden", !open);
      if (restoreFocus) button.focus();
    }

    button.addEventListener("click", function () {
      setOpen(menu.hidden);
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        setOpen(false, true);
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768 && !menu.hidden) {
        setOpen(false);
      }
    });
  }

  function initBackToTop() {
    var button = document.querySelector("[data-back-to-top]");
    if (!button) return;

    var isEnglish = document.documentElement.lang === "en";
    button.setAttribute("aria-label", isEnglish ? "Scroll to top" : "Nach oben scrollen");
    button.setAttribute("title", isEnglish ? "Back to top" : "Nach oben");

    function updateVisibility() {
      button.hidden = window.scrollY <= 300;
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function init() {
    updateLocale();
    updateActiveNavigation();
    initThemeToggle();
    initMobileMenu();
    initBackToTop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
`;

export default function SiteInteractivity() {
  return <script dangerouslySetInnerHTML={{ __html: siteInteractivityScript }} />;
}
