/* eslint-disable import/prefer-default-export */
/* eslint-disable no-inline-comments */

export const colorLuminance = (hex, lum = 0) => {
  // Validate hex string
  let copyHex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    copyHex = copyHex[0] + copyHex[0] + copyHex[1] + copyHex[1] + copyHex[2] + copyHex[2]
  }

  // Convert to decimal and change luminosity
  let rgb = '#'
  let c
  let i
  for (i = 0; i < 3; i++) {
    c = parseInt(copyHex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    /*
     *   We concat c with 00 and take the substring starting at the index
     *   wich equal the length of c.
     *   That allows us to take 00 if c.length === 0
     *   or take 0c if c.length === 1
     *   or just take c if c.length === 2
     */
    rgb += `00${c}`.substr(c.length)
  }

  return rgb
}

export const getDarkBoxShadow = (color, distance = 5, intensity = 15, inset = false) => {
  const blur = 10 + 2 * (distance - 5)
  const lum = intensity / 100
  return `${inset ? 'inset ' : ''}-${distance}px -${distance}px ${blur}px ${colorLuminance(color, lum)}`
}

export const getLightBoxShadow = (color, distance = 5, intensity = 15, inset = false) => {
  const blur = 10 + 2 * (distance - 5)
  const lum = (intensity / 100) * -1
  return `${inset ? 'inset ' : ''}${distance}px ${distance}px ${blur}px ${colorLuminance(color, lum)}`
}
