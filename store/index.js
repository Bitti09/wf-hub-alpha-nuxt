export const state = () => ({
  theme: [
    { short: 'theme-normal', label: 'Night' },
    /* { short: 'theme-normal-grineer', label: 'Bright Grineer' },
    { short: 'theme-normal-corpus', label: 'Bright Corpus' },
    { short: 'theme-normal-solaris', label: 'Bright Solaris' }, */
    {
      short: 'theme-retro-normal',
      label: 'Retro',
    },
    {
      short: 'theme-eidolon-normal',
      label: 'Eidolon',
    },
    /*     { short: 'theme-dark-corpus', label: 'Dark Corpus' },
    { short: 'theme-dark-test2', label: 'Dark Grineer' },
    { short: 'theme-dark-test3', label: 'Dark Solaris' }, */
  ],
  activetheme: { short: 'theme-normal', label: 'Night' },
})

export const mutations = {
  settheme(state, theme) {
    state.activetheme = theme
    this.$warehouse.set('theme', theme)
  },
}
