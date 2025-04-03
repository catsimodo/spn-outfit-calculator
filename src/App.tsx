import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./components/ui/card";
import StatInput from "./StatInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Label } from "./components/ui/label";
import FinalStats from "./StatResult";

function App() {
  const [strBase, setStrBase] = useState("");
  const [agiBase, setAgiBase] = useState("");
  const [staBase, setStaBase] = useState("");

  const [strBmv, setStrBmv] = useState("");
  const [agiBmv, setAgiBmv] = useState("");
  const [staBmv, setStaBmv] = useState("");

  const [strIsv, setStrIsv] = useState("");
  const [agiIsv, setAgiIsv] = useState("");
  const [staIsv, setStaIsv] = useState("");

  const [level, setLevel] = useState<string>("1");
  const levelOptions = Array.from({ length: 32 }, (_, i) => (i + 1).toString());

  const [results, setResults] = useState({
    strFinal: 0,
    agiFinal: 0,
    staFinal: 0,
  });

  useEffect(() => {
    try {
      const strBaseVal = Number.parseInt(strBase || "0");
      const agiBaseVal = Number.parseInt(agiBase || "0");
      const staBaseVal = Number.parseInt(staBase || "0");

      const strIsvVal = Number.parseFloat(strIsv || "0");
      const agiIsvVal = Number.parseFloat(agiIsv || "0");
      const staIsvVal = Number.parseFloat(staIsv || "0");

      const levelVal = Math.min(Number.parseInt(level || "1"), 32);

      const strFinal = Math.floor(strBaseVal + Math.floor(8 * strIsvVal * levelVal));
      const agiFinal = Math.floor(agiBaseVal + Math.floor(8 * agiIsvVal * levelVal));
      const staFinal = Math.floor(staBaseVal + Math.floor(8 * staIsvVal * levelVal));

      setResults({
        strFinal,
        agiFinal,
        staFinal,
      });
    } catch (error) {
    }
  }, [
    strBase,
    agiBase,
    staBase,
    strIsv,
    agiIsv,
    staIsv,
    level,
  ]);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="max-w-4xl w-full mx-4">
        <Card className="overflow-hidden border-2 border-amber-200 bg-white/90 shadow-xl gap-0 p-8">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">
              Outfit Calculator
            </CardTitle>
            <CardDescription>Calculate your character's stats effortlessly and optimize your outfit's performance based on strength, agility, and stamina</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="grid gap-4">
                  <StatInput
                    label="Strength"
                    baseValue={strBase}
                    bmvValue={strBmv}
                    isvValue={strIsv}
                    onBaseChange={(e) => setStrBase(e.target.value)}
                    onBmvChange={(e) => setStrBmv(e.target.value)}
                    onIsvChange={(e) => setStrIsv(e.target.value)}
                    icon="str"
                  />

                  <StatInput
                    label="Agility"
                    baseValue={agiBase}
                    bmvValue={agiBmv}
                    isvValue={agiIsv}
                    onBaseChange={(e) => setAgiBase(e.target.value)}
                    onBmvChange={(e) => setAgiBmv(e.target.value)}
                    onIsvChange={(e) => setAgiIsv(e.target.value)}
                    icon="agi"
                  />

                  <StatInput
                    label="Stamina"
                    baseValue={staBase}
                    bmvValue={staBmv}
                    isvValue={staIsv}
                    onBaseChange={(e) => setStaBase(e.target.value)}
                    onBmvChange={(e) => setStaBmv(e.target.value)}
                    onIsvChange={(e) => setStaIsv(e.target.value)}
                    icon="sta"
                  />

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500 text-white">
                        <span className="text-xs font-bold">LV</span>
                      </div>
                      <Label htmlFor="level" className="font-medium">
                        Outfit Level (Max. 32)
                      </Label>
                    </div>
                    <Select value={level} onValueChange={setLevel}>
                      <SelectTrigger
                        id="level"
                        className="h-9 border-2 border-purple-200 bg-purple-50 transition-all focus:border-purple-400 focus:ring-purple-400 w-full"
                      >
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {levelOptions.map((lvl) => (
                          <SelectItem key={lvl} value={lvl}>
                            Level {lvl}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FinalStats
                  strFinal={results.strFinal}
                  agiFinal={results.agiFinal}
                  staFinal={results.staFinal}
                  strBmv={Number(strBmv)}
                  agiBmv={Number(agiBmv)}
                  staBmv={Number(staBmv)}
                />
                
              </div>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
