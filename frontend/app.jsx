import React, { Component } from 'react';
import { render } from 'react-dom';

const HelloWorld = () => {
    return (
        <div>
            <h1>
                <i>This is Title !</i>
            </h1>
            it is not cool stuff yet, but it will be! {anotherFunction()}
        </div>
    );
};

const anotherFunction = () => {
 const  any = {
     color: 'blue',
     margin: 20 
 }
    return (
        <div style={any}>
            Another Function !
        </div>
    )
}
render(<HelloWorld />,
        document.getElementById('container'))