import React from 'react';

export default function withTest (comp) {
    return class extends React.Component{

    }
}


function A() {
    return <h1>HOC</h1>
}

const B = withTest(A)

console.log('B', B);
