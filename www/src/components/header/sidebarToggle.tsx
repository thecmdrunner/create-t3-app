/** @jsxImportSource preact */
import type { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";

const MenuToggle: FunctionalComponent = () => {
  const [sidebarShown, setSidebarShown] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const body = document.querySelector("body")!;
    if (sidebarShown) {
      body.classList.add("mobile-sidebar-toggle");
    } else {
      body.classList.remove("mobile-sidebar-toggle");
    }
  }, [sidebarShown]);

  return (
    <button
      type="button"
      aria-pressed={sidebarShown ? "true" : "false"}
      id="menu-toggle"
      onClick={() => setSidebarShown(!sidebarShown)}
      className="z-20 text-slate-900 stroke-slate-900 block md:hidden dark:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.7em"
        height="1.7em"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span className="sr-only">Toggle sidebar</span>
    </button>
  );
};

export default MenuToggle;
