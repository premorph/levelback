import { Router } from 'express'
import { readdirSync } from 'fs'
const path__routes = __dirname
const router: Router = Router()

/**
 *
 * @param file file with extension
 * @returns name file without extension
 */
function removeExtension(file: string): string {
  const cleanName = <string>file.split('.').shift()
  return cleanName
}
/**
 *
 * @param filename file pure of directiory
 */
function loadRoutes(filename: string): void {
  const name = removeExtension(filename)
  if (name !== 'index') {
    import(`./${filename}`).then((routerModule) =>
      router.use(`/${name}`, routerModule.router)
    )
  }
}

readdirSync(path__routes).filter((file) => {
  loadRoutes(file)
})

export { router }
