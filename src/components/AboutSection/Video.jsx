"use client";

const Video = () => {
  const handlePlay = (e) => {
    e.preventDefault();
    const video = e.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <video
      controls="controls"
      preload="none"
      poster="/images/home-about-video-preview.jpg"
      onClick={handlePlay}
      style={{ cursor: "pointer" }}
    >
      <source
        src="/videos/visota.mp4"
        type="video/mp4"
        codecs="avc1.42E01E, mp4a.40.2"
      />
    </video>
  );
};

export default Video;
