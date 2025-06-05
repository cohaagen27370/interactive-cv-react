import { Stack, Typography } from "@mui/material";

export function MonitoringPage() {
  return <Stack direction={"column"} >
    <Typography variant="h5">
      J'essaie de faire régulièrement de la veille technologique sur les nouveautés ou l'amélioration de ce que je connais déjà.
    </Typography>
    <br />
    <Typography variant="h6">
      Mes principaux moyens sont :
    </Typography>

<br/>
<ul className="list-unstyled">
  <li>Des livres (<a href="https://www.editions-eni.fr/">Editions Eni</a>)</li>
  <li>Des comptes Youtube<br />
        <Stack direction={"column"} justifyContent={"center"}>
          <a href="https://www.youtube.com/@nickchapsas" target="_blank" rel="noopener noreferrer">Nick Chapsas</a>
          <a href="https://www.youtube.com/@drissas" target="_blank" rel="noopener noreferrer">Driss AS</a>
          <a href="https://www.youtube.com/@CodeWithVlad" target="_blank" rel="noopener noreferrer">Code with Vlad</a>
          <a href="https://www.youtube.com/@evan-le-chat-curieux" target="_blank" rel="noopener noreferrer">Evan - Le chat curieux</a>
        </Stack>

  </li>
  <li>Des posts linkedin</li>
</ul>
    <br />
    <Typography variant="h6">
      J'utilise l'IA (Google Gemini, ChatGpt, MistralAi) pour m'aider dans le développement. Elle me permet de :
    </Typography>
<br/>
<ul className="list-unstyled">
  <li>Créer des squelettes de tests unitaire</li>
  <li>Créer des interfaces (html ou flutter) à partir d'une maquette</li>
</ul></Stack>;
}
