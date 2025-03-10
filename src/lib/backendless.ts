import Backendless from "backendless";

const APP_ID = process.env.NEXT_PUBLIC_COMPRO_APP_ID as string
const APP_KEY = process.env.NEXT_PUBLIC_COMPRO_APP_KEY as string

Backendless.initApp(APP_ID, APP_KEY)

export default Backendless