import { type FC } from "react";

type Tab = { label: string; content: React.ReactNode };

type TabsProps = {
  tabs: Tab[];
  activeIndex: number;
  onTabChange: (index: number) => void;
};

const Tabs: FC<TabsProps> = ({ tabs, activeIndex, onTabChange }) => {
  return (
    <div>
      <nav>
        <ul role="tablist" className="flex gap-4 text-lg mb-6">
          {tabs.map((tab, i) => (
            <li key={i} role="presentation">
              <button
                role="tab"
                onClick={() => onTabChange(i)}
                className={`py-2 px-4 ${
                  activeIndex === i
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

      <section role="tabpanel">{tabs[activeIndex].content}</section>
    </div>
  );
};

export default Tabs;
