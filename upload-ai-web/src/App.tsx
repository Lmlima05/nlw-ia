import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload } from "lucide-react";
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';

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
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..." readOnly
            />
          </div>

          <p className="text-small text-muted--foreground">
            Lembre-se: você pode utilizar a variável <code className="text-viole-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label htmlFor="video"
            className="border flex roundded-md select-video cursor-pointer border-dashedtext-sm flex-clo gap-2 items-center junstify-center">
              Carregar Vídeo2
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />
            <Separator /> 

            <div className="space-y-1">
              <Label htmlFor="transcription_prompt">Prompt de trancrição</Label>
              <Textarea
                id="transcription_prompt"
                className="min-h-20 loading-relaxed"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2" />
            </Button> 
          </form>
        </aside>  
      </main>
    </div>
  )
}