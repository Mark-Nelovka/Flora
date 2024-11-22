import React from 'react';
import Menu from './components/menu/Menu';
import BerryList from './components/berry/BerryList';

function App() {
  return (
    <div>
      <Menu />
      <BerryList title='Малина 125' order={1749} kwitne={121} Rc={0} workers={4} pinets={12} />
    </div>
  );
}

export default App;
