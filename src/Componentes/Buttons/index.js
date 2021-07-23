import { Segment } from "semantic-ui-react";
import ButtonFire from "./Components/ButtonFire";
import ButtonNormal from "./Components/ButtonNormal";
import ButtonBug from "./Components/ButtonBug";
import ButtonElectric from "./Components/ButtonElectric";
import ButtonFlying from "./Components/ButtonFlying";
import ButtonGrass from "./Components/ButtonGrass";
import ButtonDragon from "./Components/ButtonDragon";
import ButtonWater from "./Components/ButtonWater";
import ButtonIce from "./Components/ButtonIce";
import ButtonPsychic from "./Components/ButtonPsychic";
import ButtonGhost from "./Components/ButtonGhost";
import ButtonPoison from "./Components/ButtonPoison";
import ButtonFairy from "./Components/ButtonFairy";
import ButtonRock from "./Components/ButtonRock";
import ButtonGround from "./Components/ButtonGround";
import ButtonSteel from "./Components/ButtonSteel";

function Buttons({ buttons }) {
  return (
    <div>
      <Segment inverted>
        <ButtonNormal buttons={buttons} />
        <ButtonFire buttons={buttons} />
        <ButtonBug buttons={buttons} />
        <ButtonElectric buttons={buttons} />
        <ButtonFlying buttons={buttons} />
        <ButtonGrass buttons={buttons} />
        <ButtonDragon buttons={buttons} />
        <ButtonWater buttons={buttons} />
        <ButtonIce buttons={buttons} />
        <ButtonPsychic buttons={buttons} />
        <ButtonGhost buttons={buttons} />
        <ButtonPoison buttons={buttons} />
        <ButtonFairy buttons={buttons} />
        <ButtonRock buttons={buttons} />
        <ButtonGround buttons={buttons} />
        <ButtonSteel buttons={buttons} />
      </Segment>
    </div>
  );
}
export default Buttons;
