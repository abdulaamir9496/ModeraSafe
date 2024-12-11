import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

const Body = () => {
    return (
        <>
            <div className="flex flex-row h-screen">
                <Section1 />
                <Section2 />
                <Section3 />
            </div>

        </>
    )
}

export default Body
