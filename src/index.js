import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import A from './A';


import { createStore } from 'redux';


let rootReducer = (oldState,action)=>{ 

  let newState = oldState;

  if(action.type ==='GOODMORNING'){ 
        newState = action.data;

        return newState;
  }
  if(action.type ==='GOODAFERNOON'){ 
        newState = action.data;

        return newState;
  }
  if(action.type ==='GOODEVENIG'){ 
        newState = action.data;

        return newState;
  }
  if(action.type ==='GOODNIGHT'){ 
        newState = action.data;

        return newState;
  }

  return newState;
}

let store = createStore(rootReducer);


store.subscribe(function(){ 
  console.log('hellolo',store.getState());
});

store.dispatch({type:'GOODMORNING',data:'payal bharat'});
store.dispatch({type:'GOODAFERNOON',data:'sans bharat'});
store.dispatch({type:'GOODEVENING',data:'payal sans'});
store.dispatch({type:'GOODNIGHT',data:'payal bharat'});

console.log(store);

export const StateContenxt = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContenxt.Provider value={store}> 
    <A/>

    </StateContenxt.Provider>
   
  </React.StrictMode>
);
