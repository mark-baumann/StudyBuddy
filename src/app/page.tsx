import React from 'react'
import NavBar from './component/navbar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='overview-text'>

        <h1 style={{ fontWeight: 'bold', fontSize: '2em' }}>StudyBuddy: Dein KI-basierter Lernassistent</h1>
        <br />
        
        <p>
          Mit <strong>StudyBuddy</strong>, einer fortschrittlichen RAG (Retrieval-Augmented Generation) Anwendung, kannst du deinen eigenen, personalisierten Chatbot erschaffen, der gezielt auf deine hochgeladenen Inhalte eingeht. Egal ob wissenschaftliche Artikel, Präsentationen oder Seminarunterlagen – einfach deine PDF-Dateien hochladen und dein persönlicher Chatbot verwandelt diese in eine interaktive Wissensquelle.
        </p>
        <br />

        <h2 style={{ fontStyle: 'italic' }}>So funktioniert's:</h2>
        <ul>
          <li><strong>PDF-Dateien hochladen</strong>  
            <br/>Navigiere zu unserem <strong>„Train“</strong>-Bereich und lade alle PDF-Dateien hoch, die du deinem Chatbot zur Verfügung stellen möchtest. Jedes Dokument wird automatisch in eine vektorbasierte Wissensdatenbank umgewandelt, die in deinem MongoDB Atlas Cluster gespeichert wird.</li>
          <br/>
          <li><strong>Intelligente Fragen und Antworten</strong>  
            <br/>Nach dem Upload kannst du zur <strong>„QnA“-Sektion</strong> wechseln. Stelle nun deine Fragen in natürlicher Sprache. Der Chatbot analysiert die Inhalte der hochgeladenen PDFs und liefert dir präzise Antworten – als ob du mit einem Experten sprichst!</li>
          <br/>
          <li><strong>Optimale Performance durch MongoDB Atlas</strong>  
            <br/>Jede hochgeladene PDF wird in Vektoren umgewandelt, die effizient in einer leistungsstarken MongoDB Atlas-Datenbank gespeichert werden. Das ermöglicht schnelle Suchanfragen und präzise Antworten, selbst bei großen Dokumentmengen. So werden deine spezifischen Daten nahtlos mit den Fähigkeiten von Chat GPT kombiniert.</li>
        </ul>

        <br />

        <h2 style={{ fontStyle: 'italic' }}>Warum StudyBuddy?</h2>
        <ul>
          <li><strong>Personalisierte Lernunterstützung</strong>: Erhalte Antworten, die spezifisch auf deine eigenen Inhalte abgestimmt sind.</li>
          <li><strong>Einfach und effizient</strong>: PDFs hochladen und sofort loslegen – keine komplizierte Einrichtung nötig.</li>
          <li><strong>Modernste KI-Technologie</strong>: Nutzt die leistungsstarke Retrieval-Augmented Generation (RAG), um aus großen Informationsmengen präzise und verständliche Antworten zu generieren.</li>
        </ul>

        <br />

        <h2 style={{ fontStyle: 'italic' }}>Bereit, deine eigenen Lerninhalte zu aktivieren?</h2>
        <p>Starte jetzt mit <strong>StudyBuddy</strong> und kreiere deinen persönlichen Lernassistenten. Einfach Daten hochladen, Fragen stellen und die Antworten direkt aus deinen eigenen PDFs erhalten!</p>
      </div>
    </div>
  )
}

export default Home
