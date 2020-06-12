1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library that is used in various forms to create complex, rich user interfaces. 
DOM operations are quite expensive in terms of performance, and any application that has much of DOM operations in the background will render slowly. If the page has data that changes over time at high rates (for example, lots of people commenting on a post, likes being generated etc), then there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data. React solves this problem, without even having the page reload. (source: https://scotch.io/@anitashah/what-problems-does-reactjs-solve-when-must-you-select-reactjs) 

2. Describe component state.

We use components to display some data (often called “state”) to the screen for our users. 

3. Describe props.

When we want to pass information held on state inside one component to another component, we pass them as props.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed. We sync by passing in a dependency array as the second argument to the effect hook. 