const moveUp = (delay: number, duration: number, damping?: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
  };
};

const moveRight = (delay: number, duration: number, damping?: number) => {
  return {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
  };
};

const moveLeft = (delay: number, duration: number, damping?: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
  };
};

const moveDown = (delay: number, duration: number, damping?: number) => {
  return {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 90,
        damping: 10,
      },
    },
  };
};

const scaleUp = (delay: number, duration: number, damping?: number) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 260,
        damping: damping ? damping : 15,
      },
    },
  };
};

export { moveUp, moveRight, moveLeft, moveDown, scaleUp };
