import {CompB} from "./CompB";


export default function CompA(props) {
    return <p>{props.b}
        <CompB b={props.b+100}> </CompB>
    </p>
}
    