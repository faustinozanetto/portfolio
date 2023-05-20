import React from 'react';

const LayoutFooter: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-background-100 p-6 text-center text-neutral-900 drop-shadow-md dark:bg-background-900 dark:text-neutral-100 md:p-8">
      <hr className="mb-8 w-full border-[1px] border-neutral-200 dark:border-neutral-800"></hr>
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold">Made with ❤️ from Argetina 🇦🇷</span>
        <span className="text-sm font-semibold">© 2022 Faustino Zanetto. All rights reserved</span>
      </div>
    </footer>
  );
};

export default LayoutFooter;
