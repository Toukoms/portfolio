import ProjectGrid from "@/components/ProjectGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

function ProjectPage() {
  return (
    <div className="flex flex-col items-center pt-24 min-h-[86vh]">
      <Link href="/" className="text-blue-500 hover:underline mb-4">
        &larr; Return to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <Tabs defaultValue="web" className="container mx-auto">
        <TabsList className="grid w-full grid-cols-4 gap-x-2 mb-6 p-2 bg-muted rounded-lg h-fit max-w-[400px]">
          <TabsTrigger value="web" className="TabsTrigger">
            Web
          </TabsTrigger>
          <TabsTrigger value="mobile" className="TabsTrigger">
            Mobile
          </TabsTrigger>
          <TabsTrigger value="desktop" className="TabsTrigger">
            Desktop
          </TabsTrigger>
          <TabsTrigger value="other" className="TabsTrigger">
            Other
          </TabsTrigger>
        </TabsList>
        <TabsContent value="web">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Web Projects</h2>
            <p className="text-sm text-muted-foreground">
              Here are some of my web projects.
            </p>
            <ProjectGrid category="web" />
          </div>
        </TabsContent>
        <TabsContent value="mobile">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Mobile Projects</h2>
            <p className="text-sm text-muted-foreground">
              Here are some of my mobile projects.
            </p>
            <ProjectGrid category="mobile" />
          </div>
        </TabsContent>
        <TabsContent value="desktop">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Desktop Projects</h2>
            <p className="text-sm text-muted-foreground">
              Here are some of my desktop projects.
            </p>
            <ProjectGrid category="desktop" />
          </div>
        </TabsContent>
        <TabsContent value="other">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Other Projects</h2>
            <p className="text-sm text-muted-foreground">
              Here are some of my other projects.
            </p>
            <ProjectGrid category="other" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProjectPage;
