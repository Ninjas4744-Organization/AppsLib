import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Autocomplete, Checkbox, Dropdown, Radio, TextField, Stack } from "@ninjas4744/lib/ui";

const App = () =>
{
    const [name, setName] = useState();
    const [team, setTeam] = useState();
    const [drivetrain, setDrivetrain] = useState();
    const [canDefend, setCanDefend] = useState(false);
    const [alliance, setAlliance] = useState("blue");

    const teams = [
        "Orbit #1690",
        "Elysium #1937",
        "Neat Team #1943",
        "Ninjas #4744",
        "Galaxia #5987"
    ];

    const drivetrains = [
        "Swerve",
        "Tank",
        "Mecanum"
    ];

    return (
      <SafeAreaView style={{ backgroundColor: "white" }}>
          <Stack direction="column" style={{ padding: 30 }}>
              <TextField label="Your Name" value={name} onChangeText={setName} />
              <Autocomplete label="Team" value={team} onChangeText={setTeam} suggestions={teams} />
              <Dropdown label="Drivetrain" value={drivetrain} onValueChange={setDrivetrain} options={drivetrains} />
              <Checkbox label="Can defend" checked={canDefend} onValueChange={setCanDefend} />
              <Radio label="Blue alliance" selected={alliance === "blue"} onValueChange={() => setAlliance("blue")} />
              <Radio label="Red alliance" selected={alliance === "red"} onValueChange={() => setAlliance("red")} />
          </Stack>
      </SafeAreaView>
    );
};

export default App;
