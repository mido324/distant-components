# Redux

## What's the problem with distant components in React?
sharing data/state to distant components is cumbersome and error-prone 
## What is Redux? Why/when do we use it?
redux provides a store of data to our app , where we can share data among distant components we use redux only when its less painful than using react State.
## What are the steps to add Redux to a React app?
 read create store 
 hook up the provider around the app in index js
  c. use connect() to connect to store from components that need the data 
   part 2 - write the data 
   A- create reducer with action creators 
   B- dispatch action with dispatch (recommanded to use the map dispatch to props)
## What is a store?
a store is a collection of data that is used by any components that wants it's data.
## What is a reducer? What does the reducer do for us in Redux?

## What is immutability? Why do we use it?

