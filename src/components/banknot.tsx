export type MoneyPropsType = {
    banknots: string
    value: number
    number: string
}

export type BanknotsProps = {
    banknots: Array<MoneyPropsType>
}

export function Banknots(props: BanknotsProps) {
    return <ul>
        {props.banknots.map((item: MoneyPropsType) => <li>{item.banknots}--{item.value}--{item.number}</li>)}
    </ul>
}