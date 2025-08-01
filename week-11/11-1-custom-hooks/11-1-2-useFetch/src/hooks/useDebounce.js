// simple nodejs code

/*
let currentClock;
let n = 0;
function searchBackend() {
    console.log("request sent to backend");
    console.log(n)
    // fetch()
}

function debounceSearchBackend(){
    // start a clock for 30ms
    clearTimeout(currentClock);
    n++;
    currentClock = setTimeout(searchBackend, 30);
}

debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();*/




// useDebounce Hook
import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}