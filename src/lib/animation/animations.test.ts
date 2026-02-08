import { describe, expect, it } from "vitest";
import {
  DEFAULT_VIEWPORT,
  DELAYS,
  DURATIONS,
  fadeVariants,
  infiniteAnimations,
  scaleVariants,
  TRANSITIONS,
} from "./animations";

describe("Animation Constants", () => {
  describe("DURATIONS", () => {
    it("has all expected duration values", () => {
      expect(DURATIONS).toHaveProperty("fast");
      expect(DURATIONS).toHaveProperty("standard");
      expect(DURATIONS).toHaveProperty("slow");
      expect(DURATIONS).toHaveProperty("infinite");
    });

    it("has positive numeric values", () => {
      expect(DURATIONS.fast).toBeGreaterThan(0);
      expect(DURATIONS.standard).toBeGreaterThan(0);
      expect(DURATIONS.slow).toBeGreaterThan(0);
      expect(DURATIONS.infinite).toBeGreaterThan(0);
    });

    it("has durations in correct order", () => {
      expect(DURATIONS.fast).toBeLessThan(DURATIONS.standard);
      expect(DURATIONS.standard).toBeLessThan(DURATIONS.slow);
      expect(DURATIONS.slow).toBeLessThan(DURATIONS.infinite);
    });
  });

  describe("DELAYS", () => {
    it("has all expected delay values", () => {
      expect(DELAYS).toHaveProperty("none");
      expect(DELAYS).toHaveProperty("short");
      expect(DELAYS).toHaveProperty("medium");
      expect(DELAYS).toHaveProperty("standard");
      expect(DELAYS).toHaveProperty("long");
    });

    it("has non-negative numeric values", () => {
      expect(DELAYS.none).toBeGreaterThanOrEqual(0);
      expect(DELAYS.short).toBeGreaterThanOrEqual(0);
      expect(DELAYS.medium).toBeGreaterThanOrEqual(0);
      expect(DELAYS.standard).toBeGreaterThanOrEqual(0);
      expect(DELAYS.long).toBeGreaterThanOrEqual(0);
    });

    it("has delays in correct order", () => {
      expect(DELAYS.none).toBe(0);
      expect(DELAYS.short).toBeLessThan(DELAYS.medium);
      expect(DELAYS.medium).toBeLessThan(DELAYS.standard);
      expect(DELAYS.standard).toBeLessThan(DELAYS.long);
    });
  });

  describe("DEFAULT_VIEWPORT", () => {
    it("has once property set to true", () => {
      expect(DEFAULT_VIEWPORT.once).toBe(true);
    });

    it("is an object with correct structure", () => {
      expect(typeof DEFAULT_VIEWPORT).toBe("object");
      expect(DEFAULT_VIEWPORT).not.toBeNull();
    });
  });

  describe("TRANSITIONS", () => {
    it("has all expected transition types", () => {
      expect(TRANSITIONS).toHaveProperty("standard");
      expect(TRANSITIONS).toHaveProperty("fast");
      expect(TRANSITIONS).toHaveProperty("slow");
      expect(TRANSITIONS).toHaveProperty("spring");
      expect(TRANSITIONS).toHaveProperty("springBouncy");
    });

    it("standard transition has correct duration", () => {
      expect(TRANSITIONS.standard.duration).toBe(DURATIONS.standard);
    });

    it("fast transition has correct duration", () => {
      expect(TRANSITIONS.fast.duration).toBe(DURATIONS.fast);
    });

    it("slow transition has correct duration", () => {
      expect(TRANSITIONS.slow.duration).toBe(DURATIONS.slow);
    });

    it("spring transition has correct properties", () => {
      expect(TRANSITIONS.spring.type).toBe("spring");
      expect(TRANSITIONS.spring.stiffness).toBe(100);
      expect(TRANSITIONS.spring.damping).toBe(10);
    });

    it("springBouncy transition has correct properties", () => {
      expect(TRANSITIONS.springBouncy.type).toBe("spring");
      expect(TRANSITIONS.springBouncy.stiffness).toBe(260);
      expect(TRANSITIONS.springBouncy.damping).toBe(20);
    });
  });
});

describe("Fade Variants", () => {
  describe("fadeUp", () => {
    it("has correct initial state", () => {
      expect(fadeVariants.fadeUp.initial).toEqual({ opacity: 0, y: 30 });
    });

    it("has correct animate state", () => {
      expect(fadeVariants.fadeUp.animate).toEqual({ opacity: 1, y: 0 });
    });

    it("has transition", () => {
      expect(fadeVariants.fadeUp.transition).toBeDefined();
    });
  });

  describe("fadeDown", () => {
    it("has correct initial state", () => {
      expect(fadeVariants.fadeDown.initial).toEqual({ opacity: 0, y: -30 });
    });

    it("has correct animate state", () => {
      expect(fadeVariants.fadeDown.animate).toEqual({ opacity: 1, y: 0 });
    });
  });

  describe("fadeLeft", () => {
    it("has correct initial state", () => {
      expect(fadeVariants.fadeLeft.initial).toEqual({ opacity: 0, x: -30 });
    });

    it("has correct animate state", () => {
      expect(fadeVariants.fadeLeft.animate).toEqual({ opacity: 1, x: 0 });
    });
  });

  describe("fadeRight", () => {
    it("has correct initial state", () => {
      expect(fadeVariants.fadeRight.initial).toEqual({ opacity: 0, x: 30 });
    });

    it("has correct animate state", () => {
      expect(fadeVariants.fadeRight.animate).toEqual({ opacity: 1, x: 0 });
    });
  });

  describe("fadeIn", () => {
    it("has correct initial state", () => {
      expect(fadeVariants.fadeIn.initial).toEqual({ opacity: 0 });
    });

    it("has correct animate state", () => {
      expect(fadeVariants.fadeIn.animate).toEqual({ opacity: 1 });
    });
  });

  it("all fade variants have required properties", () => {
    const variants = Object.values(fadeVariants);
    for (const variant of variants) {
      expect(variant).toHaveProperty("initial");
      expect(variant).toHaveProperty("animate");
      expect(variant).toHaveProperty("transition");
    }
  });
});

describe("Scale Variants", () => {
  describe("scaleFadeIn", () => {
    it("has correct initial state", () => {
      expect(scaleVariants.scaleFadeIn.initial).toEqual({
        opacity: 0,
        scale: 0.9,
        y: 30,
      });
    });

    it("has correct animate state", () => {
      expect(scaleVariants.scaleFadeIn.animate).toEqual({
        opacity: 1,
        scale: 1,
        y: 0,
      });
    });

    it("uses spring transition", () => {
      expect(scaleVariants.scaleFadeIn.transition).toEqual(TRANSITIONS.spring);
    });
  });

  describe("scaleUp", () => {
    it("has correct initial state", () => {
      expect(scaleVariants.scaleUp.initial).toEqual({ scale: 0.8, opacity: 0 });
    });

    it("has correct animate state", () => {
      expect(scaleVariants.scaleUp.animate).toEqual({ scale: 1, opacity: 1 });
    });

    it("uses spring transition", () => {
      expect(scaleVariants.scaleUp.transition).toEqual(TRANSITIONS.spring);
    });
  });

  describe("pulse", () => {
    it("has correct initial state", () => {
      expect(scaleVariants.pulse.initial).toEqual({ scale: 1 });
    });

    it("has animate array with pulse effect", () => {
      expect(scaleVariants.pulse.animate.scale).toEqual([1, 1.05, 1]);
    });

    it("has transition with duration and no repeat", () => {
      expect(scaleVariants.pulse.transition.duration).toBe(DURATIONS.standard);
      expect(scaleVariants.pulse.transition.repeat).toBe(0);
    });
  });

  it("all scale variants have required properties", () => {
    const variants = Object.values(scaleVariants);
    for (const variant of variants) {
      expect(variant).toHaveProperty("initial");
      expect(variant).toHaveProperty("animate");
      expect(variant).toHaveProperty("transition");
    }
  });
});

describe("Infinite Animations", () => {
  describe("floatingOrb", () => {
    it("has animate with scale keyframes", () => {
      expect(infiniteAnimations.floatingOrb.animate.scale).toEqual([1, 1.2, 1]);
    });

    it("has animate with rotate keyframes", () => {
      expect(infiniteAnimations.floatingOrb.animate.rotate).toEqual([
        0, 180, 360,
      ]);
    });

    it("has animate with opacity keyframes", () => {
      expect(infiniteAnimations.floatingOrb.animate.opacity).toEqual([
        0.1, 0.3, 0.1,
      ]);
    });

    it("has infinite repeat", () => {
      expect(infiniteAnimations.floatingOrb.transition.repeat).toBe(
        Number.POSITIVE_INFINITY,
      );
    });

    it("has correct duration", () => {
      expect(infiniteAnimations.floatingOrb.transition.duration).toBe(
        DURATIONS.infinite,
      );
    });

    it("has easeInOut easing", () => {
      expect(infiniteAnimations.floatingOrb.transition.ease).toBe("easeInOut");
    });
  });

  describe("floatingGlow", () => {
    it("has animate with scale keyframes", () => {
      expect(infiniteAnimations.floatingGlow.animate.scale).toEqual([
        1, 1.3, 1,
      ]);
    });

    it("has animate with opacity keyframes", () => {
      expect(infiniteAnimations.floatingGlow.animate.opacity).toEqual([
        0.2, 0.4, 0.2,
      ]);
    });
  });

  it("all infinite animations loop infinitely", () => {
    const animations = Object.values(infiniteAnimations);
    for (const animation of animations) {
      expect(animation.transition.repeat).toBe(Number.POSITIVE_INFINITY);
    }
  });
});
