import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProductReview() {
  return (
    <div className="bg-secondary p-2 rounded-md">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <div className="flex">
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </div>
          <b>Muito bonito</b>
        </div>
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-semibold">José dos Santos</span>
        </div>
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        quo eos tempore possimus nemo aspernatur aliquam ducimus quod vero in
        deleniti repudiandae iure, ad suscipit ipsam reiciendis omnis at
        pariatur?
      </p>
    </div>
  );
}
