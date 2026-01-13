import { getKey } from "./redisClient.mjs";

export async function isFeatureEnabled(featureCode) {
  const value = await getKey(featureCode);
  if (value === "enabled") return true;
  return false;
}
