import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TicketForm from "./components/TicketForm";
import Ticketgenerater from "./components/Ticketgenerater";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TicketForm />} />
        <Route path="/ticket" element={<Ticketgenerater />} />
      </Routes>
    </Router>
  );
}

export default App;
