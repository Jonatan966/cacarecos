import { Progress } from "@/components/ui/progress";

export function ReviewResume() {
  return (
    <div className="flex items-center whitespace-nowrap gap-2">
      <span className="">5 estrelas</span>
      <Progress value={5} />
      <span>80%</span>
    </div>
  );
}
