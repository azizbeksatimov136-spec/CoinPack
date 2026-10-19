import {
  AirplaneIcon,
  CarProfileIcon,
  DeviceMobileIcon,
  DiamondIcon,
  GraduationCapIcon,
  HouseIcon,
  LaptopIcon,
  TargetIcon,
} from "@phosphor-icons/react";

const goalIcons = {
  "💻": { Icon: LaptopIcon, label: "Noutbuk" },
  "✈️": { Icon: AirplaneIcon, label: "Sayohat" },
  "🏠": { Icon: HouseIcon, label: "Uy" },
  "🚗": { Icon: CarProfileIcon, label: "Avtomobil" },
  "🎓": { Icon: GraduationCapIcon, label: "Taʼlim" },
  "💍": { Icon: DiamondIcon, label: "Taqinchoq" },
  "📱": { Icon: DeviceMobileIcon, label: "Telefon" },
  "🎯": { Icon: TargetIcon, label: "Maqsad" },
};

export const goalIconLabels = Object.fromEntries(
  Object.entries(goalIcons).map(([icon, value]) => [icon, value.label]),
);

export function GoalIcon({ icon, size = 18, ...props }) {
  const { Icon = TargetIcon, label } = goalIcons[icon] || {};
  return (
    <Icon
      size={size}
      weight="duotone"
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...props}
    />
  );
}
