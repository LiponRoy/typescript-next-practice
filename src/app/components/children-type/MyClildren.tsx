import React, { ReactNode } from 'react';

// Define a component that accepts children of type ReactNode
interface Props {
    children: ReactNode;
};

const MyComponent = ({ children }: Props) => {
    return (
        <div>
            <h1>Hello from MyComponent!</h1>
            {children}
        </div>
    );
};

// Using MyComponent with various children
const MyClildren = () => {
    return (
        <MyComponent>
            <p>This is a paragraph.</p>
            <button>Click me</button>
        </MyComponent>
    );
};

export default MyClildren;
