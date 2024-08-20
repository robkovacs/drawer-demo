import "./oately.css";
import "./styles.css";

(() => {
  let smDrawerButton = document.querySelector(".button--open-sm");
  let mdDrawerButton = document.querySelector(".button--open-md");
  let lgDrawerButton = document.querySelector(".button--open-lg");
  let xlDrawerButton = document.querySelector(".button--open-xl");

  let backdrop = document.querySelector(".backdrop");
  let closeButton = document.querySelector(".close-button");
  let cancelButton = document.querySelector(".cancel-button");

  function openDrawer(size = "sm") {
    let pageBody = document.querySelector("html");
    let backdrop = document.querySelector(".backdrop");
    let drawer = document.querySelector(".drawer");
    let drawerFocusable = document.querySelectorAll(".drawer [tabindex]");

    pageBody.classList.add("has-open-drawer");
    backdrop.style.display = "block";
    backdrop.classList.add("showing");
    drawer.classList.remove(
      "drawer--sm",
      "drawer--md",
      "drawer--lg",
      "drawer--xl"
    );
    drawer.classList.add("drawer--" + size);
    drawer.style.transitionDuration = drawer.offsetWidth / 2.5 + "ms";
    drawerFocusable.forEach(function (el, index) {
      el.tabIndex = "0";
    });
    drawer.classList.add("open");
  }

  smDrawerButton.addEventListener("click", function (e) {
    e.preventDefault();
    openDrawer("sm");
  });

  mdDrawerButton.addEventListener("click", function (e) {
    e.preventDefault();
    openDrawer("md");
  });

  lgDrawerButton.addEventListener("click", function (e) {
    e.preventDefault();
    openDrawer("lg");
  });

  xlDrawerButton.addEventListener("click", function (e) {
    e.preventDefault();
    openDrawer("xl");
  });

  backdrop.addEventListener("click", function (e) {
    e.preventDefault();
    closeDrawer();
  });

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeDrawer();
  });

  cancelButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeDrawer();
  });

  document.body.addEventListener("keyup", function (e) {
    if (e.keyCode == 27 && document.querySelector(".drawer.open")) {
      e.preventDefault();
      closeDrawer();
    }
  });

  function closeDrawer() {
    let backdrop = document.querySelector(".backdrop");
    let drawer = document.querySelector(".drawer");
    let pageBody = document.querySelector("html");
    let drawerFocusable = document.querySelectorAll(".drawer [tabindex]");
    let drawerBody = document.querySelector(".drawer__body");
    let drawerCloseTime = parseInt(drawer.style.transitionDuration);

    drawerFocusable.forEach(function (el, index) {
      el.tabIndex = "-1";
    });

    drawer.classList.remove("open");

    setTimeout(function () {
      drawerBody.scrollTop = 0;
      backdrop.classList.remove("showing");
      backdrop.style.display = "none";
      pageBody.classList.remove("has-open-drawer");
    }, drawerCloseTime);
  }
})();
