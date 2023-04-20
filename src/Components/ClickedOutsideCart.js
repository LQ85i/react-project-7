import React, { useRef, useEffect } from "react";


function useOutsideAlerter(ref, showCart, setShowCart) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (event.target.parentNode !== null) {
                    if (showCart === "" && event.target.parentNode.id !== "toggle-cart"&& event.target.parentNode.className !== "container-count") {
                        setShowCart("hidden");
                    };
                }
            };
        };
        document.addEventListener("click", handleClickOutside);
        return () => {

            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, showCart, setShowCart]);
}

export default function OutsideAlerter(props) {
    const { showCart, setShowCart } = props;
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, showCart, setShowCart);

    return <div ref={wrapperRef}>{props.children}</div>;
}