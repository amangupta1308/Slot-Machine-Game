import React from 'react';

const False = (props) => {
    // let {nx,ny,nz}=props;
    return (
            <>
                <div className='slot_inner'>
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>This is not matching</h1>
                    <hr/>
                </div>
            </>
        );
}

export default False;