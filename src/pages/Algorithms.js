import MyWorks from "../assets/MyWorks";
import Algo from "../components/Algo";

export default function Algorithms() {
    const algos = MyWorks[1]
    console.log(algos)
    return(
        <div>
            {algos?.algorithms.map((algo, idx) => {
                return(
                    <Algo key={idx} {...algo}/>
                )
            })}
        </div>
    )
}