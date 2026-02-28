import { useState } from 'react';

export function TwitchDebug() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testEndpoint = async () => {
    setLoading(true);
    setResult('🔄 Testing serverless endpoint...');

    try {
      // Tester l'endpoint serverless avec un streamer exemple
      const testUsernames = 'inconnuuontop,canrz_rl';
      const url = `/api/twitch-status?usernames=${encodeURIComponent(testUsernames)}`;
      
      console.log('🔍 Testing endpoint:', url);
      
      const response = await fetch(url);
      const text = await response.text();
      
      if (response.ok) {
        try {
          const data = JSON.parse(text);
          const liveCount = Object.values(data.liveStatus || {}).filter((s: any) => s.isLive).length;
          const totalCount = Object.keys(data.liveStatus || {}).length;
          
          setResult(`✅ SUCCESS!\n\nStatus: ${response.status}\nTimestamp: ${data.timestamp}\n\nStreamers checked: ${totalCount}\nCurrently live: ${liveCount}\n\nFull Response:\n${JSON.stringify(data, null, 2)}`);
        } catch {
          setResult(`✅ SUCCESS!\n\nStatus: ${response.status}\nResponse: ${text}`);
        }
      } else {
        setResult(`❌ FAILED!\n\nStatus: ${response.status}\nError: ${text}\n\n💡 Vérifiez que les variables d'environnement sont configurées sur Vercel:\n- TWITCH_CLIENT_ID\n- TWITCH_CLIENT_SECRET\n\n(Sans le préfixe VITE_)`);
      }
    } catch (err) {
      setResult(`❌ ERROR: ${err}\n\n💡 Assurez-vous que:\n1. Les variables d'environnement sont configurées sur Vercel\n2. Le projet est redéployé après la configuration\n3. L'endpoint /api/twitch-status existe`);
    }
    
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0, 0, 0, 0.95)',
      padding: '30px',
      borderRadius: '10px',
      zIndex: 9999,
      maxWidth: '700px',
      color: 'white',
      fontFamily: 'monospace'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#ff00ff' }}>🔧 Twitch API Debugger (Serverless)</h2>
      
      <div style={{ marginBottom: '20px', fontSize: '12px', background: '#1a1a1a', padding: '15px', borderRadius: '5px' }}>
        <div style={{ color: '#00ffff', fontWeight: 'bold', marginBottom: '10px' }}>📡 Architecture:</div>
        <div style={{ paddingLeft: '10px' }}>
          <div>1. Frontend → /api/twitch-status</div>
          <div>2. Vercel Serverless → Twitch OAuth</div>
          <div>3. Twitch API → Live Status</div>
        </div>
        <div style={{ marginTop: '15px', color: '#ffff00' }}>
          ⚠️ Les variables doivent être configurées sur Vercel:
          <div style={{ paddingLeft: '10px', marginTop: '5px' }}>
            • TWITCH_CLIENT_ID<br/>
            • TWITCH_CLIENT_SECRET
          </div>
          <div style={{ marginTop: '5px', color: '#ff8800' }}>
            (SANS le préfixe VITE_)
          </div>
        </div>
      </div>

      <button 
        onClick={testEndpoint}
        disabled={loading}
        style={{
          background: '#ff00ff',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        {loading ? '⏳ Testing...' : '🧪 Test Serverless Endpoint'}
      </button>

      <a
        href="/"
        style={{
          marginLeft: '10px',
          color: '#00ffff',
          textDecoration: 'none',
          padding: '10px 20px',
          display: 'inline-block'
        }}
      >
        ← Retour
      </a>

      {result && (
        <pre style={{
          background: '#1a1a1a',
          padding: '15px',
          borderRadius: '5px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          fontSize: '11px',
          maxHeight: '400px',
          overflow: 'auto'
        }}>
          {result}
        </pre>
      )}
    </div>
  );
}