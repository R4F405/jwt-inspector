import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { KeyRound, ShieldAlert } from 'lucide-react';

// Component to render JSON nicely
function JsonViewer({ title, data, colorClass }) {
  if (!data) return null;

  return (
    <div className="flex-1 min-w-0">
      <h3 className={`text-lg font-semibold text-white px-4 py-2 rounded-t-lg ${colorClass}`}>
        {title}
      </h3>
      <pre className="bg-slate-800 text-white p-4 rounded-b-lg text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

// Main application component
export default function App() {
  const [token, setToken] = useState('');
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState('');

  // Effect that runs whenever the token changes
  useEffect(() => {
    if (!token.trim()) {
      setHeader(null);
      setPayload(null);
      setError('');
      return;
    }

    try {
      // Use jwt-decode to get the header and payload
      const decodedHeader = jwtDecode(token, { header: true });
      const decodedPayload = jwtDecode(token);
      
      setHeader(decodedHeader);
      setPayload(decodedPayload);
      setError('');
    } catch (err) {
      setHeader(null);
      setPayload(null);
      setError('Invalid token. Please check the format.');
      console.error(err);
    }
  }, [token]);
  
  // Function to get the colored parts of the token
  const getColoredTokenParts = () => {
    if (!token || error) return <span className="text-slate-400">{token}</span>;
    const parts = token.split('.');
    return (
      <>
        <span className="text-sky-400">{parts[0]}</span>
        <span className="text-white">.</span>
        <span className="text-rose-400">{parts[1]}</span>
        <span className="text-white">.</span>
        <span className="text-teal-400">{parts[2]}</span>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <KeyRound className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                JWT Inspector
              </h1>
              <p className="text-slate-400 text-lg">
                Instantly decode and analyze JSON Web Tokens
              </p>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Column */}
          <div className="flex flex-col gap-4">
             <h2 className="text-xl font-semibold text-white">Encoded Token</h2>
            <div className="relative h-64">
              <textarea
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full h-full p-4 resize-none rounded-lg bg-slate-800 border border-slate-700 text-transparent caret-white font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Paste your token here..."
                spellCheck="false"
              />
              <div 
                className="absolute top-0 left-0 w-full h-full p-4 overflow-auto pointer-events-none font-mono text-sm leading-relaxed"
                aria-hidden="true"
              >
                {getColoredTokenParts()}
              </div>
            </div>
            {error && (
              <div className="flex items-center gap-2 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg p-3 text-sm">
                <ShieldAlert className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Output Column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">Decoded Output</h2>
            <div className="flex flex-col gap-6">
                <JsonViewer title="Header" data={header} colorClass="bg-sky-500" />
                <JsonViewer title="Payload" data={payload} colorClass="bg-rose-500" />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="text-center mt-12 text-slate-500 text-sm">
            <p>
              Developed by{' '}
              <a
                href="https://github.com/R4F405"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:underline"
              >
                R4F405
              </a>
            </p>
        </footer>
      </div>
    </div>
  );
}