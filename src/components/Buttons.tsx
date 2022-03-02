import {FilterValutaType} from '../App';

export type ButtonsNameType = {
    names: Array<FilterValutaType>
    changeFilter: (value: FilterValutaType) => void
}


export function SomeButton(props: ButtonsNameType) {
    return <div>
        {props.names.map((item: FilterValutaType) => <button onClick={() => props.changeFilter(item)}>{item}</button>)}
    </div>
}