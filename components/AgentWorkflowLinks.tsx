"use client";

import Link from "next/link";
import { trackAgentWorkflow } from "../lib/analytics";
import {
  createAgentWorkflowEvent,
  type AgentWorkflowDestination,
} from "../lib/analytics-events";

const WORKFLOWS: ReadonlyArray<{
  destination: AgentWorkflowDestination;
  href: string;
  label: string;
  detail: string;
}> = [
  {
    destination: "translate",
    href: "/translate",
    label: "Translate subtitles",
    detail: "Language coverage, two-pass review, and SRT export",
  },
  {
    destination: "subtitle_editor",
    href: "/subtitle-editor",
    label: "Edit an SRT",
    detail: "Timing, styling, cue editing, and bilingual export",
  },
  {
    destination: "dubbing",
    href: "/dubbing",
    label: "Dub a video",
    detail: "Voices, translated speech, and rendered video output",
  },
];

export function AgentWorkflowLinks() {
  return (
    <div
      className="grid border-y border-white/20 md:grid-cols-3"
      data-agent-workflow-links
    >
      {WORKFLOWS.map((workflow) => (
        <Link
          key={workflow.destination}
          href={workflow.href}
          onClick={() =>
            trackAgentWorkflow(
              createAgentWorkflowEvent(
                workflow.destination,
                window.location.pathname,
              ),
            )
          }
          className="group border-b border-white/20 py-6 transition hover:bg-white/[0.04] md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff75ac]">
            Agent workflow
          </span>
          <strong className="mt-3 block text-xl text-white transition group-hover:text-[#a9bfff]">
            {workflow.label} →
          </strong>
          <span className="mt-2 block text-sm leading-6 text-white/48">
            {workflow.detail}
          </span>
        </Link>
      ))}
    </div>
  );
}
