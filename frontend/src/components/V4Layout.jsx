import { useEffect } from "react";
import V4Sidebar from "@/components/V4Sidebar";

/* Shared layout for all v4 pages — sidebar + main column. */

export default function V4Layout({ title, children }) {
  useEffect(() => {
    if (title) document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="v4-root" data-testid="v4-root">
      <V4Sidebar />
      <main className="v4-main">
        <div className="v4-page">{children}</div>
      </main>
    </div>
  );
}
