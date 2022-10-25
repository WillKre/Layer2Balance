import { en } from "../../lang/en";
import { Button, Text, Image } from "./GitHubButton.styles";

export function GitHubButton() {
  function navigateToRepo() {
    window.open("https://github.com/WillKre/Layer2Balance", "_blank");
  }

  return (
    <Button onClick={navigateToRepo}>
      <Text>{en.viewCode}</Text>
      <Image src="/github.svg" alt="GitHub logo" />
    </Button>
  );
}
