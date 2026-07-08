import { CollapsibleList } from "@/components/collapsible-list";

import { SIDE_PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { ProjectItem } from "./project-item";

export function SideProjects() {
  return (
    <Panel id="side-projects">
      <PanelHeader>
        <PanelTitle>
          Side Projects
          <PanelTitleSup>({SIDE_PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SIDE_PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
