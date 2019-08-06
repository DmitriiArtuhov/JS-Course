import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
  return (
    <div>
      <div className="container">
        <Header/>
        <Menu/>
      </div>

      <div className="background">
        <div className="container">
          <Content 
          title="быстрая Доставка" 
          parag="бетона, щебня, песка и других нерудных материалов по Москве и Московской области" 
          btn="Подробнее о доставке" 
          linkURL="#" 
          linkText="перейти в каталог" />
        </div>
      </div>
    </div>
  );
}

export default App;
