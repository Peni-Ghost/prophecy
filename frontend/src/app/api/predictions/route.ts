// Cache for price data
let priceCache = {
  data: null,
  timestamp: 0
};

const CACHE_DURATION = 30000; // 30 seconds

// Mock prediction model (simulates ML inference)
function generatePrediction(symbol: string, currentPrice: number) {
  // Simple algorithm: random walk with slight bias
  const volatility = 0.02; // 2% volatility
  const bias = Math.random() > 0.5 ? 1 : -1;
  const change = currentPrice * volatility * bias * Math.random();
  
  const predicted = currentPrice + change;
  const confidence = Math.floor(70 + Math.random() * 25); // 70-95%
  const trend = predicted > currentPrice ? 'up' : 'down';
  
  return {
    predicted: parseFloat(predicted.toFixed(symbol.includes('BTC') ? 0 : symbol.includes('ETH') ? 0 : 2)),
    confidence,
    trend,
    timeframe: symbol === 'JUP' ? '30m' : symbol === 'BTC' ? '4h' : '1h'
  };
}

export async function GET() {
  try {
    const now = Date.now();
    
    // Return cached data if fresh
    if (priceCache.data && (now - priceCache.timestamp) < CACHE_DURATION) {
      return Response.json(priceCache.data);
    }
    
    // Fetch real prices from CoinGecko
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=solana,bitcoin,ethereum,jupiter-exchange&vs_currencies=usd&include_24hr_change=true',
      { next: { revalidate: 30 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch prices');
    }
    
    const data = await response.json();
    
    const predictions = {
      'SOL-USDC': {
        current: data.solana.usd,
        ...generatePrediction('SOL', data.solana.usd),
        change24h: data.solana.usd_24h_change
      },
      'BTC-USDC': {
        current: data.bitcoin.usd,
        ...generatePrediction('BTC', data.bitcoin.usd),
        change24h: data.bitcoin.usd_24h_change
      },
      'ETH-USDC': {
        current: data.ethereum.usd,
        ...generatePrediction('ETH', data.ethereum.usd),
        change24h: data.ethereum.usd_24h_change
      },
      'JUP-USDC': {
        current: data['jupiter-exchange'].usd,
        ...generatePrediction('JUP', data['jupiter-exchange'].usd),
        change24h: data['jupiter-exchange'].usd_24h_change
      }
    };
    
    priceCache = {
      data: predictions,
      timestamp: now
    };
    
    return Response.json(predictions);
  } catch (error) {
    console.error('Predictions API error:', error);
    
    // Fallback to mock data if API fails
    const fallback = {
      'SOL-USDC': {
        current: 154.80,
        predicted: 158.50,
        confidence: 87,
        trend: 'up',
        timeframe: '1h',
        change24h: 2.5
      },
      'BTC-USDC': {
        current: 98500,
        predicted: 102000,
        confidence: 82,
        trend: 'up',
        timeframe: '4h',
        change24h: 1.8
      },
      'ETH-USDC': {
        current: 2850,
        predicted: 2780,
        confidence: 76,
        trend: 'down',
        timeframe: '1h',
        change24h: -0.5
      },
      'JUP-USDC': {
        current: 0.85,
        predicted: 0.92,
        confidence: 91,
        trend: 'up',
        timeframe: '30m',
        change24h: 5.2
      }
    };
    
    return Response.json(fallback);
  }
}
