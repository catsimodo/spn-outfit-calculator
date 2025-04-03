import React from "react";
import { Sword, Wind, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type StatInputProps = {
  label: string;
  baseValue: string;
  bmvValue: string;
  isvValue: string;
  onBaseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBmvChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIsvChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: "str" | "agi" | "sta";
};

const StatInput: React.FC<StatInputProps> = ({
  label,
  baseValue,
  bmvValue,
  isvValue,
  onBaseChange,
  onBmvChange,
  onIsvChange,
  icon,
}) => {
  // Helper function to get full class names based on stat type
  const getColorClasses = (stat: "str" | "agi" | "sta") => {
    switch (stat) {
      case "str":
        return {
          labelColor: "text-red-700",
          backgroundColor: "bg-red-500",
          inputBorderColor: "border-red-200",
          inputFocusBorderColor: "focus:border-red-400",
          inputFocusColor: "focus:ring-red-400",
        };
      case "agi":
        return {
          labelColor: "text-blue-700",
          backgroundColor: "bg-blue-500",
          inputBorderColor: "border-blue-200",
          inputFocusBorderColor: "focus:border-blue-400",
          inputFocusColor: "focus:ring-blue-400",
        };
      case "sta":
        return {
          labelColor: "text-orange-700",
          backgroundColor: "bg-orange-500",
          inputBorderColor: "border-orange-200",
          inputFocusBorderColor: "focus:border-orange-400",
          inputFocusColor: "focus:ring-orange-400",
        };
      default:
        return {
          labelColor: "text-gray-700",
          backgroundColor: "bg-gray-500",
          inputBorderColor: "border-gray-200",
          inputFocusBorderColor: "focus:border-gray-400",
          inputFocusColor: "focus:ring-gray-400",
        };
    }
  };

  const {
    labelColor,
    backgroundColor,
    inputBorderColor,
    inputFocusBorderColor,
    inputFocusColor,
  } = getColorClasses(icon);

  let IconComponent;
  switch (icon) {
    case "str":
      IconComponent = <Sword className="w-3.5 h-3.5" />;
      break;
    case "agi":
      IconComponent = <Wind className="w-3.5 h-3.5" />;
      break;
    case "sta":
      IconComponent = <Heart className="w-3.5 h-3.5" />;
      break;
    default:
      IconComponent = null;
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${backgroundColor} text-white`}
        >
          {IconComponent}
        </div>
        <h3 className={`font-bold ${labelColor}`}>{label}</h3>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <Label htmlFor="str-base" className="text-xs font-medium">
                  Base Value
                </Label>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Base stat value from outfit</p>
            </TooltipContent>
          </Tooltip>
          <Input
            id={`${icon}-base`}
            value={baseValue}
            onChange={(e) => onBaseChange(e)}
            className={`h-9 border-2 ${inputBorderColor} ${backgroundColor}-50 transition-all ${inputFocusBorderColor} ${inputFocusColor}`}
            type="number"
            placeholder="Base"
          />
        </div>

        <div className="space-y-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <Label htmlFor={`${icon}-isv`} className="text-xs font-medium">
                  ISV Multiplier
                </Label>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>ISV value that scales with level</p>
            </TooltipContent>
          </Tooltip>
          <Input
            id={`${icon}-isv`}
            value={isvValue}
            onChange={(e) => onIsvChange(e)}
            className={`h-9 border-2 ${inputBorderColor} ${backgroundColor}-50 transition-all ${inputFocusBorderColor} ${inputFocusColor}`}
            type="number"
            step="0.01"
            placeholder="ISV"
          />
        </div>

        <div className="space-y-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <Label htmlFor="str-bmv" className="text-xs font-medium">
                  BMV Multiplier
                </Label>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Base Multiplier Value (multiplies final stat)</p>
            </TooltipContent>
          </Tooltip>
          <Input
            id={`${icon}-bmv`}
            value={bmvValue}
            onChange={(e) => onBmvChange(e)}
            className={`h-9 border-2 ${inputBorderColor} ${backgroundColor}-50 transition-all ${inputFocusBorderColor} ${inputFocusColor}`}
            type="number"
            step="0.01"
            placeholder="BMV"
          />
        </div>
      </div>
    </div>
  );
};

export default StatInput;
