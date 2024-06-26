export const fetchStockData = async (ticker) => {
    try {
      const response = await fetch(`http://localhost:5001/api/stocks/${ticker}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return [];
    }
  };
  