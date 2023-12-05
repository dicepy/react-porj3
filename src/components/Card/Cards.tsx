import Card from './Card';
import { Provider } from 'react-redux';
import store from '../../store/store';

const Cards:React.FC = () => {
  
  return (
    <Provider store={store}>
    {Object.keys(store.getState()).map((cardName) => { 
    let state = store.getState();
        return (
          <Card
            key={cardName}
            name={cardName}
            price={state[cardName].price}
            description={state[cardName].description}
          />
        );
      })}
      </Provider>
  )
}

export default Cards