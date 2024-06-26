export const fetchAllStockData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/stocks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching all stock data:", error);
      throw error;
    }
  };
  
  export const fetchStockData = async (ticker) => {
    try {
      const response = await fetch(`http://localhost:5001/api/stocks/${ticker}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  };
  