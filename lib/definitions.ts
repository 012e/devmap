
export type TypeTopic = {
  id: string,
  title: string
};

export type TypeRoadmap = {
  id: string;
  title: string;
};

export type TypeGroupRoadMap = {
  id: string;
  label: string;
  roadmaps: TypeRoadmap[];
};