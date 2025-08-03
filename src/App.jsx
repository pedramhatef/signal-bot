import { useEffect, useState } from 'react'
import './App.css'

// Import your Firebase app + Firestore
import { firebaseApp } from './firebaseConfig'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

function App() {
  const [signals, setSignals] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(firebaseApp)
        console.log("DB initialized:", db)

        const querySnapshot = await getDocs(collection(db, "signals"))
        console.log("QuerySnapshot size:", querySnapshot.size)

        const data = querySnapshot.docs.map(doc => doc.data())
        console.log("Fetched Data:", data)

        setSignals(data)
      } catch (error) {
        console.error("Error fetching signals:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>DOGEUSDT Signals</h1>

      {signals.length > 0 ? (
        signals.map((signal, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
            <p><strong>Type:</strong> {signal.type}</p>
            <p><strong>Price:</strong> {signal.price}</p>
            <p><strong>Level:</strong> {signal.level}</p>
            <p><strong>Server Time:</strong> {signal.serverTime?.toDate ? signal.serverTime.toDate().toString() : signal.serverTime}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No signals yet. Check Firestore or wait for new signals.</p>
      )}
    </div>
  )
}

export default App

