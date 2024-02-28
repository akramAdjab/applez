import { useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";
import styled, { css } from "styled-components";

import { useDispatch } from "react-redux";
import { toggleIntroVideo } from "../redux/introVideoSlice";

import Button from "./Button";
import VideoLoadingAnimation from "./VideoLoadingAnimation";

const VideoContainer = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: var(--color-primary-950);
  overflow: hidden;

  display: grid;
  place-items: center;

  ${(props) =>
    props.$shadowColor &&
    css`
      & .video-container::before {
        background-color: ${props.$shadowColor};
      }
    `}

  & .video-container {
    width: 80%;

    display: flex;
    position: relative;

    &::before {
      content: "";
      width: 120%;
      height: 100%;
      border-radius: 100rem;
      /* background-color: #c39d9a; */
      /* background-color: #97989b; */
      opacity: 0.7;
      filter: blur(100rem);
      animation: shadowRotation 50s infinite;
      /* z-index: 2; */

      display: block;

      transform: translate(-50%, -50%) rotate(0);
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }

  & video {
    width: 100%;
    border-radius: var(--border-radius-lg);
    z-index: 1;
  }

  @media only screen and (max-height: 31.25em) {
    & .video-container {
      width: 75%;
    }
  }

  @media only screen and (max-width: 62.5em) {
    & .video-container {
      width: 90%;

      &::before {
        filter: blur(30rem);
      }
    }
  }

  @media only screen and (max-width: 31.25em) {
    & .video-container::before {
      filter: blur(18rem);
    }
  }

  @media only screen and (max-width: 25em) {
    & .video-container::before {
      filter: blur(15rem);
    }
  }

  @keyframes shadowRotation {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }

    to {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;

const StyledVideoPlayerControls = styled.div`
  color: var(--color-primary-50);
  z-index: 2;

  display: grid;
  place-items: center;

  position: absolute;
  top: var(--space-5);
  right: var(--space-5);

  & button {
    border: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    inset: 0;

    & svg {
      font-size: var(--text-4);
    }

    &:hover svg {
      fill: var(--color-grey-400);
      transition: all 0.2s;
    }
  }
`;

const StyledButton = styled(Button)`
  text-transform: capitalize;

  position: absolute;
  top: var(--space-5);
  right: var(--space-5);
`;

function IntroVideo({ path }) {
  const [isPaused, setIsPaused] = useState(true);
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const videoRef = useRef();

  const dispatch = useDispatch();

  const shadows = {
    iPhone_15_Pro: "#744e35",
    iPhone_15: "#c39d9a",
    MacBook_Pro: "#97989b",
    MacBook_Air: "#434d69",
    ["AirPods_Pro_(2nd_Gen)"]: "#565656",
  };

  useEffect(() => {
    if (isPaused) return;

    const currentTime = videoRef.current?.currentTime;
    let loadingTimeout;

    if (videoDuration !== null && currentTime !== null) {
      loadingTimeout = setTimeout(() => {
        if (videoProgress === currentTime / videoDuration) {
          setVideoProgress((prevValue) => prevValue + 0.00001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);
    }

    return () => clearTimeout(loadingTimeout);
  }, [isPaused, videoDuration, videoProgress]);

  useEffect(
    function () {
      const video = videoRef.current;

      if (!video) return;

      const { length } = video.buffered;

      if (!length) setIsLoadingVideo(true);
      else setIsLoadingVideo(false);
    },
    [videoRef.current?.buffered?.length]
  );

  function handlePlayPause() {
    const video = videoRef.current;

    if (video) {
      setIsPaused((isPaused) => !isPaused);
      isPaused ? video.play() : video.pause();
    }
  }

  return (
    <VideoContainer data-cursor="-inverse" $shadowColor={shadows[path]}>
      <StyledButton
        $variation="danger"
        $size="small"
        onClick={() => dispatch(toggleIntroVideo(false))}
      >
        Close
      </StyledButton>

      <div className="video-container">
        {isLoadingVideo && <VideoLoadingAnimation />}

        {!isLoadingVideo && (
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={handlePlayPause}
          />
        )}

        <video
          data-cursor="-hidden"
          poster={`/assets/trailers/${path}__trailer/${path}__thumbnail.jpeg`}
          ref={videoRef}
          onLoadedMetadata={() => setVideoDuration(videoRef.current.duration)}
          preload="metadata"
        >
          <source
            src={`/assets/trailers/${path}__trailer/${path}.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </VideoContainer>
  );
}

function VideoPlayerControls({
  progress,
  isPaused,
  onPlayPause,
  size = 48,
  width = 3,
}) {
  const center = size / 2;
  const radius = Math.abs(center - width);
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <StyledVideoPlayerControls data-cursor="-hidden">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#6b7280"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#f7fbff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>

      <button onClick={onPlayPause}>
        {isPaused ? (
          <HiPlay className="video__play-icon" />
        ) : (
          <HiPause className="video__pause-icon" />
        )}
      </button>
    </StyledVideoPlayerControls>
  );
}

export default IntroVideo;
