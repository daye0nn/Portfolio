import gsap from "gsap";

//3d text effect
export const textAni = (target, options = {}) => {
  return gsap.fromTo(
    target,
    {
      yPercent: 110,
      rotateX: -45,
      opacity: 0,
      transformOrigin: "0% 50% -100%",
      transformStyle: "preserve-3d",
    },
    {
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      transformOrigin: "50% 50%",
      duration: 1.2,
      ease: "power3.out",
      ...options,
    }
  );
};
