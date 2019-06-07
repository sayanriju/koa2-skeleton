module.exports = {
  async get(ctx) {
    await ctx.render("index", {
      title: "Hello Koa 2!"
    })
  },
  async post(ctx) {
    ctx.body = {
      title: "Hello Koa 2!"
    }
  },
  async put(ctx) {
    ctx.body = "Hello, world!"
  }
}
