function createKey (name) {
  return `mirumee-task:${name}`
}

function getStorage () {
  return localStorage
}

export function setItem (name, value) {
  getStorage().setItem(createKey(name), JSON.stringify(value))
}

export function getItem (name, defaultValue) {
  const value = getStorage().getItem(createKey(name))
  if (!value) return defaultValue
  try { return JSON.parse(value) } catch (err) { return value }
}

export function removeItem (name) {
  getStorage().removeItem(createKey(name))
}
