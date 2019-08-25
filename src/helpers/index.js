export function toggleClassName (baseClassName, modifier, trigger) {
  return `${baseClassName}${trigger ? ` ${baseClassName}--${modifier}` : ''}`
}

export function planetUrlToId (url) {
  const match = url.match(/planets\/(?<id>[0-9]+)/)
  return match.groups.id
}