import { useState , useEffect } from "react";

const useDebounce = (value , delay) => {
    const [debounceValue , setDebounceValue] = useState(value);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);


        return () => {
            clearTimeout(timerId);
        }
    } , [value , delay]);
    console.log("Returning  " + debounceValue);
    return debounceValue;
}
export default useDebounce;
