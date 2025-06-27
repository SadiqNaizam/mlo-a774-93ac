import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-start">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Lock className="h-5 w-5 text-primary" />
          <span>SwiftSign</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;