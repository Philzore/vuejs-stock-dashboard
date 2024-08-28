import axios from 'axios';


class StockService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://127.0.0.1:8000/data/'
    });
  }

  async fetchData(gid) {
    try {
      const response = await this.apiClient.get(gid);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
}

export const stockService = new StockService();