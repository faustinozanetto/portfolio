import React from 'react';

const LayoutFooter: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-background-100 p-6 text-center text-neutral-900 dark:bg-background-900 dark:text-neutral-100 md:p-8">
      <div className="flex flex-col items-center justify-center my-4 md:my-6">
        <span className="font-semibold">Made with ❤️ from Argetina 🇦🇷</span>
        <span className="text-sm font-semibold">© 2023 Faustino Zanetto. All rights reserved</span>
      </div>
    </footer>
  );
};

export default LayoutFooter;
