import React, { useState } from 'react';
import './FAQComponent.css';

const FAQComponent = ({ faqs = [] }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const isExpanded = (id) => expandedItems.has(id);

  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>

      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-card">
          <div className="faq-number">Pregunta {index + 1}</div>

          <div className="faq-header" onClick={() => toggleExpanded(faq.id)}>
            <h3 className="question">{faq.pregunta}</h3>
            <div className={`expand-icon ${isExpanded(faq.id) ? 'expanded' : ''}`}>+</div>
          </div>

          <div className={`answer-container ${isExpanded(faq.id) ? 'expanded' : 'collapsed'}`}>
            <p className="answer">{faq.respuesta}</p>
          </div>
        </div>
      ))}

      {faqs.length === 0 && (
        <div className="faq-card">
          <p className="no-faqs">No hay preguntas frecuentes disponibles en este momento.</p>
        </div>
      )}
    </div>
  );
};

export default FAQComponent;