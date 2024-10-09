"use client"
import React, { useState, useEffect } from 'react';
import NavBar from './component/navbar';

const Home = () => {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const storedApiKey = localStorage.getItem('OPENAI_API_KEY');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      process.env.OPENAI_API_KEY = storedApiKey;
    }
  }, []);

  const handleSaveKey = () => {
    localStorage.setItem('OPENAI_API_KEY', apiKey);
    process.env.OPENAI_API_KEY = apiKey;
    alert('API-Schlüssel erfolgreich gespeichert!');
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff'}}>
      <NavBar />

      <div style={{ margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
        {/* Informationsbereich über das Produkt */}
        <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#333', boxShadow: '0 8px 16px rgba(255, 255, 255, 0.2)', borderRadius: '16px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5em', textAlign: 'center', color: '#00684A' }}>StudyBuddy: Dein KI-basierter Lernassistent</h1>
          <p>
            Mit <strong>StudyBuddy</strong>, einer fortschrittlichen RAG (Retrieval-Augmented Generation) Anwendung, kannst du deinen eigenen, personalisierten Chatbot erschaffen, der gezielt auf deine hochgeladenen Inhalte eingeht.
            Egal ob wissenschaftliche Artikel, Präsentationen oder Seminarunterlagen – einfach deine PDF-Dateien hochladen und dein persönlicher Chatbot verwandelt diese in eine interaktive Wissensquelle.
          </p>

          <h2 style={{ fontStyle: 'italic', color: '#00684A' }}>So funktioniert&apos;s:</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>PDF-Dateien hochladen</strong>
              <br />Navigiere zu unserem <strong>„Train“</strong>-Bereich und lade alle PDF-Dateien hoch, die du deinem Chatbot zur Verfügung stellen möchtest.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Intelligente Fragen und Antworten</strong>
              <br />Nach dem Upload kannst du zur <strong>„QnA“-Sektion</strong> wechseln. Stelle nun deine Fragen in natürlicher Sprache.
            </li>
            <li>
              <strong>Optimale Performance durch MongoDB Atlas</strong>
              <br />Jede hochgeladene PDF wird in Vektoren umgewandelt, die effizient in einer leistungsstarken MongoDB Atlas-Datenbank gespeichert werden.
            </li>
          </ul>

          <h2 style={{ fontStyle: 'italic', color: '#00684A' }}>Warum StudyBuddy?</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Personalisierte Lernunterstützung</strong>: Erhalte Antworten, die spezifisch auf deine eigenen Inhalte abgestimmt sind.</li>
            <li><strong>Einfach und effizient</strong>: PDFs hochladen und sofort loslegen – keine komplizierte Einrichtung nötig.</li>
            <li><strong>Modernste KI-Technologie</strong>: Nutzt die leistungsstarke Retrieval-Augmented Generation (RAG), um aus großen Informationsmengen präzise und verständliche Antworten zu generieren.</li>
          </ul>
        </div>

        {/* Bereich für den API-Schlüssel */}
        <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#444', borderRadius: '16px', color: 'white', boxShadow: '0 8px 16px rgba(255, 255, 255, 0.2)' }}>
          <p style={{ textAlign: 'center' }}>Füge deinen OpenAI API-Schlüssel hinzu, um den vollen Funktionsumfang von StudyBuddy zu nutzen:</p>
          <label htmlFor="api-key-input" style={{ display: 'block', margin: '20px 0 10px', fontWeight: 'bold' }}>OpenAI API Key:</label>
          <input
            type="text"
            id="api-key-input"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Deinen OpenAI-Schlüssel hier eingeben"
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #777',
              borderRadius: '4px',
              marginBottom: '20px',
              backgroundColor: '#222',
              color: '#fff'
            }}
          />
          <button 
            onClick={handleSaveKey} 
            style={{ 
              padding: '10px 20px', 
              width: '100%', 
              backgroundColor: '#00684A', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 255, 127, 0.2)'
            }}
          >
            API-Schlüssel speichern
          </button>
          {apiKey && (
            <p style={{ marginTop: '20px', color: 'lightgreen', textAlign: 'center' }}>
              Gespeicherter API-Schlüssel: <strong>{apiKey.slice(0, 4)}...{apiKey.slice(-4)}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
