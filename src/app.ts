import express, { Request, Response } from "express"
import cors from "cors"
import router from "@/routes/index-routes"
import dotenv from "dotenv"

dotenv.config()
          
const app = express()
app
  .use(cors())
  .use(express.json())
  .use(router)
  .get("/health", (req: Request, res: Response) => {
  res.status(200).send("Ok!")
})

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`server is listening on port ${port}`))