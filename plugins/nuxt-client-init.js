export default async (ctx) => {
  // for later use
  await ctx.store.dispatch('nuxtClientInit', ctx)
}
