import { describe, expect, it } from "vitest";
import { createDataHelpers, type DataEntity } from "./types";

// Mock data for testing
interface TestEntity extends DataEntity {
  title: string;
  description: string;
}

const mockData: TestEntity[] = [
  { title: "Item 1", description: "Description 1" },
  { title: "Item 2", description: "Description 2" },
  { title: "Item 3", description: "Description 3" },
];

describe("createDataHelpers", () => {
  const helpers = createDataHelpers(mockData);

  describe("getByTitle", () => {
    it("finds item by exact title", () => {
      const result = helpers.getByTitle("Item 1");
      expect(result).toBeDefined();
      expect(result?.title).toBe("Item 1");
      expect(result?.description).toBe("Description 1");
    });

    it("finds item by different title", () => {
      const result = helpers.getByTitle("Item 2");
      expect(result).toBeDefined();
      expect(result?.title).toBe("Item 2");
    });

    it("returns undefined for non-existent title", () => {
      const result = helpers.getByTitle("Non-existent");
      expect(result).toBeUndefined();
    });

    it("is case sensitive", () => {
      const result = helpers.getByTitle("item 1");
      expect(result).toBeUndefined();
    });

    it("does not match partial titles", () => {
      const result = helpers.getByTitle("Item");
      expect(result).toBeUndefined();
    });
  });

  describe("getCount", () => {
    it("returns correct count of items", () => {
      const count = helpers.getCount();
      expect(count).toBe(3);
    });

    it("returns consistent count", () => {
      const count1 = helpers.getCount();
      const count2 = helpers.getCount();
      expect(count1).toBe(count2);
    });
  });

  describe("getAll", () => {
    it("returns all items", () => {
      const all = helpers.getAll();
      expect(all).toHaveLength(3);
      expect(all).toEqual(mockData);
    });

    it("returns readonly array", () => {
      const all = helpers.getAll();
      expect(all).toBe(mockData);
    });
  });

  describe("with empty data", () => {
    const emptyHelpers = createDataHelpers<TestEntity>([]);

    it("getByTitle returns undefined", () => {
      const result = emptyHelpers.getByTitle("Any");
      expect(result).toBeUndefined();
    });

    it("getCount returns 0", () => {
      expect(emptyHelpers.getCount()).toBe(0);
    });

    it("getAll returns empty array", () => {
      expect(emptyHelpers.getAll()).toHaveLength(0);
    });
  });

  describe("with single item", () => {
    const singleData: TestEntity[] = [
      { title: "Single", description: "Only one" },
    ];
    const singleHelpers = createDataHelpers(singleData);

    it("getByTitle finds the item", () => {
      const result = singleHelpers.getByTitle("Single");
      expect(result).toBeDefined();
      expect(result?.title).toBe("Single");
    });

    it("getCount returns 1", () => {
      expect(singleHelpers.getCount()).toBe(1);
    });

    it("getAll returns single item", () => {
      expect(singleHelpers.getAll()).toHaveLength(1);
    });
  });

  describe("with duplicate titles", () => {
    const duplicateData: TestEntity[] = [
      { title: "Duplicate", description: "First" },
      { title: "Duplicate", description: "Second" },
    ];
    const duplicateHelpers = createDataHelpers(duplicateData);

    it("getByTitle returns first matching item", () => {
      const result = duplicateHelpers.getByTitle("Duplicate");
      expect(result).toBeDefined();
      expect(result?.description).toBe("First");
    });
  });

  describe("type safety", () => {
    interface CustomEntity extends DataEntity {
      title: string;
      customField: number;
    }

    const customData: CustomEntity[] = [
      { title: "Custom 1", customField: 100 },
      { title: "Custom 2", customField: 200 },
    ];

    const customHelpers = createDataHelpers(customData);

    it("maintains custom type properties", () => {
      const result = customHelpers.getByTitle("Custom 1");
      expect(result).toBeDefined();
      expect(result?.customField).toBe(100);
    });

    it("getAll returns typed array", () => {
      const all = customHelpers.getAll();
      expect(all[0].customField).toBe(100);
      expect(all[1].customField).toBe(200);
    });
  });
});
