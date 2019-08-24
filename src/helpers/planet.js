export function planetUrlToId (url) {
  const match = url.match(/planets\/(?<id>[0-9]+)/)
  return match.groups.id
}