import {
  orderByKey,
  startAt,
  limitToFirst,
  get,
  ref,
  query,
  getDatabase,
} from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    //er moddhe ekhon data get korte hobe .
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, 'videos');
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt('' + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        setLoading(false); 

        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
