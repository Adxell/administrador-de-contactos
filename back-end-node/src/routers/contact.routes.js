import { Router } from "express";

import * as contactController from "../controllers/contact.controller.js";

const router = Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getContacts);
router.get("/:contactid", contactController.getContactsById);
router.put("/:contactid", contactController.updateContactsById);
router.delete("/:contactid", contactController.deleteContact);

export default router;