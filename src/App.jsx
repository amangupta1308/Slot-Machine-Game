import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
const App = () => (
    <>
    <h1 className='heading_style'>List of Top 5 Netflix Picks of 2022</h1>
    { Sdata.map((cval) => <Card 
            key = {cval.id}     
            imgsrc = {cval.imgsrc} 
            title = {cval.title} 
            sname = {cval.sname} 
            link = {cval.link} 
        />
    )}
</>
);
export default App;