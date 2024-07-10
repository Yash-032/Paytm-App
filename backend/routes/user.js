const express = require('express')
const zod = require('zod')
const {User} = require('../db')
const {Account} = require('../db')
const jwt = require('jsonwebtoken')
const authMiddlewar = require('../middleware')

