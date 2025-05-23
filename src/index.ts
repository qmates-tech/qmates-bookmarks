import { loadConfig } from './config'
import { bootstrapApp } from './app-bootstrap'

bootstrapApp(loadConfig())
  .start()
  .catch(() => process.exit(1))
