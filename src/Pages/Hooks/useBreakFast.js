import { useEffect, useState } from "react"

const useBreakFast = () => {
    const [breakFasts, setBreakFasts] = useState([]);

    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakFasts(data))
    }, [])
    return [breakFasts, setBreakFasts];
}
export default useBreakFast;