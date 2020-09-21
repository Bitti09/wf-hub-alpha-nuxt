import fissurePlanets from '@/assets/json/planets.json'
import initialWorldstate from '@/assets/json/initialWorldstate.json'
import trackables from '~/assets/json/trackables.json'
import components from '~/assets/json/components.json'

const apiBase = 'https://api.warframestat.us' || process.env.VUE_APP_API_BASE

export const state = () => ({
  worldstates: {
    pc: initialWorldstate.pc,
    ps4: initialWorldstate.ps4,
    xb1: initialWorldstate.xb1,
    switch: initialWorldstate.swi,
  },
  platform: [
    { short: 'pc', label: 'PC', icon: ['fas', 'desktop'] },
    { short: 'ps4', label: 'PS4', icon: ['fab', 'playstation'] },
    { short: 'xb1', label: 'XBox', icon: ['fab', 'xbox'] },
    { short: 'swi', label: 'Switch', icon: ['fas', 'gamepad'] },
  ],
  components,
  trackables,
  fissurePlanets,
  soundFilters: [],
  notificationsAllowed: 'default',
  notifiedIds: {
    pc: [],
    ps4: [],
    xb1: [],
    switch: [],
  },
  poeMapToggles: {
    'Map Label-toggle-value': true,
    'Fishing-toggle-value': true,
    'Grineer Camp-toggle-value': true,
    'Oddity-toggle-value': true,
    'Cetus Wisp-toggle-value': true,
    'Vomvalyst Lure-toggle-value': true,
    'Cave Entrance-toggle-value': true,
  },
  vallisMapToggles: {
    'Map Label-toggle-value': true,
    'Fishing-toggle-value': true,
    'Fishing Spots-toggle-value': true,
    'Mining Spots-toggle-value': true,
    'K-Drive-toggle-value': true,
    'Oddity-toggle-value': true,
    'Somachord Tone-toggle-value': true,
    'Toroids-toggle-value': true,
    'Special Caves-toggle-value': true,
  },
  locale: [
    { short: 'en', label: 'English' },
    { short: 'de', label: 'German' },
    { short: 'es', label: 'Spanish' },
    { short: 'fr', label: 'French' },
    { short: 'it', label: 'Italian' },
    { short: 'ko', label: 'Korean' },
    { short: 'pl', label: 'Polish' },
    { short: 'pt', label: 'Portuguese' },
    { short: 'ru', label: 'Russian' },
    { short: 'zh', label: 'Chinese' },
  ],
  bountyToggles: {},
  theme: [
    { short: 'theme-normal', label: 'Night' },
    {
      short: 'theme-retro-normal',
      label: 'Retro',
    },
    {
      short: 'theme-eidolon-normal',
      label: 'Eidolon',
    },
  ],
  activelocale: { short: 'en', label: 'English' },
  activetheme: { short: 'theme-normal', label: 'Night' },
  activeplatform: { short: 'pc', label: 'PC', icon: ['fas', 'desktop'] },
})

export const mutations = {
  settheme(state, theme) {
    state.activetheme = theme
    this.$warehouse.set('theme', theme)
  },
  commitLocale(state, locale) {
    state.activelocale = locale
    this.$warehouse.set('locale', locale)
  },
  commitPlatform(state, platform) {
    state.activeplatform = platform
    this.$warehouse.set('platform', platform)
  },
  commitWs: (state, [platform, worldstate]) => {
    state.worldstates[platform] = worldstate
  },

  commitComponentDisplayMode: (state, [key, newState]) => {
    state.components[key].display = newState
  },
  commitGridLayout: (state, [components]) => {
    state.grid.components = components
  },
  commitRewardState: (state, [key, newState]) => {
    const toSet = state.trackables.rewardTypes[key]
    toSet.state = newState
  },
  commitEventState: (state, [key, newState]) => {
    const toSet = state.trackables.eventTypes[key]
    toSet.state = newState
  },
  commitFissurePlanetState: (state, [key, newState]) => {
    const toSet = state.fissurePlanets[key]
    toSet.state = newState
  },
  commitSounds: (state, [sounds]) => {
    state.soundFilters = sounds
  },
  commitNotificationAllowance: (state, [newState]) => {
    state.notificationsAllowed = newState
  },
  notifiedIds: (state, [notifiedIds, platform]) => {
    state.notifiedIds[platform || state.platform] = notifiedIds
  },
  commitComponent: (state, [key, newState]) => {
    state.components[key] = newState
  },
  autoProgressNews: (state, [newState]) => {
    state.components.news.autoCycle = newState
  },
  poeMapToggles: (state, [toggles]) => {
    state.poeMapToggles = toggles
  },
  vallisMapToggles: (state, [toggles]) => {
    state.vallisMapToggles = toggles
  },
  toggleBountiesOpen: (state, [bountyType, newState]) => {
    state.bountyToggles[bountyType] = newState
  },
}
export const actions = {
  async updateWorldstate(context) {
    const { commit, getters } = context
    const res = await fetch(`${apiBase}/${getters.platform}`, {
      headers: {
        'Accept-Language': getters.locale,
      },
    })
    const ws = await res.json()
    commit('commitWs', [getters.platform, ws])
  },
}
export const getters = {
  worldstate: (state) => state.worldstates[state.platform],
  ostronSyndicate: (state) => {
    const worldstate = state.worldstates[state.platform]
    return (worldstate.syndicateMissions || []).filter((syndicate) =>
      syndicate.id.includes('CetusSyndicate')
    )[0]
  },
  solarisSyndicate: (state) => {
    const worldstate = state.worldstates[state.platform]
    return (worldstate.syndicateMissions || []).filter((syndicate) =>
      syndicate.id.includes('SolarisSyndicate')
    )[0]
  },
  entratiSyndicate: (state) => {
    const worldstate = state.worldstates[state.platform]
    return (worldstate.syndicateMissions || []).filter((syndicate) =>
      syndicate.id.includes('EntratiSyndicate')
    )[0]
  },
  locale: (state) => state.activelocale.short || 'en',
  platform: (state) => state.activeplatform.short || 'pc',
  theme: (state) => state.theme || 'night',
  componentState: (state) => state.components,
  trackableState: (state) => state.trackables,
  fissurePlanetStates: (state) => state.fissurePlanets,
  sounds: (state) => state.soundFilters,
  notificationAllowance: (state) => state.notificationsAllowed,
  notifiedIds: (state) => state.notifiedIds[state.platform],
  poeMapToggles: (state) => state.poeMapToggles,
  vallisMapToggles: (state) => state.vallisMapToggles,
  bountyToggles: (state) => state.bountyToggles,
}
