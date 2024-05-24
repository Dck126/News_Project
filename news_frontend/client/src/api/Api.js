import axios from 'axios';

export const getNews = async () => {
  try {
    const response = await axios.get('/news');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
};

// export const addItem = async (name) => {
//   try {
//     const response = await axios.post(`${API_URL}/items`, { name });
//     return response.data;
//   } catch (error) {
//     console.error('Error adding item', error);
//     throw error;
//   }
// };
