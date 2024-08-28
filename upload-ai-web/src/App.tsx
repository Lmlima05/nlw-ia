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
          <Button variant="outline">
            <Github />
            Github
          </Button>
        </div>
      </div>
    </div>
  )
}