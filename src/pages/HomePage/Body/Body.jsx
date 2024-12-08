import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

const Body = () => {
    return (
        <>
            <main style={{display: "flex", flexDirection: "column", height: 100vh}}>
                <Section1 />
                <Section2 />
                <Section3 />
            </main>
        </>
    )
}

export default Body
