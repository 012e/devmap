"use client"

import { Button, Tabs } from 'antd';
import "./Page.scss";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getGroupRoadMap } from '@/services/GroupRoadMapServices';
import { TypeGroupRoadMap } from '@/lib/definitions';


const AllRoadMap = () => {

  const [groups, setGroups] = useState<TypeGroupRoadMap[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getGroupRoadMap();
      setGroups(response);
    }
    fetchApi();
  }, []);

  return (
    <>
      {/* Developer Roadmaps  */}
      <div className="developer-roadmap">
        <h1 className="developer-roadmap__title">Developer Roadmaps</h1>
        <p className="developer-roadmap__desc">Browse the ever-growing list of up-to-date, community driven roadmaps</p>
        <div className="developer-roadmap__tool">
          <Button className="developer-roadmap__tool--draw" variant="solid">Draw your own roadmap</Button>
          <Button className="developer-roadmap__tool--ai" variant="solid">Generate Roadmaps with AI</Button>
        </div>
      </div>
      {/* Developer Roadmaps  */}

      {/* All Roadmaps  */}
      <div className='all-roadmaps'>
        <Tabs
          tabPosition="left"
          items={[
            {
              label: 'All Roadmaps',
              key: 'all',
              children: (
                <>
                  <div className='tab-content__title'>All Roadmaps</div>
                  <div className='tab-content__title'>
                    {groups.flatMap(group =>
                      group.roadmaps.map(item => (
                        <Link href={`/roadmaps/${item.id}`} key={item.id}>
                          <Button className="tab-content__body--item">{item.title}</Button>
                        </Link>
                      ))
                    )}
                  </div>
                </>
              ),
            },
            ...groups.map((group) => ({
              label: group.label,
              key: group.id,
              children: (
                <>
                  <div className='tab-content__title'>{group.label}</div>
                  <div className='tab-content__body'>
                    {group.roadmaps.map(item => (
                      <Link href={`/roadmaps/${item.id}`} key={item.id}>
                        <Button className="tab-content__body--item">{item.title}</Button>
                      </Link>
                    ))}
                  </div>
                </>
              ),
            }))
          ]}
        />
      </div>
      {/* End All Roadmaps  */}
    </>
  )
}
export default AllRoadMap;