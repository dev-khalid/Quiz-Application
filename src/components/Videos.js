import React, { useState } from 'react';
import Video from './Video';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import useVideoList from '../hooks/useVideoList';
const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <NavLink
                to={`/quiz/${video.youtubeID}`}
                state={{ x: 'something', videoTitle: video.title }}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </NavLink>
            ) : (
              <Video
                key={`${video.youtubeID}123`}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;
