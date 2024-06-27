const API_URL = 'http://localhost:5001/api/stocks';

export const fetchAllStockData = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/stocks');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all stock data:', error);
    return { data: [] };
  }
};

export const fetchStockData = async (ticker) => {
  try {
    const response = await fetch(`http://localhost:5001/api/stocks/${ticker}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching stock data for ticker ${ticker}:`, error);
    return null;
  }
};
