// API route for fetching historical price data
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol') || 'SOL';
  
  try {
    // Map symbols to CoinGecko IDs
    const idMap: Record<string, string> = {
      'SOL': 'solana',
      'BTC': 'bitcoin',
      'ETH': 'ethereum',
      'JUP': 'jupiter-exchange'
    };
    
    const id = idMap[symbol] || 'solana';
    
    // Fetch 7 days of hourly data
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
      { next: { revalidate: 300 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch historical data');
    }
    
    const data = await response.json();
    
    // Format data for chart
    const prices = data.prices.map((p: [number, number]) => ({
      time: new Date(p[0]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: p[1]
    }));
    
    // Take every 6th point to reduce density (every 6 hours)
    const sampled = prices.filter((_: unknown, i: number) => i % 6 === 0);
    
    return Response.json(sampled);
  } catch (error) {
    // Fallback mock data
    const mockData = [
      { time: 'Feb 3', price: 142.50 },
      { time: 'Feb 4', price: 145.20 },
      { time: 'Feb 5', price: 148.80 },
      { time: 'Feb 6', price: 146.30 },
      { time: 'Feb 7', price: 151.20 },
      { time: 'Feb 8', price: 149.50 },
      { time: 'Feb 9', price: 154.80 }
    ];
    
    return Response.json(mockData);
  }
}
