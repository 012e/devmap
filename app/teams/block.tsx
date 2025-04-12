import {
  AlertTriangle,
  BarChart,
  BookOpen,
  PieChart,
  TreePine,
  UserPlus,
} from "lucide-react";
import React from "react";

type BlockProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function Block({ icon, title, description }: BlockProps) {
  return (
    <div className="border rounded-2xl p-6 hover:shadow-md transition duration-200">
      {icon}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: <TreePine size={40} />,
    title: "Growth plans",
    description: "Prepare shared or individual growth plans for members.",
  },
  {
    icon: <BarChart size={40} />,
    title: "Progress tracking",
    description: "Track and compare the progress of team members.",
  },
  {
    icon: <UserPlus size={40} />,
    title: "Onboarding",
    description: "Prepare onboarding plans for new team members.",
  },
  {
    icon: <PieChart size={40} />,
    title: "Team insights",
    description: "Get insights about your team skills, progress and more.",
  },
  {
    icon: <AlertTriangle size={40} />,
    title: "Skill gap analysis",
    description: "Understand the skills of your team and identify gaps.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Documentation",
    description: "Create and share visual team documentation.",
  },
];

export default function ListBlock() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Block key={index} {...feature} />
      ))}
    </div>
  );
}
