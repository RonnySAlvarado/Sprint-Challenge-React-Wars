# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a JS library for building UI components. The benefits of using react is the concept of the Virtual DOM. Basically, whenever a virtual DOM object gets updated,
    it will essentially be compared to a prior version of the virtual DOM and figure out what was changed (diffing). Then, it updates the real DOM with just those changes.

1.  What does it mean to _think_ in react?
    To think in react means to see how everything could be structured within components where you can reuse those components in other parts of the file and should mainly be good at 1 thing. A lot of the time, this means drawing a good amount of boxes :D

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class/Stateful components and functional/presentational components are almost the same thing, but functional components do not have any state and uses return whereas class components have state stored in their constructor, can have methods, and has to use the render method where the return will be inside of.

1.  Describe state.
    State is data management at its finest. It keeps track of information about data in that class component's constructor. State can be changed by using setState. The data within state can be passeed down to child components as a prop.

1.  Describe props.
    Props is short for proprety and is information that is passed down from one parent component to a child component and are immutable for the component receiving them.
