import { useState } from "react";

type Tab = { label: string; content: React.ReactNode };

const Tabs = ({ tabs }: { tabs: Tab[] }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <nav>
        <ul role="tablist" className="flex gap-4 border-b">
          {tabs.map((tab, i) => (
            <li key={i} role="presentation">
              <button
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`py-2 px-4 ${
                  active === i
                    ? "border-b-2 border-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section role="tabpanel" className="p-4">
        {tabs[active].content}
      </section>
    </div>
  );
};
export default Tabs;
