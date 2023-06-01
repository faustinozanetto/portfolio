const HighlightedWord: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="font-bold text-primary-600 dark:text-primary-300">{children}</span>;
};

export default HighlightedWord;
