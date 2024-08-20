(() => {
    let openDrawerButton = document.querySelector(".button--drawer-config");

    let closeButton = document.querySelector(".close-button");
    let footerButtons = document.querySelectorAll(".drawer__footer button");

    function openDrawer(size = "sm", showClose = true, actions = 2) {
        let drawer = document.querySelector(".drawer");
        let closeButton = document.querySelector(".close-button");
        let secondaryButton = document.querySelector(".button--secondary");
        let drawerFooter = document.querySelector(".drawer__footer");

        drawer.classList.remove(
            "drawer--sm",
            "drawer--md",
            "drawer--lg",
            "drawer--xl"
        );

        drawer.classList.add("drawer--" + size);

        closeButton.style.display = "";
        secondaryButton.style.display = "";
        drawerFooter.style.display = "";

        if (!showClose) {
            closeButton.style.display = "none";
        }

        if (actions == 1) {
            secondaryButton.style.display = "none";
        } else if (actions == 0) {
            drawerFooter.style.display = "none";
        }

        drawer.showModal();
    }

    openDrawerButton.addEventListener("click", (e) => {
        e.preventDefault();
        let size = document.querySelector("#drawer-config--size").value;
        let showClose = document.querySelector(
            "#drawer-config--showClose"
        ).checked;
        let actions = document.querySelector("#drawer-config--actions").value;

        openDrawer(size, showClose, actions);
    });

    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        closeDrawer();
    });

    footerButtons.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            closeDrawer();
        });
    });

    document.querySelector("dialog").addEventListener("mousedown", (e) => {
        // Close drawer on click/tap outside of drawer
        if (e.target === e.currentTarget) {
            e.currentTarget.scrollTop = 0;
            e.currentTarget.close();
        }
    });

    function closeDrawer() {
        let drawer = document.querySelector(".drawer");
        drawer.scrollTop = 0;
        drawer.close();
    }

    let scrollEvent;
    let drawer = document.querySelector(".drawer");
    let drawerContents = document.querySelector(".drawer__contents");
    drawer.addEventListener("scroll", (e) => {
        console.log('scrolling');
           
        if (scrollEvent) {
            window.cancelAnimationFrame(scrollEvent);
            e.target.classList.remove("past-top", "at-bottom");
        }

        /* throttling: requestAnimationFrame = max every ~16ms */
        scrollEvent = window.requestAnimationFrame(() => {
            let scrollPosition = e.target.scrollTop,
                containerHeight = e.target.offsetHeight,
                contentsHeight = drawerContents.offsetHeight;
            console.log(scrollPosition, containerHeight);
            
            if (scrollPosition > 0) {
                e.target.classList.add("past-top");
            }

            if (scrollPosition >= contentsHeight - containerHeight) {
                e.target.classList.add("at-bottom");
            }
        });
    }, false);
})();
