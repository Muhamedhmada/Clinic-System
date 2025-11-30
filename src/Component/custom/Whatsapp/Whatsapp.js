import { useState } from 'react';
import { WhatsappReal } from '../../../Assets/SVGS'
import './Whatsapp.css'
function Whatsapp(){
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return(
    <div className="whatsapp-container"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: "60px",
        height: "60px",
        background: "#3498db",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "28px",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none"
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      
    >
      <div className="icon"
      
      >
        <a href="tel:+201000473458">
          <WhatsappReal/>
        </a>
      </div>
    </div>
  )
}
export default Whatsapp