import { useState } from "react";
import AccordionItem from "./components/AccordionItem";
import { faqs } from "./data/faqs";
import "./styles/App.css";

export default function App() {
  // tracks which item is open — null means all closed
  const [openId, setOpenId] = useState(null);

  function handleToggle(id) {
    setOpenId(prev => (prev === id ? null : id));
  }

  return (
    <div className="page">

      <div className="container">

        {/* header */}
        <div className="header">
          <p className="header-sub">FAQ</p>
          <h1 className="header-title">Common questions</h1>
          <p className="header-desc">
            Everything you wanted to know about anime but were afraid to ask.
          </p>
        </div>

        {/* accordion */}
        <div className="accordion">
          {faqs.map(item => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        {/* footer */}
        <p className="footer">
          useState · useEffect · useRef · smooth height animation
        </p>

      </div>
    </div>
  );
}