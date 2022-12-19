import React from 'react';

const LayoutFooter: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-neutral-100 p-6 text-center text-neutral-900 drop-shadow-md dark:bg-neutral-900 dark:text-neutral-100 sm:p-8">
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold">Made with ❤️ from Argetina 🇦🇷</span>
        <span className="text-sm font-semibold">© 2022 Faustino Zanetto. All rights reserved</span>
      </div>
    </footer>
  );
};

export default LayoutFooter;
