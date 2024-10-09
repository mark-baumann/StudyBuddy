"use client"

import React, { useState, useEffect } from 'react';
import NavBar from './component/navbar';

const Home = () => {
  const [apiKey, setApiKey] = useState(''); // State zur Speicherung des API-Schlüssels

  // useEffect, um den API-Schlüssel aus dem localStorage zu laden
  useEffect(() => {
    const storedApiKey = localStorage.getItem('OPENAI_API_KEY');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      process.env.REACT_APP_OPENAI_API_KEY = storedApiKey;
    }
  }, []); // Läuft nur einmal beim Laden der Seite

  // Funktion zum Speichern des API-Schlüssels in localStorage und process.env
  const handleSaveKey = () => {
    localStorage.setItem('OPENAI_API_KEY', apiKey);
    process.env.OPENAI_API_KEY = apiKey;
    alert('API-Schlüssel erfolgreich gespeichert!');
  };

  return (
    <div>
      <NavBar />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {/* Informationsbereich über das Produkt */}
        <div style={{ width: '60%', marginRight: '20px' }}>
          <div className='overview-text' style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '2em', textAlign: 'center' }}>StudyBuddy: Dein KI-basierter Lernassistent</h1>
            <br />
            
            <p>
              Mit <strong>StudyBuddy</strong>, einer fortschrittlichen RAG (Retrieval-Augmented Generation) Anwendung, kannst du deinen eigenen, personalisierten Chatbot erschaffen, der gezielt auf deine hochgeladenen Inhalte eingeht. Egal ob wissenschaftliche Artikel, Präsentationen oder Seminarunterlagen – einfach deine PDF-Dateien hochladen und dein persönlicher Chatbot verwandelt diese in eine interaktive Wissensquelle.
            </p>
            <br />

            <h2 style={{ fontStyle: 'italic', color: '#007BFF' }}>So funktioniert's:</h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>PDF-Dateien hochladen</strong>  
                <br />Navigiere zu unserem <strong>„Train“</strong>-Bereich und lade alle PDF-Dateien hoch, die du deinem Chatbot zur Verfügung stellen möchtest. Jedes Dokument wird automatisch in eine vektorbasierte Wissensdatenbank umgewandelt, die in deinem MongoDB Atlas Cluster gespeichert wird.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Intelligente Fragen und Antworten</strong>  
                <br />Nach dem Upload kannst du zur <strong>„QnA“-Sektion</strong> wechseln. Stelle nun deine Fragen in natürlicher Sprache. Der Chatbot analysiert die Inhalte der hochgeladenen PDFs und liefert dir präzise Antworten – als ob du mit einem Experten sprichst!
              </li>
              <li>
                <strong>Optimale Performance durch MongoDB Atlas</strong>  
                <br />Jede hochgeladene PDF wird in Vektoren umgewandelt, die effizient in einer leistungsstarken MongoDB Atlas-Datenbank gespeichert werden. Das ermöglicht schnelle Suchanfragen und präzise Antworten, selbst bei großen Dokumentmengen. So werden deine spezifischen Daten nahtlos mit den Fähigkeiten von Chat GPT kombiniert.
              </li>
            </ul>

            <br />

            <h2 style={{ fontStyle: 'italic', color: '#007BFF' }}>Warum StudyBuddy?</h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>Personalisierte Lernunterstützung</strong>: Erhalte Antworten, die spezifisch auf deine eigenen Inhalte abgestimmt sind.</li>
              <li><strong>Einfach und effizient</strong>: PDFs hochladen und sofort loslegen – keine komplizierte Einrichtung nötig.</li>
              <li><strong>Modernste KI-Technologie</strong>: Nutzt die leistungsstarke Retrieval-Augmented Generation (RAG), um aus großen Informationsmengen präzise und verständliche Antworten zu generieren.</li>
            </ul>

            <br />

            <h2 style={{ fontStyle: 'italic', color: '#007BFF' }}>Bereit, deine eigenen Lerninhalte zu aktivieren?</h2>
            <p style={{ textAlign: 'center' }}>
              Starte jetzt mit <strong>StudyBuddy</strong> und kreiere deinen persönlichen Lernassistenten. Einfach Daten hochladen, Fragen stellen und die Antworten direkt aus deinen eigenen PDFs erhalten!
            </p>
          </div>
        </div>

        {/* Bereich für den API-Schlüssel */}
        <div style={{ width: '35%', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>API-Schlüssel konfigurieren</h3>
          <p style={{ textAlign: 'center',  color: '#333' }}>Füge deinen OpenAI API-Schlüssel hinzu, um den vollen Funktionsumfang von StudyBuddy zu nutzen:</p>
          <label htmlFor="api-key-input" style={{ display: 'block', margin: '20px 0 10px', fontWeight: 'bold',  color: '#333' }}>OpenAI API Key:</label>
          <input
            type="text"
            id="api-key-input"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Deinen OpenAI-Schlüssel hier eingeben"
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '20px',  color: '#333'
            }}
          />
          <button 
            onClick={handleSaveKey} 
            style={{ 
              padding: '10px 20px', 
              width: '100%', 
              backgroundColor: '#007BFF', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            API-Schlüssel speichern
          </button>
          {apiKey && (
            <p style={{ marginTop: '20px', color: 'green', textAlign: 'center' }}>
              Gespeicherter API-Schlüssel: <strong>{apiKey.slice(0, 4)}...{apiKey.slice(-4)}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home;
