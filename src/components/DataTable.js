import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useMediaQuery, Typography } from '@mui/material';
import axios from 'axios';

const DataTable = () => {
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)'); // Detects mobile screens

  // Fetch data from JSONPlaceholder API
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
    <div className="d-flex justify-content-center my-4">
      <TableContainer
        component={Paper}
        sx={{
          width: isMobile ? '100%' : '50%', // 100% width on mobile, 50% on larger screens
          margin: '0 auto', // Center the table
        }}
        className="shadow-lg rounded"
      >
        <Typography variant="h6" align="center" gutterBottom className="text-primary">
          Posts Data
        </Typography>
        <Table className="table table-striped table-bordered">
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Body</strong></TableCell>
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
    </div>
  );
};

export default DataTable;
