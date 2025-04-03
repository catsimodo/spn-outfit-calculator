import React from "react";
import { Sword, Wind, Heart, Activity, Shield, Zap, Droplet, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Adjust the path to where your Tabs component is

interface FinalStatsProps {
  strFinal: number;
  agiFinal: number;
  staFinal: number;
  strBmv: number;
  agiBmv: number;
  staBmv: number;
}

const FinalStats: React.FC<FinalStatsProps> = ({
  strFinal,
  agiFinal,
  staFinal,
  strBmv,
  agiBmv,
  staBmv,
}) => {
  // Calculating derived stats based on BMV
  const attackBonus = (strBmv && strFinal) ? (strFinal / strBmv) : 0; // 1% Attack per BMV
  const blockPoints = (strBmv && strFinal) ? (strFinal / strBmv) : 0; // 1 Block per BMV

  const speedBonus = (agiBmv && agiFinal) ? (agiFinal / agiBmv) : 0; // 1% Speed per BMV
  const dodgePoints = (agiBmv && agiFinal) ? (agiFinal / agiBmv) : 0; // 1 Dodge per BMV

  const chakraBonus = (staBmv && staFinal) ? (staFinal / staBmv) : 0; // 1% Chakra per BMV

  return (
    <div className="w-full mt-4 overflow-hidden rounded-lg border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2">
        <h3 className="text-center font-bold text-white">Final Stats</h3>
      </div>

      <Tabs defaultValue="base" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-amber-100">
          <TabsTrigger value="base" className="data-[state=active]:bg-amber-200">
            Base Stats
          </TabsTrigger>
          <TabsTrigger value="derived" className="data-[state=active]:bg-amber-200">
            Derived Stats
          </TabsTrigger>
        </TabsList>

        {/* Base Stats */}
        <TabsContent value="base" className="space-y-3 p-4">
          <StatRow
            label="Strength"
            value={strFinal}
            bgColor="bg-red"
            textColor="text-red-700"
          />
          <StatRow
            label="Agility"
            value={agiFinal}
            bgColor="bg-green"
            textColor="text-green-700"
          />
          <StatRow
            label="Stamina"
            value={staFinal}
            bgColor="bg-blue"
            textColor="text-blue-700"
          />
        </TabsContent>

        {/* Derived Stats */}
        <TabsContent value="derived" className="space-y-3 p-4">
          {/* Strength Derived Stats */}
          <div className="rounded-md border border-red-200 bg-red-50 p-3">
            <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700">
              <Sword className="h-4 w-4" />
              Strength Bonuses
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <StatRow
                label="Attack"
                value={`+${attackBonus.toFixed(2)}%`}
                bgColor="bg-white"
                textColor="text-red-700"
              />
              <StatRow
                label="Block"
                value={`+${blockPoints.toFixed(2)} pts`}
                bgColor="bg-white"
                textColor="text-red-700"
              />
            </div>
          </div>

          {/* Agility Derived Stats */}
          <div className="rounded-md border border-green-200 bg-green-50 p-3">
            <h4 className="mb-2 flex items-center gap-2 font-bold text-green-700">
              <Wind className="h-4 w-4" />
              Agility Bonuses
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <StatRow
                label="Speed"
                value={`+${speedBonus.toFixed(2)}%`}
                bgColor="bg-white"
                textColor="text-green-700"
              />
              <StatRow
                label="Dodge"
                value={`+${dodgePoints.toFixed(2)} pts`}
                bgColor="bg-white"
                textColor="text-green-700"
              />
            </div>
          </div>

          {/* Stamina Derived Stats */}
          <div className="rounded-md border border-blue-200 bg-blue-50 p-3">
            <h4 className="mb-2 flex items-center gap-2 font-bold text-blue-700">
              <Heart className="h-4 w-4" />
              Stamina Bonuses
            </h4>
            <div className="grid grid-cols-1 gap-2">
              <StatRow
                label="Chakra"
                value={`+${chakraBonus.toFixed(2)}%`}
                bgColor="bg-white"
                textColor="text-blue-700"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const StatRow: React.FC<{
  label: string;
  value: string | number;
  bgColor: string;
  textColor: string;
}> = ({ label, value, bgColor, textColor }) => (
  <div className={`flex items-center justify-between rounded ${bgColor} p-2`}>
    <div className="flex items-center gap-1">
      
      <span className="text-sm">{label}</span>
    </div>
    <div className="flex items-center gap-1">
      <span className={`text-md font-bold ${textColor}`}>{value}</span>
    </div>
  </div>
);

export default FinalStats;
