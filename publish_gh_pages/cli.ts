import { parse, publish } from "./deps.ts";

if (import.meta.main) {
  const { _, ...options } = parse(Deno.args);
  const [basePath] = _.map(String);
  // publish(basePath, options, () => {});
  console.dir(basePath);
  console.dir(options);
}
