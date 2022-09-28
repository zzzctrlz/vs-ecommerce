const router = require("express").Router();
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User")