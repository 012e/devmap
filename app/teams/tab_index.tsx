import React from "react";
import ImagePage from "./image_page";
const list = [
  {
    id: 0,
    content: (
      <div>
        <span className="font-bold">Powerful editor </span>
        <span>to create custom roadmaps and other trackable documents</span>
      </div>
    ),
    title: "Roapmap Editor",
    link: "roadmap-editor.png",
  },
  {
    id: 1,
    content: (
      <div>
        <span>You and your team can </span>
        <span className="font-bold">track progress </span>
        <span>on the roadmaps</span>
      </div>
    ),
    title: "Invite Members",
    link: "update-progress.png",
  },
  {
    id: 2,
    content: (
      <div>
        <span>Invite your </span>
        <span className="font-bold">team members and assign roles</span>
      </div>
    ),
    title: "Track Progress",
    link: "invite-members.png",
  },
  {
    id: 3,
    content: (
      <div>
        <span>Keep an eye on the team progress through </span>
        <span className="font-bold">team dashboards</span>
      </div>
    ),
    title: "Team Dashboard",
    link: "team-dashboard.png",
  },
  {
    id: 4,
    content: (
      <div>
        <span>Create as many </span>
        <span className="font-bold">roadmaps or trackable documents </span>
        <span>as you want</span>
      </div>
    ),
    title: "Roadmaps and Documents",
    link: "many-roadmaps.png",
  },
  {
    id: 5,
    content: (
      <div>
        <span>Create custom roadmaps or customize </span>
        <span className="font-bold">community roadmaps </span>
        <span>to fit your needs</span>
      </div>
    ),
    title: "Community Roadmaps",
    link: "our-roadmaps.png",
  },
  {
    id: 6,
    content: (
      <div>
        <span>Share a roadmap or trackable document with everyone or </span>
        <span className="font-bold">specific people</span>
      </div>
    ),
    title: "Sharing Settings",
    link: "sharing-settings.png",
  },
  {
    id: 7,
    content: <span className="font-bold">We have a lot more coming soon!</span>,
    description:
      "Register your team now and help us shape the future of teams in roadmap.sh!",
    title: "More Comming Soon",
  },
];
export default function TabIndex() {
  const [current, setCurrent] = React.useState(0);
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-row space-x-2 ">
        {list.map((item, index) => {
          if (item.id === current) {
            if (current === 7) {
              return (
                <div key={item.id}>
                  <span className="bg-black text-white hover:bg-gray-800 px-2 pb-0.5 rounded-2xl">
                    {item.title}
                  </span>
                </div>
              );
            } else {
              return (
                <div key={item.id}>
                  <span className="bg-black text-white hover:bg-gray-800 px-2 pb-0.5 rounded-2xl">
                    {item.title}
                  </span>
                </div>
              );
            }
          } else {
            return (
              <span
                className="relative flex items-center"
                key={item.id}
                onClick={() => setCurrent(item.id)}
              >
                <span className="z-50 cursor-pointer rounded-full p-[6px] bg-gray-300 hover:bg-gray-400"></span>
              </span>
            );
          }
        })}
      </div>
      <div>
        {list.map((item, index) => {
          if (item.id === current) {
            return (
              <div key={item.id}>
                <ImagePage
                  content={item.content}
                  image={item.link}
                  descr={item.description}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
