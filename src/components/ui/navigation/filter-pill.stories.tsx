import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterPill } from "./filter-pill";

const meta = {
  title: "UI/FilterPill",
  component: FilterPill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "active", "outline"],
    },
  },
} satisfies Meta<typeof FilterPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "All Projects",
  },
};

export const Active: Story = {
  args: {
    children: "Active Filter",
    active: true,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Variant",
    variant: "outline",
  },
};

export const FilterGroup: Story = {
  args: {
    children: "Filter",
  },
  render: () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const filters = ["all", "web", "mobile", "design", "marketing"];

    return (
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <FilterPill
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </FilterPill>
        ))}
      </div>
    );
  },
};

export const ProjectFilters: Story = {
  args: {
    children: "All Projects",
  },
  render: () => {
    const [activeFilter, setActiveFilter] = useState("all");

    return (
      <div className="max-w-2xl">
        <h3 className="mb-4 text-lg font-semibold">Filter Projects</h3>
        <div className="flex flex-wrap gap-2">
          <FilterPill
            active={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
          >
            All Projects
          </FilterPill>
          <FilterPill
            active={activeFilter === "external"}
            onClick={() => setActiveFilter("external")}
          >
            External
          </FilterPill>
          <FilterPill
            active={activeFilter === "internal"}
            onClick={() => setActiveFilter("internal")}
          >
            Internal
          </FilterPill>
          <FilterPill variant="outline" onClick={() => setActiveFilter("all")}>
            Reset Filters
          </FilterPill>
        </div>
        <div className="mt-6 p-4 border rounded-lg">
          <p className="text-muted-foreground">
            Showing: <span className="font-semibold">{activeFilter}</span>{" "}
            projects
          </p>
        </div>
      </div>
    );
  },
};

export const TechnologyTags: Story = {
  args: {
    children: "React",
  },
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const tags = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];

    const toggleTag = (tag: string) => {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
      );
    };

    return (
      <div className="max-w-2xl">
        <h3 className="mb-4 text-lg font-semibold">Select Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <FilterPill
              key={tag}
              active={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </FilterPill>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <div className="mt-6 p-4 border rounded-lg">
            <p className="text-muted-foreground">
              Selected: {selectedTags.join(", ")}
            </p>
          </div>
        )}
      </div>
    );
  },
};
