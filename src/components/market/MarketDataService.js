const cache = new Map();
const CACHE_DURATION = 60000;

export const MarketDataService = {
  async fetchQuotes(symbols) {
    const cacheKey = `quotes-${symbols.join('-')}`;
    const cached = cache.get(cacheKey);
    
    if (cached && (Date.now() - cached.timestamp < CACHE_DURATION)) {
      return cached.data;
    }

    const mockData = symbols.map(s => ({
      symbol: s,
      price: Math.random() * 200 + 100,
      changePercent: (Math.random() * 4 - 2).toFixed(2),
      high: 183.20,
      low: 180.10
    }));

    cache.set(cacheKey, { data: mockData, timestamp: Date.now() });
    return mockData;
  },

  analyzeScenario(price, rsi) {
    if (rsi > 70) return { cenario: 'baixa', motivo: 'RSI sobrecompra' };
    if (rsi < 30) return { cenario: 'alta', motivo: 'RSI sobrevenda' };
    return { cenario: 'consolidacao', motivo: 'Preço em range lateral' };
  }
};
