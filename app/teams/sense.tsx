import { Check } from "lucide-react";
import { Content } from "next/font/google";
import React from "react";
type Props = {
  icon: React.ElementType;
};
const IconCheck = ({ icon: Icon }: Props) => <Icon size={20} />;
export function Sense({ text }: { text: String }) {
  return (
    <p className="flex items-center gap-2">
      <IconCheck icon={Check} />
      {text}
    </p>
  );
}
const senses = [
  {
    content: "Create custom roadmaps for your team",
  },
  {
    content: "Plan, track and document your team's skills and growth",
  },
  {
    content: "Invite your team members",
  },
  {
    content: "Get insights on your team's skills and growth",
  },
];
export default function ListSense() {
  return (
    <div className="space-y-2">
      {senses.map((sense, index) => (
        <Sense text={sense.content} key={index}></Sense>
      ))}
    </div>
  );
}
