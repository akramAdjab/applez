import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

export const cursor = new MouseFollower({
  container: document.body,
  speed: 0.3,
});

document.body.addEventListener("mouseenter", function () {
  const mediaQuery = window.matchMedia("(max-width: 900px)");

  if (mediaQuery.matches) cursor.hide();
  else cursor.show();
});
