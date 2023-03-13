import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Chat from "@/components/chat"

function App() {
  return (
    <div className="app">
       <Router>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
       </Router>
    </div>
  )
}

export default App
