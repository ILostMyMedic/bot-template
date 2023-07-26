import { Router } from "express";

export const router = Router();

// CLIENT ROUTES
import Uptime from "./client/api.bot.uptime";
import Presence from "./client/api.bot.presence";
import BotInvite from "./client/api.bot.invite";

router.get("/bot/uptime", Uptime);
router.put("/bot/presence", Presence);
router.get("/bot/invite", BotInvite);
