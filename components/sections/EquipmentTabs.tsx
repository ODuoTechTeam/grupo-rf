"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconCrane,
  IconShieldCheck,
  IconTools,
  IconArrowBadgeUp,
} from "@tabler/icons-react";
import EquipmentCard from "@/components/cards/EquipmentCard";
import { locacaoEquipments, type Equipment } from "@/data/equipment";

type IconType = React.ComponentType<{ className?: string }>;

interface Tab {
  id: string;
  label: string;
  icon: IconType;
  items: Equipment[];
}

const tabs: Tab[] = [
  {
    id: "plataformas",
    label: "Plataformas",
    icon: IconCrane,
    items: locacaoEquipments.filter((e) =>
      ["balancim-eletrico", "andaime-fachadeiro", "cadeirinha-cabo-aco"].includes(e.slug)
    ),
  },
  {
    id: "transporte",
    label: "Transporte",
    icon: IconArrowBadgeUp,
    items: locacaoEquipments.filter((e) =>
      ["elevador-cremalheira", "mini-grua", "icamento"].includes(e.slug)
    ),
  },
  {
    id: "protecoes",
    label: "Proteções",
    icon: IconShieldCheck,
    items: locacaoEquipments.filter((e) =>
      ["protecoes-coletivas"].includes(e.slug)
    ),
  },
  {
    id: "ferramentas",
    label: "Ferramentas",
    icon: IconTools,
    items: locacaoEquipments.filter((e) =>
      ["equipamentos-diversos"].includes(e.slug)
    ),
  },
];

// Also provide an "all" view
const allTab: Tab = {
  id: "todos",
  label: "Todos",
  icon: IconCrane,
  items: locacaoEquipments,
};

export default function EquipmentTabs() {
  const [activeTab, setActiveTab] = useState("todos");

  const currentItems =
    activeTab === "todos"
      ? allTab.items
      : tabs.find((t) => t.id === activeTab)?.items || [];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <TabButton
          active={activeTab === "todos"}
          onClick={() => setActiveTab("todos")}
          label="Todos"
          count={allTab.items.length}
        />
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              icon={<Icon className="w-4 h-4" />}
              label={tab.label}
              count={tab.items.length}
            />
          );
        })}
      </div>

      {/* Equipment grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentItems.map((equip) => (
            <EquipmentCard
              key={equip.slug}
              title={equip.title}
              description={equip.description}
              icon={equip.icon}
              href={equip.href}
              badge={equip.badge}
              features={equip.features}
              image={equip.image}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
        ${
          active
            ? "bg-primary-medium text-white shadow-md shadow-primary-medium/20"
            : "bg-white text-text-light border border-gray-200 hover:border-primary-medium/30 hover:text-primary-medium"
        }
      `}
    >
      {icon}
      {label}
      <span
        className={`
          text-xs px-1.5 py-0.5 rounded-full
          ${active ? "bg-white/20 text-white" : "bg-gray-100 text-text-medium"}
        `}
      >
        {count}
      </span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-primary-medium rounded-full -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
    </button>
  );
}
