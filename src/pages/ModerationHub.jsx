import { useState, useEffect } from 'react';
import { getContentList } from '../services/contentService';
import ReviewCard from '../components/Review/ReviewCard';

const ModerationHub = () => {
  const [contentList, setContentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await getContentList();
        setContentList(response.data);
      } catch (error) {
        console.error('Failed to fetch content:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, []);

  return (
    <div className="moderation-hub">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="content-list">
          {contentList.map((content) => (
            <ReviewCard key={content.id} content={content} />
          ))}
        </div>
      )}
    </div>
  );
};
