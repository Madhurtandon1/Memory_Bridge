import express from "express";

import {  createCollection,  getCollections,  deleteCollection, updateCollection } from "../controllers/collection.controller.js";

import {  verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(verifyJWT);

router.post("/",verifyJWT, createCollection);

router.get("/", verifyJWT, getCollections);

router.delete("/:id",verifyJWT, deleteCollection);

router.patch("/:id", updateCollection);
export default router;