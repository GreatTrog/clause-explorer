import { useState } from 'react';
import { Layout } from './components/Layout';
import { ModeSelection } from './features/home/ModeSelection';
import { LearnContainer } from './features/learn/LearnContainer';
import { PracticeContainer } from './features/practice/PracticeContainer';
import { MasteryContainer } from './features/mastery/MasteryContainer';
import { GameStateProvider } from './context/GameStateContext';
import { AppMode } from './types';

function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>(AppMode.HOME);

  const renderContent = () => {
    switch (currentMode) {
      case AppMode.LEARN:
        return <LearnContainer onComplete={() => setCurrentMode(AppMode.HOME)} />;
      case AppMode.PRACTICE:
        return <PracticeContainer />;
      case AppMode.MASTERY:
        return <MasteryContainer />;
      case AppMode.HOME:
      default:
        return <ModeSelection onSelectMode={setCurrentMode} />;
    }
  };

  return (
    <GameStateProvider>
      <Layout currentMode={currentMode} onNavigate={setCurrentMode}>
        {renderContent()}
      </Layout>
    </GameStateProvider>
  );
}

export default App;
