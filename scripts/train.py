#!/usr/bin/env python3
"""
Train a simple MLP model for price prediction.
Generates weights compatible with Cauldron/Frostbite.
"""

import json
import struct
import random

def generate_mlp_weights(input_size=10, hidden_size=16, output_size=1):
    """Generate random MLP weights for demo purposes."""
    random.seed(42)
    
    # Generate random weights as flat lists
    W1 = [random.uniform(-0.1, 0.1) for _ in range(input_size * hidden_size)]
    b1 = [0.0] * hidden_size
    
    W2 = [random.uniform(-0.1, 0.1) for _ in range(hidden_size * output_size)]
    b2 = [0.0] * output_size
    
    return {
        'W1': W1,
        'b1': b1,
        'W2': W2,
        'b2': b2,
        'shapes': {
            'W1': [input_size, hidden_size],
            'b1': [hidden_size],
            'W2': [hidden_size, output_size],
            'b2': [output_size]
        }
    }

def pack_weights_binary(weights, output_file='models/weights.bin'):
    """Pack weights into binary format for Cauldron."""
    with open(output_file, 'wb') as f:
        # Write all weights as float32
        for w in weights['W1']:
            f.write(struct.pack('f', w))
        for b in weights['b1']:
            f.write(struct.pack('f', b))
        for w in weights['W2']:
            f.write(struct.pack('f', w))
        for b in weights['b2']:
            f.write(struct.pack('f', b))
    
    print(f"✅ Weights saved to {output_file}")

def pack_weights_json(weights, output_file='models/weights.json'):
    """Pack weights into JSON format for inspection."""
    with open(output_file, 'w') as f:
        json.dump(weights, f, indent=2)
    
    print(f"✅ Weights JSON saved to {output_file}")

if __name__ == '__main__':
    print("🔮 Prophecy Model Training")
    print("=" * 40)
    
    # Generate weights
    weights = generate_mlp_weights(input_size=10, hidden_size=16, output_size=1)
    
    # Save in both formats
    pack_weights_binary(weights, 'models/weights.bin')
    pack_weights_json(weights, 'models/weights.json')
    
    # Calculate total bytes
    total_floats = len(weights['W1']) + len(weights['b1']) + len(weights['W2']) + len(weights['b2'])
    total_bytes = total_floats * 4  # float32 = 4 bytes
    
    print(f"\n📊 Model Stats:")
    print(f"   W1: {weights['shapes']['W1']}")
    print(f"   b1: {weights['shapes']['b1']}")
    print(f"   W2: {weights['shapes']['W2']}")
    print(f"   b2: {weights['shapes']['b2']}")
    print(f"   Total parameters: {total_floats}")
    print(f"   Total bytes: {total_bytes}")
    
    print("\n✨ Ready for Cauldron upload!")
