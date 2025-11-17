import React from "react";

export function AuthShell({ children }) {
  return (
    <main className="tl-auth-background">
      <section className="tl-auth-card">
        {children}
      </section>
    </main>
  );
}
