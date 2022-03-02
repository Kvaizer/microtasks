import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {CarList} from './components/CarList';
import {SomeButton} from './components/Buttons';
import {Banknots, MoneyPropsType} from './components/banknot';

export type FilterValutaType = 'all' | 'RUBLS' | 'dollars';

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

function App () {
  let money: Array<MoneyPropsType> = [
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]



  let [valuta, setValuta] = useState<FilterValutaType>('all')

  function changeFilter(value: FilterValutaType) {
    setValuta(value);
  }

  let filteredMoney = money;

  if(valuta === 'all') {
    filteredMoney = money.filter(item => true)
  }

  if(valuta === 'dollars') {
    filteredMoney = money.filter(item => item.banknots === 'Dollars')
  }

  if(valuta === 'RUBLS') {
    filteredMoney = money.filter(item => item.banknots === 'RUBLS')
  }

  const namesVal: Array<FilterValutaType> = ['all', 'RUBLS', 'dollars']


  return ( <div>
      <CarList cars={topCars}/>
      <div>
        <Banknots banknots={filteredMoney}/>
        <SomeButton names={namesVal} changeFilter={changeFilter}/>
      </div>
  </div>

  );
}


export default App;
