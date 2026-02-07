import type { Meta, StoryObj } from "@storybook/react";
import { Rocket, Target, Users, Zap } from "lucide-react";
import { FeatureCard } from "../cards/feature-card";
import { ProjectCard } from "../cards/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-100">
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 text-center">
          <p className="text-muted-foreground">
            This is the overview tab with general information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 text-center">
          <p className="text-muted-foreground">
            This is the details tab with more specific information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 text-center">
          <p className="text-muted-foreground">
            This is the settings tab with configuration options.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="external" className="w-125">
      <TabsList variant="line">
        <TabsTrigger value="external">External Projects</TabsTrigger>
        <TabsTrigger value="internal">Internal Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="external">
        <div className="p-4">
          <p className="text-muted-foreground mb-4">
            Projects developed for external clients
          </p>
          <div className="grid gap-4">
            <ProjectCard
              title="NASA Space Apps"
              description="Educational platform for NASA space challenges"
              imageSrc="/assets/img/projects/nasa-space-apps.jpg"
              link="https://nasa-space-apps.com"
              isInternal={false}
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="internal">
        <div className="p-4">
          <p className="text-muted-foreground mb-4">
            Internal projects and initiatives
          </p>
          <div className="grid gap-4">
            <ProjectCard
              title="COLCIC UESC"
              description="Scientific initiation management system"
              imageSrc="/assets/img/projects/colcic.jpg"
              link="/projetos/colcic"
              isInternal
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithComplexContent: Story = {
  render: () => (
    <Tabs defaultValue="features" className="w-150">
      <TabsList>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="features">
        <div className="grid grid-cols-2 gap-6 p-4">
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Optimized performance for speed"
          />
          <FeatureCard
            icon={Rocket}
            title="Innovation"
            description="Cutting-edge technology solutions"
          />
          <FeatureCard
            icon={Target}
            title="Precision"
            description="Accurate and reliable results"
          />
          <FeatureCard
            icon={Users}
            title="Collaboration"
            description="Work seamlessly with your team"
          />
        </div>
      </TabsContent>
      <TabsContent value="team">
        <div className="p-4">
          <p className="text-muted-foreground">
            Our experienced team of developers and designers work together to
            create amazing digital products.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalOrientation: Story = {
  render: () => (
    <Tabs orientation="vertical" defaultValue="account" className="flex gap-4">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="account">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Account Settings</h3>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Security Settings</h3>
            <p className="text-muted-foreground">
              Configure security options for your account.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Notification Preferences</h3>
            <p className="text-muted-foreground">
              Customize your notification settings.
            </p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};
