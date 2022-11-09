import React from 'react';
import './index.css';
import SlotM from './SlotM';
import Sdata from './Sdata';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const App = () => {
    return <>
        <h1 className='heading_style'>🎰 Welcome to <span style={{fontWeight: 'bold', }}> Slot machine game </span> 🎰 </h1>
        <div className='slotMachine'>     
            {/* {
                Sdata.map((val) => {
                    return (<SlotM x={val.x} y={val.y} z={val.z} />);
                })
            } */}
            <SlotM x='😄' y='😄' z='😄' />
            <SlotM x='😄' y='😏' z='😄' />
            <SlotM x='🍎' y='👽' z='🍎' />
            <SlotM x='👽' y='👽' z='👽' />
            <SlotM x='🐱' y='🌵' z='🕉️' />
        </div>
    </>;
};
export default App;



