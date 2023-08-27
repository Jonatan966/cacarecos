import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating } from "@/entities/rating";

interface ProductReviewProps {
  rating: Rating;
}

export function ProductReview({ rating }: ProductReviewProps) {
  return (
    <div className="bg-secondary p-2 rounded-md">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <div className="flex">
            {[...new Array(rating.stars)].map((_, index) => (
              <Star key={`star-${index}`} size={16} />
            ))}
          </div>
          <b>{rating.title}</b>
        </div>
        <strong>{rating.createdAt}</strong>
      </div>

      <p>{rating.details}</p>
    </div>
  );
}
