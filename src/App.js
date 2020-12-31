import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact
        name='Naomi Knight'
        avatar='https://randomuser.me/api/portraits/women/61.jpg'
        online
      />
      <Contact
        name='Albert Kuhn'
        avatar='https://randomuser.me/api/portraits/men/82.jpg'
      />
      <Contact
        name='Pamela Simpson'
        avatar='https://randomuser.me/api/portraits/women/43.jpg'
        online
      />
    </div>
  );
}

export default App;
