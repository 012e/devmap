"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const TopicPage = () => {

  // const { topic } = useParams();
  // const [topics, setTopics] = useState<TypeTopic[]>([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const response = await getListTopic();
  //     setTopics(response);
  //   }
  //   fetchApi();
  // }, []);

  return (
    <>
      <div className='max-w-4xl mx-auto px-4 py-8 items-center text-center'>
        {/* Header  */}
        <div className='max-w-4xl mx-auto px-4 py-8 items-center text-center'>
          <h1 className="text-5xl font-bold mb-2">Title</h1>
          <p className="text-gray-500 mb-6 text-xl ">
            Test, rate and improve your knowledge with these questions.
          </p>
        </div>
        {/* End Header  */}

        {/* Body  */}
        <div className="rounded-xl h-120 border border-gray-200" >
          <div className="max-w-6xl mx-auto px-4 py-8" >
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur modi doloribus porro, in, necessitatibus tempora debitis blanditiis reprehenderit facilis qui fugit neque repellat harum rerum accusantium, perferendis incidunt ad?
            </div>
          </div>
        </div>

        {/* End Body  */}
      </div>
    </>
  )
}
export default TopicPage;