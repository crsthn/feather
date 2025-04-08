import { Tabs, TabsList, TabsPanel, TabsTrigger } from "@/components/ui/tabs";
import { FolderKanban, PanelsTopLeft, User } from "lucide-react";

export default function Component() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>
      <TabsPanel value="overview">
        <div className="mt-2 flex items-center justify-center rounded-lg bg-surface p-6">
          <PanelsTopLeft size={40} />
        </div>
      </TabsPanel>
      <TabsPanel value="projects">
        <div className="mt-2 flex items-center justify-center rounded-lg bg-surface p-6">
          <FolderKanban size={40} />
        </div>
      </TabsPanel>
      <TabsPanel value="account">
        <div className="mt-2 flex items-center justify-center rounded-lg bg-surface p-6">
          <User size={40} />
        </div>
      </TabsPanel>
    </Tabs>
  );
}
