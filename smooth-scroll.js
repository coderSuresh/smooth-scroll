const smoothScroll = () => {
    if (history.state) {
        window.scrollTo(0, history.state.scrollY);
    }

    window.addEventListener("scroll", () => {
        history.replaceState({
            scrollY: window.scrollY,
        }, "");
    });
}

export default smoothScroll;