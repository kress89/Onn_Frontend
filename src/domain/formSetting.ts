export const SettingsTypeEnum = [
    {
      id: 1,
      name: "Default",
    },
    {
      id: 2,
      name: "Custom",
    },
  ];

export type SettingType = typeof SettingsTypeEnum[number]