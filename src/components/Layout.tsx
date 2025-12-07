import React from 'react';
import { AppMode } from '../types';

interface LayoutProps {
    children: React.ReactNode;
    currentMode: AppMode;
    onNavigate: (mode: AppMode) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentMode, onNavigate }) => {
    return (
        <div className="layout-container">
            <header className="app-header">
                <button
                    className="home-button"
                    onClick={() => onNavigate(AppMode.HOME)}
                    aria-label="Go Home"
                >
                    <span style={{ fontSize: '1.5rem' }}>🏠</span> Clause Explorer
                </button>

                {currentMode !== AppMode.HOME && (
                    <div className="mode-indicator">
                        Current Mode: <strong>{currentMode}</strong>
                    </div>
                )}
            </header>

            <main className="app-main">
                {children}
            </main>

            <style>{`
        .layout-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .app-header {
          background: var(--color-surface);
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: var(--shadow-sm);
        }

        .home-button {
          background: none;
          font-weight: bold;
          font-size: 1.25rem;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
        }
        
        .home-button:hover {
          background: var(--color-background);
        }

        .app-main {
          flex: 1;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>
        </div>
    );
};
