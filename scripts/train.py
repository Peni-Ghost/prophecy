#!/usr/bin/env python3
"""
Train a simple MLP model for price prediction.
Generates weights compatible with Cauldron/Frostbite.
"""

import numpy as np
import json
import struct

def generate_mlp_weights(input_size=10, hidden_size=16, output_size=1):
    """Generate random MLP weights for demo purposes."""
    np.random.seed(42)
    
    # Layer 1: input -> hidden
    W1 = np.random.randn(input_size, hidden_size).astype(np.float32) * 0.1
    b1 = np.zeros(hidden_size, dtype=np.float32)
    
    # Layer 2: hidden -> output
    W2 = np.random.randn(hidden_size, output_size).astype(np.float32) * 0.1
    b2 = np.zeros(output_size, dtype=np.float32)
    
    return {
        'W1': W1,
        'b1': b1,
        'W2': W2,
        'b2': b2
    }

def pack_weights_binary(weights, output_file='weights.bin'):
    """Pack weights into binary format for Cauldron."""
    with open(output_file, 'wb') as f:
        # Write layer 1 weights
        f.write(weights['W1'].tobytes())
        f.write(weights['b1'].tobytes())
        # Write layer 2 weights
        f.write(weights['W2'].tobytes())
        f.write(weights['b2'].tobytes())
    
    print(f"✅ Weights saved to {output_file}")
    print(f"   W1: {weights['W1'].shape}")
    print(f"   b1: {weights['b1'].shape}")
    print(f"   W2: {weights['W2'].shape}")
    print(f"   b2: {weights['b2'].shape}")

def pack_weights_json(weights, output_file='weights.json'):
    """Pack weights into JSON format for inspection."""
    weights_dict = {
        'W1': weights['W1'].tolist(),
        'b1': weights['b1'].tolist(),
        'W2': weights['W2'].tolist(),
        'b2': weights['b2'].tolist()
    }
    
    with open(output_file, 'w') as f:
        json.dump(weights_dict, f, indent=2)
    
    print(f"✅ Weights JSON saved to {output_file}")

def simulate_prediction(weights, input_data):
    """Simulate a forward pass through the MLP."""
    # Simple MLP forward pass
    hidden = np.maximum(0, np.dot(input_data, weights['W1']) + weights['b1'])  # ReLU
    output = np.dot(hidden, weights['W2']) + weights['b2']
    return output

if __name__ == '__main__':
    print("🔮 Prophecy Model Training")
    print("=" * 40)
    
    # Generate weights
    weights = generate_mlp_weights(input_size=10, hidden_size=16, output_size=1)
    
    # Save in both formats
    pack_weights_binary(weights, 'models/weights.bin')
    pack_weights_json(weights, 'models/weights.json')
    
    # Test prediction
    test_input = np.random.randn(10).astype(np.float32)
    prediction = simulate_prediction(weights, test_input)
    
    print(f"\n🧪 Test Prediction:")
    print(f"   Input shape: {test_input.shape}")
    print(f"   Output: {prediction[0]:.6f}")
    
    print("\n✨ Ready for Cauldron upload!")
    print("   Run: cauldron upload --file models/weights.bin --accounts frostbite-accounts.toml")
