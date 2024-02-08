const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/");

module.exports = router;
