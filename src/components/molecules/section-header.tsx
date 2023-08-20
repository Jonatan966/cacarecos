import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  children?: ReactNode;
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-1">
      <h2 className="flex-1 font-semibold text-lg">{props.title}</h2>

      {props.children}
    </div>
  );
}
