import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ShoppingBag, Heart, Star, StarHalf } from "lucide-react";

export default function ProductPage() {
  return (
    <div className="container space-y-4">
      <header className="flex items-center gap-2 py-2">
        <h1 className="font-bold text-xl">Cacarecos</h1>
        <Input
          placeholder="Digite para pesquisar um produto"
          className="flex-1"
        />
        <Button size="icon" variant="ghost">
          <Heart />
        </Button>
        <Button size="icon" variant="ghost">
          <ShoppingBag />
        </Button>
        <Button>Entrar</Button>
      </header>

      <section className="grid grid-cols-2 gap-2 h-96">
        <div className="border"></div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Produto tal</h1>
          <Badge className="self-start">Categoria tal</Badge>
          <p className="mb-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            cupiditate, neque placeat sit doloribus explicabo, illo sapiente
            molestiae minus veniam deleniti aliquam reiciendis optio officia ex,
            error modi laudantium dignissimos!
          </p>

          <b className="text-lg">R$ 99,99</b>

          <div className="flex space-x-1">
            <Button className="flex-1">Comprar</Button>
            <Button size="icon" variant="outline">
              <ShoppingBag />
            </Button>
            <Button size="icon" variant="outline">
              <Heart />
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-1">
          <h2 className="flex-1 font-semibold text-lg">Outros detalhes</h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis
          atque at laboriosam dicta molestiae quaerat earum veritatis saepe
          culpa sed expedita, adipisci neque deserunt velit, nisi consequatur
          omnis eos.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-1">
          <h2 className="flex-1 font-semibold text-lg">
            Opinião dos consumidores
          </h2>

          <Button>Deixe sua opinião</Button>
        </div>

        <div className="flex gap-6 mt-2">
          <div className="max-w-sm w-full">
            <div className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <span className="ml-2">4,7 de 5</span>
            </div>

            <div className="flex items-center whitespace-nowrap gap-2">
              <span className="">5 estrelas</span>
              <Progress value={5} />
              <span>80&</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-secondary p-2 rounded-md">
              <div className="flex items-center gap-1">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>José dos Santos</span>
              </div>
              <div className="flex items-center">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <b className="ml-2">Muito bonito</b>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus quo eos tempore possimus nemo aspernatur aliquam
                ducimus quod vero in deleniti repudiandae iure, ad suscipit
                ipsam reiciendis omnis at pariatur?
              </p>
            </div>

            <div className="bg-secondary p-2 rounded-md">
              <div className="flex items-center gap-1">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>José dos Santos</span>
              </div>
              <div className="flex items-center">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <b className="ml-2">Muito bonito</b>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus quo eos tempore possimus nemo aspernatur aliquam
                ducimus quod vero in deleniti repudiandae iure, ad suscipit
                ipsam reiciendis omnis at pariatur?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
