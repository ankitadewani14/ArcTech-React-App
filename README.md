## ArcTech React App - Internship Task

## Introduction

This repository contains the solution for the internship task assigned by ArcTech. The goal was to create a React application that fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts), displays it in a Material UI (MUI) table, and implements a responsive layout using Bootstrap and MUI's `useMediaQuery` hook. Additionally, Redux store integration is also demonstrated, and a mindmap-like prompt was created for displaying the table.



## Table of Contents

1. [Async/Await Example to Fetch Data from JSONPlaceholder API](#1-asyncawait-example-to-fetch-data-from-jsonplaceholder-api)
2. [Display Data in MUI Table with Responsive Design](#2-display-data-in-mui-table-with-responsive-design)
3. [Passing Redux Store to React App](#3-passing-redux-store-to-react-app)
4. [Mindmap Prompt for Displaying Data](#4-mindmap-prompt-for-displaying-data)



## Task Breakdown & Solutions

 1 Async/Await Example to Fetch Data from JSONPlaceholder API

Question: Implement a function using `async/await` to fetch data from the JSONPlaceholder API.

Answer:
To handle fetching data from the JSONPlaceholder API, we use the `async/await` syntax inside the `useEffect` hook. This ensures that the data is fetched asynchronously when the component mounts.

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Data rendering logic goes here */}
    </div>
  );
};
```

This function fetches the data from the API and updates the state with the fetched posts.



 2 Display Data in MUI Table with Responsive Design

Question: Display the fetched data in a Material UI (MUI) table that takes half of the screen width on laptop screens and full screen width on mobile screens.

Answer:
We use Material UI's `Table`, `TableHead`, `TableBody`, and `TableRow` components to display the data. To make the table responsive, we utilize the `useMediaQuery` hook to determine the screen size. If the screen width is under 600px (mobile), the table takes 100% width, and if the screen is larger (laptop/desktop), it takes 50%.

```javascript
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const DataTable = () => {
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ width: isMobile ? '100%' : '50%', margin: '0 auto' }}
      className="shadow-lg rounded"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
```

This approach ensures the table is responsive and looks good on different screen sizes, thanks to the use of Bootstrap and MUI's `useMediaQuery` hook.



 3 Passing Redux Store to React App

Question: How do you pass the Redux store to the React app?

Answer:
We pass the Redux store to the React app by wrapping the root component with the `Provider` component from `react-redux` and passing the `store` as a prop. This makes the store accessible to all components within the app.

Here’s an example of how to pass the Redux store:

```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Assuming store is already created

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Data Table</h1>
        <DataTable />
      </div>
    </Provider>
  );
};

export default App;
```

By using the `Provider` component, we ensure that any component in the app can access the Redux store.



 4 Mindmap Prompt for Displaying Data

Question: What would be the prompt you would write to display the above table in React as a mindmap?

Answer:
While React doesn’t natively support mindmap visualizations, we could conceptualize the table data as nodes in a mindmap, where each data entry (like `ID`, `Title`, and `Body`) would be represented as a child node of a parent node (such as `Post`). Here's a conceptual prompt for a mindmap-like structure:

1. Root Node: "Post"
    - Child Node 1: "ID" (e.g., 1, 2, 3)
    - Child Node 2: "Title" (e.g., "Post title here")
    - Child Node 3: "Body" (e.g., "Post body content")

In React, we could represent the data structure like this:

```javascript
const data = [
  {
    id: 1,
    title: "Post title",
    body: "Post body content"
  },
  {
    id: 2,
    title: "Another title",
    body: "Another post body content"
  }
  // More posts
];
```

To visualize this as a mindmap, you could use a library like [react-mindmap](https://github.com/nhn/tui.chart) to display nodes and connections dynamically. Alternatively, you can simply display the data in a structured, tree-like format.



## How to Run the App

1. Clone this repository or download the ZIP file.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install all necessary dependencies.
4. Run `npm start` to start the React app locally.
5. The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Deployment

You can view the deployed version of the app here:

https://verdant-pony-bb6f51.netlify.app/



## Dependencies

- React
- Material UI (MUI)
- Axios
- Redux
- Bootstrap



Conclusion

This application fetches data from the JSONPlaceholder API and displays it in a responsive MUI table. It also integrates Redux for state management and demonstrates how to pass the Redux store to the app. The app is styled using Bootstrap and follows responsive design principles to adapt to different screen sizes. The task showcases basic React skills, including fetching data, working with external APIs, implementing responsive design, and integrating Redux.

