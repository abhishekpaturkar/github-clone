import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import connectMongo from "./db/connectToMongo.js";
import authRoutes from "./routes/auth.route.js";
import "./passport/github.auth.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(PORT, () => {
  connectMongo();
  console.log(`Server running on PORT ${PORT}`);
});
