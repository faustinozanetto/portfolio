import React from 'react';

const LayoutFooter: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-center">
      <div className="flex flex-col items-center justify-center">
        <span className="text-md font-bold">Made with ❤️ from Argetina 🇦🇷</span>
        <span className="text-sm font-bold">© 2022 Faustino Zanetto. All rights reserved</span>
      </div>
    </footer>
  );
};

export default LayoutFooter;
