import { createClient } from "redis";

const client = createClient({
  url: "redis://feature-redis:6379" // nom du conteneur Redis + port par défaut
});

client.on("error", (error) => console.log("Redis Client Error:", error));

await client.connect();

export async function getKey(key) {
  return await client.get(key);
}

export { client };
