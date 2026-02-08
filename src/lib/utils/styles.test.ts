import { describe, expect, it } from "vitest";
import {
  type GlowEffectOptions,
  type GradientVariant,
  getCardBackgroundClass,
  getCardBorderClass,
  getGlowEffectClass,
  getGradientClass,
} from "./styles";

describe("getGradientClass", () => {
  it("returns diagonal gradient class", () => {
    const result = getGradientClass("diagonal");
    expect(result).toBe("gradient-tecno-diagonal");
  });

  it("returns animated gradient class", () => {
    const result = getGradientClass("animated");
    expect(result).toBe("gradient-tecno-animated");
  });

  it("returns primary gradient class", () => {
    const result = getGradientClass("primary");
    expect(result).toBe("gradient-tecno-primary");
  });

  it("returns text gradient class", () => {
    const result = getGradientClass("text");
    expect(result).toBe("text-gradient-tecno");
  });

  it("handles all gradient variants", () => {
    const variants: GradientVariant[] = [
      "diagonal",
      "animated",
      "primary",
      "text",
    ];
    for (const variant of variants) {
      const result = getGradientClass(variant);
      expect(result).toBeTruthy();
      expect(typeof result).toBe("string");
    }
  });
});

describe("getCardBackgroundClass", () => {
  it("returns default card background classes", () => {
    const result = getCardBackgroundClass();
    expect(result).toContain("border-gray-700/50");
    expect(result).toContain("!bg-linear-to-br");
    expect(result).toContain("backdrop-blur-xl");
    expect(result).toContain("transition-all");
    expect(result).toContain("hover:scale-[1.02]");
  });

  it("applies custom border opacity", () => {
    const result = getCardBackgroundClass({ borderOpacity: 70 });
    expect(result).toContain("border-gray-700/70");
  });

  it("applies medium blur", () => {
    const result = getCardBackgroundClass({ blur: "md" });
    expect(result).toContain("backdrop-blur-md");
  });

  it("applies small blur", () => {
    const result = getCardBackgroundClass({ blur: "sm" });
    expect(result).toContain("backdrop-blur-sm");
  });

  it("disables hover scale when hoverScale is false", () => {
    const result = getCardBackgroundClass({ hoverScale: false });
    expect(result).not.toContain("hover:scale-[1.02]");
  });

  it("combines multiple options", () => {
    const result = getCardBackgroundClass({
      hoverScale: true,
      blur: "sm",
      borderOpacity: 30,
    });
    expect(result).toContain("border-gray-700/30");
    expect(result).toContain("backdrop-blur-sm");
    expect(result).toContain("hover:scale-[1.02]");
  });
});

describe("getCardBorderClass", () => {
  it("returns default border class with 50 opacity", () => {
    const result = getCardBorderClass();
    expect(result).toBe("border border-gray-700/50");
  });

  it("applies custom opacity", () => {
    const result = getCardBorderClass(70);
    expect(result).toBe("border border-gray-700/70");
  });

  it("handles zero opacity", () => {
    const result = getCardBorderClass(0);
    expect(result).toBe("border border-gray-700/0");
  });

  it("handles full opacity", () => {
    const result = getCardBorderClass(100);
    expect(result).toBe("border border-gray-700/100");
  });
});

describe("getGlowEffectClass", () => {
  const baseOptions: GlowEffectOptions = {
    variant: "primary",
  };

  it("returns glow effect classes for primary variant", () => {
    const result = getGlowEffectClass(baseOptions);
    expect(result).toContain("absolute");
    expect(result).toContain("-inset-[0.5px]");
    expect(result).toContain("rounded-2xl");
    expect(result).toContain("gradient-tecno-primary");
  });

  it("returns glow effect classes for secondary variant", () => {
    const result = getGlowEffectClass({ variant: "secondary" });
    expect(result).toContain("gradient-tecno-secondary");
  });

  it("returns glow effect classes for accent variant", () => {
    const result = getGlowEffectClass({ variant: "accent" });
    expect(result).toContain("gradient-tecno-accent");
  });

  it("returns glow effect classes for success variant", () => {
    const result = getGlowEffectClass({ variant: "success" });
    expect(result).toContain("gradient-tecno-success");
  });

  it("applies custom rounded size", () => {
    const result = getGlowEffectClass({ ...baseOptions, rounded: "lg" });
    expect(result).toContain("rounded-lg");
  });

  it("applies xl rounded size", () => {
    const result = getGlowEffectClass({ ...baseOptions, rounded: "xl" });
    expect(result).toContain("rounded-xl");
  });

  it("applies 3xl rounded size", () => {
    const result = getGlowEffectClass({ ...baseOptions, rounded: "3xl" });
    expect(result).toContain("rounded-3xl");
  });

  it("handles all glow variants", () => {
    const variants: Array<"primary" | "secondary" | "accent" | "success"> = [
      "primary",
      "secondary",
      "accent",
      "success",
    ];
    for (const variant of variants) {
      const result = getGlowEffectClass({ variant });
      expect(result).toBeTruthy();
      expect(typeof result).toBe("string");
      expect(result).toContain("gradient-tecno-");
    }
  });

  it("combines custom options", () => {
    const result = getGlowEffectClass({
      variant: "accent",
      rounded: "xl",
      hoverOpacity: 70,
    });
    expect(result).toContain("gradient-tecno-accent");
    expect(result).toContain("rounded-xl");
  });
});
