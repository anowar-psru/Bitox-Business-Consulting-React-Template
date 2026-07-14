import CounterUp from "../../Hooks/Counterup"
import Container from "./Container"

const FactData = [
    {
        number: 30,
        icon: "K",
        title: "customers",
        text: "Happy customers we have world-wide."
    },
    {
        number: 310,
        icon: "+",
        title: "Growth-focused",
        text: "Growth-focused innovative solutions"
    }
]
const Facts = () => {
    return (
        <>
            <Container>
                <div className="flex flex-col sm:flex-row gap-5 pt-20 lg:pt-30">
                    {
                        FactData.map((data, index) => (
                            <div key={index} className="w-72.5 border-2 border-white rounded-[10px] py-5">
                                <div className="text-primary text-[70px] leading-14.5 font-medium flex items-center px-6.25">
                                    <CounterUp end={data.number}/>
                                    <span>{data.icon}</span>
                                </div>
                                <h3 className="text-primary text-xl font-bold uppercase px-6.25 pt-2.5 pb-5">{data.title}</h3>
                                <p className="text-primary text-base font-medium leading-6 border-t-2 border-t-white px-6.25 pt-5">{data.text}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}

export default Facts