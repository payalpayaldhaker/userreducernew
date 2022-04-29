import React from 'react'
import {userContext} from 'react'
import { StateContenxt } from '.';


export default function A() {


        const state = userContext(StateContenxt);
        console.log(state);
        state.subscribe(()=>{ 
            console.log(state.getState());
        });

        state.dispatch({type:'GOODMORNING',data:'brt'});
  return (
    <div>heelo goodmorning miss quenn payal  you are beautiful girl and vwry nice natur and your habiits kids and boy you are very lucky payal dhakad</div>
  )
}
