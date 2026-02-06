import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Metrics } from './components/Metrics';
import { Transactions } from './components/Transactions';
import { Configuration } from './components/Configuration';
import { Chat } from './components/Chat';
import { Login } from './components/Login';
import { View, User } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
  };

  const addUser = (name: string, pin: string, avatar: string, salary?: User['salary']) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      avatar,
      role: 'Admin', // Default role
      pin,
      salary
    };
    setUsers([...users, newUser]);
  };

  if (currentView === 'login') {
    return <Login onLogin={handleLogin} users={users} addUser={addUser} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setView={setCurrentView} />;
      case 'metrics':
        return <Metrics />;
      case 'transactions':
        return <Transactions />;
      case 'config':
        return <Configuration users={users} addUser={addUser} />;
      case 'chat':
        return <Chat />;
      default:
        return <Dashboard setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden">
      <Sidebar currentView={currentView} setView={setCurrentView} onLogout={handleLogout} user={currentUser} />
      <main className="flex-1 h-full w-full overflow-hidden flex flex-col">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;