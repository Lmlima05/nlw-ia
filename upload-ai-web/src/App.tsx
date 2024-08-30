import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Github } from "lucide-react";

export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>
          
          <Separator orientation='vertical' className="h-6" />

          <Button variant="outline">
            <Github />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">

          </div>

          <p className="text-small text-muted--foreground">
            Lembre-se: você pode utilizar a variável <code className="text-viole-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>
      <aside className="w-80"></aside>  
      </main>
    </div>
  )
}