"use client"
import { useParams } from 'next/navigation';

const TopicPage = () => {
  const { topic } = useParams();
  return (
    <>
      <div>Chu de {topic}</div>
    </>
  )
}
export default TopicPage;