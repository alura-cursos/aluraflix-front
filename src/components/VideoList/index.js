/* eslint-disable react/prop-types */
import React from 'react';
import { VideoCardContainer, VideoCard } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoList({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer>
      <VideoCard
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'grey' }}
        title={videoTitle}
      >
        <h2>{videoTitle}</h2>
      </VideoCard>
    </VideoCardContainer>
  );
}

export default VideoList;
