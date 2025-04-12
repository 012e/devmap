
import { Button, Tabs } from 'antd';
import "./Page.scss";
import Link from 'next/link';
const Test = () => {

  const groups = [
    {
      "id": "absolute-beginners",
      "label": "Absolute Beginners",
      "roadmaps": [
        { "id": "frontend-beginner", "title": "Frontend Beginner" },
        { "id": "backend-beginner", "title": "Backend Beginner" },
        { "id": "devops-beginner", "title": "DevOps Beginner" }
      ]
    },
    {
      "id": "web-development",
      "label": "Web Development",
      "roadmaps": [
        { "id": "frontend", "title": "Frontend" },
        { "id": "backend", "title": "Backend" },
        { "id": "fullstack", "title": "Full Stack" },
        { "id": "api-design", "title": "API Design" }
      ]
    },
    {
      "id": "frameworks",
      "label": "Frameworks",
      "roadmaps": [
        { "id": "react", "title": "React" },
        { "id": "vue", "title": "Vue" },
        { "id": "angular", "title": "Angular" },
        { "id": "spring-boot", "title": "Spring Boot" }
      ]
    },
    {
      "id": "languages-platforms",
      "label": "Languages / Platforms",
      "roadmaps": [
        { "id": "javascript", "title": "JavaScript" },
        { "id": "typescript", "title": "TypeScript" },
        { "id": "php", "title": "PHP" },
        { "id": "java", "title": "Java" }
      ]
    }
  ]

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
export default Test;