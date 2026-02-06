import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges multiple class names", () => {
    const result = cn("base", "extra");
    expect(result).toBe("base extra");
  });

  it("handles tailwind class conflicts with tailwind-merge", () => {
    // tailwind-merge should keep only the last conflicting class
    const result = cn("text-red-500", "text-blue-500");
    expect(result).toBe("text-blue-500");
  });

  it("removes falsy values", () => {
    const result = cn("base", undefined, null, false, "valid");
    expect(result).toBe("base valid");
  });

  it("handles conditional classes with objects", () => {
    const result = cn("base", {
      active: true,
      disabled: false,
      "extra-class": true,
    });
    expect(result).toContain("base");
    expect(result).toContain("active");
    expect(result).toContain("extra-class");
    expect(result).not.toContain("disabled");
  });

  it("handles arrays of classes", () => {
    const result = cn(["base", "extra"], "another");
    expect(result).toBe("base extra another");
  });

  it("handles empty input", () => {
    const result = cn();
    expect(result).toBe("");
  });

  it("handles complex nested conditionals", () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn(
      "base-class",
      isActive && "active",
      isDisabled && "disabled",
      {
        "hover:bg-blue-500": true,
        "hover:bg-red-500": false,
      },
    );
    expect(result).toContain("base-class");
    expect(result).toContain("active");
    expect(result).not.toContain("disabled");
    expect(result).toContain("hover:bg-blue-500");
    expect(result).not.toContain("hover:bg-red-500");
  });

  it("resolves tailwind padding conflicts", () => {
    const result = cn("px-4", "px-6");
    expect(result).toBe("px-6");
  });

  it("resolves tailwind margin conflicts", () => {
    const result = cn("mt-2", "mt-4", "mb-3");
    expect(result).toBe("mt-4 mb-3");
  });
});
