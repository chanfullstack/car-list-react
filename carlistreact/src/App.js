import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import CarItem from './components/Caritem';
import CarPost from './components/CarPost';
import cars from './data/cars';


function App() {

  const [selectedcar, setSelectedcar] = useState(null);
  const [searctText, setSearchText] = useState('');

  function onCarOpenClick(theCar) {
    setSelectedcar(theCar);
  }



  function onCarCloseClick() {
    setSelectedcar(null)
  }
  let carPost = null;
  if (!!selectedcar) {
    carPost = <CarPost car={selectedcar} onBgClick={onCarCloseClick} />
  }

  const filterCars = cars.filter((car) => {
    return car.title.includes(searctText);
  })


  const carElements = filterCars.map((car, index) => {
    return <CarItem key={index} car={car} onCarClick={onCarOpenClick} />
  })

  return (
    <div className="app">
      <AppHeader />
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searctText} onValueChange={setSearchText} />
          <div className="app-grid">
            {carElements}
          </div>

        </div>
      </section>


      {carPost}
    </div>
  );
}

export default App;
