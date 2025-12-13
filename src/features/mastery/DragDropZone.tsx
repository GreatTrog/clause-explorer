import React, { useState } from 'react';
import type { DragDropQuestion, GrammarCategory } from '../../data/masteryQuestions';
import { getClauseDisplayName } from '../../types';

interface DragDropZoneProps {
  question: DragDropQuestion;
  onComplete: (isSuccess: boolean) => void;
}

export const DragDropZone: React.FC<DragDropZoneProps> = ({ question, onComplete }) => {
  // Store items that have been placed: { [itemId]: zoneType }
  const [placedItems, setPlacedItems] = useState<Record<string, GrammarCategory>>({});

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, zone: GrammarCategory) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');

    if (id) {
      // Check if item is already placed? If so, we move it.
      setPlacedItems(prev => {
        const next = { ...prev, [id]: zone };

        // Check completion immediately
        const allPlaced = question.items.every(item => next[item.id]);
        if (allPlaced) {
          // Verify correctness
          // We need to defer this slightly so state updates/render happens first? 
          // Or perform logic here.
          const incorrectCount = question.items.filter(item => next[item.id] !== item.category).length;
          // Trigger onComplete after small delay to show visual snap
          setTimeout(() => onComplete(incorrectCount === 0), 500);
        }

        return next;
      });
    }
  };

  return (
    <div className="drag-drop-game">
      <div className="items-pool">
        {question.items.map(item => {
          if (placedItems[item.id]) return null; // Hide if placed
          return (
            <div
              key={item.id}
              className="draggable-item"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
              {item.text}
            </div>
          );
        })}
        {question.items.every(i => placedItems[i.id]) && <div className="placeholder">All sorted!</div>}
      </div>

      <div className="zones-container">
        {question.zones.map(zone => (
          <div
            key={zone}
            className="drop-zone"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, zone)}
          >
            <h3>{getClauseDisplayName(zone as any)}</h3>
            <div className="zone-items">
              {question.items.filter(i => placedItems[i.id] === zone).map(item => (
                <div
                  key={item.id}
                  className="draggable-item placed"
                  draggable // Allow moving back out or between zones? For simplicity, yes.
                  onDragStart={(e) => handleDragStart(e, item.id)}
                >
                  {item.text}
                </div>
              ))}
              {question.items.filter(i => placedItems[i.id] === zone).length === 0 && (
                <div className="drop-hint">Drop here</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .drag-drop-game {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .items-pool {
          background: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          min-height: 80px;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }

        .draggable-item {
          background: white;
          border: 2px solid var(--color-primary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-weight: bold;
          box-shadow: var(--shadow-sm);
          cursor: grab;
          user-select: none;
        }
        
        .draggable-item:active {
            cursor: grabbing;
        }

        .draggable-item.placed {
            border-style: solid; /* Keep solid look when placed */
            background: #EFF6FF;
            border-color: #BFDBFE;
        }

        .zones-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .drop-zone {
          flex: 1;
          background: var(--color-background);
          border: 2px dashed #9CA3AF;
          border-radius: var(--radius-md);
          padding: 1rem;
          min-height: 250px;
          text-align: center;
          transition: background 0.2s;
        }

        .drop-zone:hover {
             /* Maybe highlight on drag over? native :hover works nicely here too */
        }

        .drop-zone h3 {
          font-size: 1rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          pointer-events: none;
        }

        .zone-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
          min-height: 100px; /* Ensure drop target area is big enough */
        }

        .drop-hint {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          opacity: 0.5;
          margin-top: 2rem;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
