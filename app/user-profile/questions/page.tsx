import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import "./Page.scss"

const Question = () => {
  const topics = [
    {
      id: "javascript",
      title: "JavaScript"
    },
    {
      id: "css",
      title: "CSS"
    },
    {
      id: "html",
      title: "HTML"
    },
    {
      id: "kotlin",
      title: "Kotlin"
    },
    {
      id: "nodejs",
      title: "NodeJS"
    },
    {
      id: "react",
      title: "React"
    }
  ]

  return (
    <>
      <section className='question'>
        {/* Header  */}
        <div className='max-w-6xl mx-auto px-4 py-8'>
          <h1 className="text-5xl font-bold mb-2">Questions</h1>
          <p className="text-gray-500 mb-6 text-xl">
            Quizzes to help you test and improve your knowledge and skill up
          </p>
        </div>
        {/* End Header  */}

        {/* Body  */}
        <div className="bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map(topic => (
                <Link
                  href={`questions/${topic.id}`}
                  key={topic.id}
                  className="bg-white rounded-lg shadow p-4 hover:shadow-md transition cursor-pointer">
                  <h2 className="text-xl font-semibold">{topic.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* End Body  */}
      </section>
    </>
  )
}
export default Question;