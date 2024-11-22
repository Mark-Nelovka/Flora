import s from "./Berry.module.css";
interface IBerryList {
    title: string;
    order: number;
    kwitne: number;
    Rc: number;
    workers: number;
    pinets: number;
}

type forOne = number | string;

function CalcBoxes(order: number, pinets: number, workers: number, point: string, kwinte: number, rc:number): number | string {
    let rcForOne: forOne = 0;
    let localForOne: forOne = 0;

    switch (point) {
        case "flora":
            return Math.ceil((order - kwinte)/pinets)
        case "kwitne":
            return Math.ceil(kwinte/pinets)
        case "rc":
            // if(rc) {
                return Math.ceil(rc/pinets)
            // }
            return 0; 
        case "local":
            if(rc) {
                return Math.ceil((order - rc)/pinets);
            }
            return Math.ceil(order/pinets);
        case "oneWorker":
            if(rc) {
                if(Math.ceil(rc/pinets) < workers) {
                    rcForOne = Math.ceil(rc/pinets);
                }
                if(Math.ceil((order - rc)/pinets) < workers) {
                    localForOne = Math.ceil(rc/pinets);
                }
                if(Math.ceil(rc/pinets) === workers) {
                    rcForOne = 1;
                }
                if(Math.ceil((order - rc)/pinets) === workers) {
                    localForOne = 1;
                }
                if(Math.ceil(rc/pinets) > workers) {
                    const calcRcBox = Math.ceil(rc/pinets);
                    const all = Math.floor(calcRcBox / workers);
                    const findOneWorker = all * workers;
                    const difference = calcRcBox - findOneWorker
                
                    rcForOne = `${all},${difference}`;
                }
                if(Math.ceil((order - rc)/pinets) > workers) {
                    const calclocalBox = Math.ceil((order - rc)/pinets);
                    const allLocl = Math.floor(calclocalBox / workers);
                    const findOneWorkerLocl = allLocl * workers;
                    const differenceLocl = calclocalBox - findOneWorkerLocl;

                    localForOne = `${allLocl},${differenceLocl}`;
                }
            }
            if(Math.ceil(order/pinets) < workers) {
                localForOne = Math.ceil(order/pinets);
            }
            if(Math.ceil(order/pinets) === workers) {
                localForOne = 1;
            }
            if(Math.ceil(order/pinets) > workers) {
                const calclocalBox = Math.ceil(order/pinets);
                const allLocl = Math.floor(calclocalBox / workers);
                const findOneWorkerLocl = allLocl * workers;
                const differenceLocl = calclocalBox - findOneWorkerLocl;

                localForOne = `${allLocl},${differenceLocl}`;
            }
            return `${rcForOne}:${localForOne}`;
        default:
            break;
    }
    return 2;
}

export default function BerryList(
    {title, order, kwitne, Rc, workers, pinets}
    : IBerryList) {
    return (
        <div className="container">
            <ul>
                <li className={s.title}>{title}</li>
                <li className={s.item}>
                    <p>Order: {order}</p>
                    <p>F: {CalcBoxes(order, pinets, workers, "flora", kwitne, Rc )}</p>
                    <p>K: {CalcBoxes(order, pinets, workers, "kwitne", kwitne, Rc )}</p>
                    <p>RC: {CalcBoxes(order, pinets, workers, "rc", kwitne, Rc )}</p>
                    <p>Lok: {CalcBoxes(order, pinets, workers, "local", kwitne, Rc )}</p>
                    <p>Ф: {workers}</p>
                    <p>One: {CalcBoxes(order, pinets, workers, "oneWorker", kwitne, Rc )}</p>
                    <p>Pinets: {pinets}</p>
                </li>
            </ul>
        </div>
    )
};
