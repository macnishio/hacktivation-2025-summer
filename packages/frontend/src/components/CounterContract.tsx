import { useState } from 'react';
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

// Counter contract ABI (simplified)
const COUNTER_ABI = [
  {
    "inputs": [],
    "name": "number",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "newNumber", "type": "uint256"}],
    "name": "setNumber",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "increment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

// Contract address (deployed on localhost:8545)
const COUNTER_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

export default function CounterContract() {
  const { address, isConnected } = useAccount();
  const [newNumber, setNewNumber] = useState('');

  // Read the current number
  const { data: currentNumber } = useContractRead({
    address: COUNTER_ADDRESS,
    abi: COUNTER_ABI,
    functionName: 'number',
  });

  // Write contract functions
  const { write: writeIncrement, data: incrementHash, isLoading: isIncrementPending } = useContractWrite({
    address: COUNTER_ADDRESS,
    abi: COUNTER_ABI,
    functionName: 'increment',
  });

  const { write: writeSetNumber, data: setNumberHash, isLoading: isSetNumberPending } = useContractWrite({
    address: COUNTER_ADDRESS,
    abi: COUNTER_ABI,
    functionName: 'setNumber',
  });

  // Wait for transaction confirmation
  const { isLoading: isIncrementConfirming, isSuccess: isIncrementSuccess } = useWaitForTransaction({
    hash: incrementHash,
  });

  const { isLoading: isSetNumberConfirming, isSuccess: isSetNumberSuccess } = useWaitForTransaction({
    hash: setNumberHash,
  });

  const handleIncrement = () => {
    writeIncrement();
  };

  const handleSetNumber = () => {
    if (newNumber) {
      writeSetNumber({
        args: [BigInt(newNumber)],
      });
      setNewNumber('');
    }
  };

  if (!isConnected) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Connect your wallet to interact with the Counter contract</h2>
        <ConnectButton />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h2>Counter Contract</h2>
      <p>Connected: {address}</p>
      
      <div style={{ marginBottom: '1rem' }}>
        <h3>Current Number: {currentNumber?.toString() || 'Loading...'}</h3>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button 
          onClick={handleIncrement}
          disabled={isIncrementPending || isIncrementConfirming}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isIncrementPending || isIncrementConfirming ? 'not-allowed' : 'pointer'
          }}
        >
          {isIncrementPending || isIncrementConfirming ? 'Processing...' : 'Increment'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <input
          type="number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          placeholder="Enter new number"
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            flex: 1
          }}
        />
        <button 
          onClick={handleSetNumber}
          disabled={isSetNumberPending || isSetNumberConfirming || !newNumber}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSetNumberPending || isSetNumberConfirming || !newNumber ? 'not-allowed' : 'pointer'
          }}
        >
          Set Number
        </button>
      </div>

      {(isIncrementSuccess || isSetNumberSuccess) && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          Transaction successful!
        </div>
      )}

      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <p><strong>Note:</strong> Counter contract is deployed and ready to use!</p>
        <p>Contract Address: {COUNTER_ADDRESS}</p>
      </div>
    </div>
  );
}
