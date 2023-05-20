import React from 'react';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className="my-4 md:my-8">{children}</div>;
}
