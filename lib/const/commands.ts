const packageManagers = ["pnpm", "npm", "yarn", "bun"] as const
type PackageManager = (typeof packageManagers)[number]

const RUN_COMMAND_MAP: Record<PackageManager, string> = {
  pnpm: `pnpm dlx`,
  npm: `npx`,
  yarn: `yarn`,
  bun: `bunx --bun`,
}

export const getCommands = (command: string) =>
  packageManagers.map((packageManager) => ({
    label: packageManager,
    code: `${RUN_COMMAND_MAP[packageManager]} ${command}`,
  }))
