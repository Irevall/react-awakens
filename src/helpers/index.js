export function toggleClassName (baseClassName, modifier, trigger) {
  return `${baseClassName}${trigger ? ` ${baseClassName}--${modifier}` : ''}`
}

export function planetUrlToId (url) {
  const match = url.match(/planets\/(?<id>[0-9]+)/)
  return match.groups.id
}

export async function fakeResolvedPromise () {
  return new Promise(resolve => setTimeout(resolve, 1500))
}

export async function fakeRejectedPromise () {
  return new Promise((resolve, reject) => setTimeout(reject, 1500))
}