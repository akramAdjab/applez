import styled from "styled-components";

const StyledVideoLoadingAnimation = styled.div`
  & {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-lg);
    background-color: #02040899;
    z-index: 999;

    display: grid;
    place-items: center;

    position: absolute;
    top: 0;
    left: 0;
  }

  .i {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .i div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .i div:nth-child(2) {
    animation-delay: -0.8s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

function VideoLoadingAnimation() {
  return (
    <StyledVideoLoadingAnimation>
      <div className="i">
        <div></div>
        <div></div>
      </div>
    </StyledVideoLoadingAnimation>
  );
}

export default VideoLoadingAnimation;
