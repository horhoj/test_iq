export const MAIN_HELP_HASH = '#help'

const appRoutes = {
  main: '/main',
  help: `/help${MAIN_HELP_HASH}`,
  test: '/test',
  result: '/result'
} as const satisfies Record<string, string>

export const getAppRoute = (name: keyof typeof appRoutes) => appRoutes[name]

export const getAppRouteName = (name: keyof typeof appRoutes) => name
