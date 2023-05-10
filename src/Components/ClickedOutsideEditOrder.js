import React, { useRef, useEffect } from "react";


function useOutsideAlerter(ref, showEditOrder, setShowEditOrder) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (event.target.parentNode !== null) {
                    if(event.target.className !== "button-edit-order"){
                        setShowEditOrder(false);
                    }
                }
            };
        };
        document.addEventListener("click", handleClickOutside);
        return () => {

            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, showEditOrder, setShowEditOrder]);
}

export default function OutsideAlerterEditOrder(props) {
    const { showEditOrder, setShowEditOrder } = props;
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, showEditOrder, setShowEditOrder);

    return <div ref={wrapperRef}>{props.children}</div>;
}