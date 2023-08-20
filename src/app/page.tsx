import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";

export default function Home() {
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

      <section className="flex gap-2">
        <div className="flex-1 border p-2 flex flex-col justify-end">
          <p>Texto chamativo</p>
          <Button>Ação</Button>
        </div>
        <div className="grid grid-rows-3 gap-2 w-64">
          <Button variant="outline" className="h-28">
            Card
          </Button>
          <Button variant="outline" className="h-28">
            Card
          </Button>
          <Button variant="outline" className="h-28">
            Card
          </Button>
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex items-center gap-1">
          <h2 className="flex-1 font-semibold text-lg">
            Procure por uma categoria
          </h2>

          <Button size="icon" variant="outline">
            <ChevronLeftIcon />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRightIcon />
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-2 h-16 bg-green-50">
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-1">
          <h2 className="flex-1 font-semibold text-lg">
            Produtos mais vendidos
          </h2>

          <Button size="icon" variant="outline">
            <ChevronLeftIcon />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRightIcon />
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-2 h-64">
          <div className="flex flex-col h-full gap-1 border p-1 rounded-lg">
            <p className="font-bold">Produto tal</p>
            <div className="relative flex-1">
              <Image src="/next.svg" fill alt="bla" />
            </div>
            <div className="flex whitespace-nowrap">
              <Badge className="">Categoria tal</Badge>
              <b className="w-full text-center">R$ 19,99</b>
            </div>
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
        </div>
      </section>
    </div>
  );
}
