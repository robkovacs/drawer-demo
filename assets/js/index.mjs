(() => {
    let smDrawerButton = document.querySelector(".button--open-sm");
    let mdDrawerButton = document.querySelector(".button--open-md");
    let lgDrawerButton = document.querySelector(".button--open-lg");
    let xlDrawerButton = document.querySelector(".button--open-xl");

    let closeButton = document.querySelector(".close-button");
    let cancelButton = document.querySelector(".cancel-button");

    function openDrawer(size = "sm") {
        let drawer = document.querySelector(".drawer");

        drawer.classList.remove(
            "drawer--sm",
            "drawer--md",
            "drawer--lg",
            "drawer--xl"
        );
        drawer.classList.add("drawer--" + size);
        drawer.showModal();
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

    closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        closeDrawer();
    });

    cancelButton.addEventListener("click", function (e) {
        e.preventDefault();
        closeDrawer();
    });

    document.querySelector("dialog").addEventListener("mousedown", (event) => {
        if (event.target === event.currentTarget) {
            event.currentTarget.scrollTop = 0;
            event.currentTarget.close();
        }
    });

    function closeDrawer() {
        let drawer = document.querySelector("dialog");
        drawer.scrollTop = 0;
        drawer.close();
    }
})();
