import React, { useEffect, useRef, useState } from 'react'

const CounterUp = ({
    end = 100,
    duration = 3000,
    suffix = ""
}) => {

    const [count, setCount] = useState(0)
    const [startCount, setStartCount] = useState(false)

    const countRef = useRef(null)

    // Scroll section detect
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true)
                }
            },
            {
                threshold: 0.5
            }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current)
            }
        }
    }, [])

    // Counter animation
    useEffect(() => {

        if (!startCount) return

        let start = 0

        const incrementTime = duration / end

        const counter = setInterval(() => {

            start += 1
            setCount(start)

            if (start === end) {
                clearInterval(counter)
            }

        }, incrementTime)

        return () => clearInterval(counter)

    }, [startCount, end, duration])

    return (
        <>
            <span ref={countRef}>
                {count}{suffix}
            </span>
        </>
    )
}

export default CounterUp