import React, { useRef, useEffect } from "react";


function useOutsideAlerter(ref, showCart, setShowCart) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (event.target.parentNode !== null) {
                    if (
                        showCart === "" 
                        && event.target.parentNode.id !== "toggle-cart"
                        && event.target.parentNode.className !== "container-count"
                        && event.target.className !== "add-to-cart"
                        && !event.target.className.includes("delete-item")
                        && !event.target.parentNode.className.includes("delete-item")) {
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

export default function OutsideAlerterCart(props) {
    const { showCart, setShowCart } = props;
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, showCart, setShowCart);

    return <div ref={wrapperRef}>{props.children}</div>;
}