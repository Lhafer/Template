import { express } from "express";
import { auth_router } from "./routes/auth_route.mjs";
import { upload_route } from "./routes/upload_route.mjs";
const app = express();
const port = 3000;

app.use();
app.use("/auth", auth_router);
app.use("/upload", upload_route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
