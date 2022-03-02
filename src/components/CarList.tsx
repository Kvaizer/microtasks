import React from 'react';

type Car = {
    manufacturer: string
    model: string
}
type carsType = {
    cars: Array<Car>
}

export function CarList(props: carsType) {
    return <ul>
            {props.cars.map((item: Car) => {
                    return <li>manufacturer: {item.manufacturer} --- model: {item.model}</li>
                })}
        </ul>
}