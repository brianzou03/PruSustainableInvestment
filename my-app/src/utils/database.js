const API_URL = 'http://localhost:5001/api/stocks';

export const fetchAllStockData = async () => {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching all stock data:', error);
    return [];
  }
};

export const fetchStockData = async (ticker) => {
  try {
    const response = await fetch(`${API_URL}/${ticker}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
};
