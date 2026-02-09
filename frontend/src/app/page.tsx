"use client";

import { useState, useEffect } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Brain, 
  Zap, 
  Shield,
  Clock,
  ArrowRight,
  Github,
  Send
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";

const mockPriceData = [
  { time: "00:00", price: 145.20, prediction: null },
  { time: "04:00", price: 148.50, prediction: null },
  { time: "08:00", price: 146.80, prediction: null },
  { time: "12:00", price: 152.30, prediction: null },
  { time: "16:00", price: 151.10, prediction: null },
  { time: "20:00", price: 154.80, prediction: 156.20 },
  { time: "24:00", price: null, prediction: 158.50 },
];

const predictions = [
  { asset: "SOL-USDC", current: 154.80, predicted: 158.50, confidence: 87, timeframe: "1h", trend: "up" },
  { asset: "BTC-USDC", current: 98500, predicted: 102000, confidence: 82, timeframe: "4h", trend: "up" },
  { asset: "ETH-USDC", current: 2850, predicted: 2780, confidence: 76, timeframe: "1h", trend: "down" },
  { asset: "JUP-USDC", current: 0.85, predicted: 0.92, confidence: 91, timeframe: "30m", trend: "up" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <header className="border-b border-indigo-500/20 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prophecy
              </h1>
              <p className="text-slate-500 text-xs">On-Chain AI Oracle</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/Peni-Ghost/prophecy" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-sm">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://colosseum.com/agent-hackathon/projects/prophecy" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition-all text-sm font-medium">
              <Zap className="w-4 h-4" />
              Colosseum
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Live on Solana Devnet
          </div>

          <h2 className="text-5xl font-bold mb-4">
            AI Predictions
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              On-Chain
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Prophecy trains lightweight ML models, deploys them to Solana via Cauldron,
            and runs inference directly on the Frostbite RISC-V VM.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Brain className="w-5 h-5 text-indigo-400" />
              <div className="text-left">
                <div className="text-slate-400 text-xs">Model</div>
                <div className="font-semibold">MLP (193 params)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Shield className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-slate-400 text-xs">Verified</div>
                <div className="font-semibold">On-Chain</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Activity className="w-5 h-5 text-purple-400" />
              <div className="text-left">
                <div className="text-slate-400 text-xs">Latency</div>
                <div className="font-semibold">~400ms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Predictions Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Live Predictions
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              Updated every 30s
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {predictions.map((p, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">{p.asset}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    p.trend === 'up' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {p.timeframe}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Current</span>
                    <span>${p.current.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Predicted</span>
                    <span className={p.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}>
                      ${p.predicted.toLocaleString()}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Confidence</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                            style={{ width: `${p.confidence}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium">{p.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">SOL-USDC Price & Prediction</h3>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span className="text-slate-400">Historical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-slate-400">Predicted</span>
                </div>
              </div>
            </div>

            <div className="h-64">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockPriceData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" stroke="#475569" fontSize={12} />
                    <YAxis stroke="#475569" fontSize={12} domain={['dataMin - 5', 'dataMax + 5']} />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#6366f1" 
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="prediction" 
                      stroke="#a855f7" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="font-semibold mb-4">How It Works</h3>
            
            <div className="space-y-4">
              {[
                { step: 1, title: "Train Model", desc: "MLP with 193 parameters trained on price history" },
                { step: 2, title: "Upload to Solana", desc: "Weights stored in on-chain accounts via Cauldron" },
                { step: 3, title: "On-Chain Inference", desc: "Frostbite RISC-V VM runs predictions" },
                { step: 4, title: "Publish Results", desc: "Telegram bot broadcasts predictions" },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-semibold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-12">
          <h3 className="font-semibold mb-6">Architecture</h3>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Brain, label: "Python Training", desc: "scikit-learn MLP" },
              { icon: ArrowRight, label: "", desc: "", arrow: true },
              { icon: Zap, label: "Cauldron CLI", desc: "Convert & Upload" },
              { icon: ArrowRight, label: "", desc: "", arrow: true },
              { icon: Shield, label: "Solana PDAs", desc: "On-Chain Storage" },
              { icon: ArrowRight, label: "", desc: "", arrow: true },
              { icon: Activity, label: "Frostbite VM", desc: "RISC-V Inference" },
              { icon: ArrowRight, label: "", desc: "", arrow: true },
              { icon: Send, label: "Telegram", desc: "Predictions" },
            ].map((item, i) => (
              item.arrow ? (
                <ArrowRight key={i} className="w-5 h-5 text-slate-600 hidden md:block" />
              ) : (
                <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 min-w-[120px]">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              )
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>Built by Vera-X for Colosseum Agent Hackathon 2026</p>
          <p className="mt-2">Using Cauldron • Solana • Anchor • Frostbite VM</p>
        </div>
      </footer>
    </div>
  );
}
