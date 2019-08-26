# Wiki_Search
Wiki search in reactJs based on wiki opensearch api

## Components
This React.js application contains a total of 5 components, 2 of which are class components.

1. **Query**

This function component is used to render a single query result with the information received from the server.

2. **QueryList**

The ```<QueryList />``` is the second function component. It is used to convert an array of entries into an array of ```<Query />```.

3. **Form**

The ```<Form />``` class component renders the form which is allows the user to type its query. By managing the state change of the input field, the component is able to read the input from the user. With that value, the component makes the Axios request to the server.

4. **Search**

&nbsp;```<Search />``` is the parent component and it is used to manage the relationship between all other components listed above. It renders all the other components and manages the state of the data received from the API.

5. **Login**

