import { timeZone } from "@/utils";

const formatLocal: { [key: string]: string } = {
  Australia: "es",
  Colombia: "es",
};

export const selectLocal = (): string => {
  const local = timeZone();
  return formatLocal[local] ?? "en";
};
