export default {
  get: key => localStorage.getItem(key),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: key => localStorage.removeItem(key)
}
