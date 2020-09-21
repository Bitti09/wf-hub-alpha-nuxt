export const state = () => ({
  theme: [
    { short: 'theme-normal', label: 'Default' },
    { short: 'theme-normal-grineer', label: 'Bright Grineer' },
    { short: 'theme-normal-corpus', label: 'Bright Corpus' },
    { short: 'theme-normal-solaris', label: 'Bright Solaris' },
    { short: 'theme-dark-normal', label: 'Dark' },
    { short: 'theme-dark-corpus', label: 'Dark Corpus' },
    { short: 'theme-dark-test2', label: 'Dark Grineer' },
    { short: 'theme-dark-test3', label: 'Dark Solaris' },
  ],
  activetheme: { short: 'theme-normal', label: 'Default' },
})

export const mutations = {
  settheme(state, theme) {
    state.activetheme = theme
    this.$warehouse.set('theme', theme)
  },
}
