const router = require("koa-router")()

const users = require("./users")

router.prefix("/users")
router.get("/", users.get)
router.post("/", users.post)
router.put("/", users.put)

module.exports = router
