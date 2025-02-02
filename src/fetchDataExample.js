import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data); // Logs the fetched data
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchData;
