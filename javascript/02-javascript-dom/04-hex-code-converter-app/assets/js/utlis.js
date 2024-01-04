function hexToRgb(hex) {
  // Remove the hash character if present
  hex = hex.replace(/^#/, "");

  // Parse the hex values for each color component
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values as an object
  return { r, g, b };
}

function hexToHsl(hex) {
  // Remove the hash character if present
  hex = hex.replace(/^#/, "");

  // Convert hex to decimal
  var r = parseInt(hex.substring(0, 2), 16) / 255;
  var g = parseInt(hex.substring(2, 4), 16) / 255;
  var b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find min and max values
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);

  // Calculate lightness (L)
  var L = (max + min) / 2;

  // Calculate saturation (S)
  var S = L < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);

  // Calculate hue (H)
  var H;
  if (max === min) {
    H = 0; // undefined, achromatic
  } else {
    if (max === r) {
      H = (g - b) / (max - min);
    } else if (max === g) {
      H = 2 + (b - r) / (max - min);
    } else {
      H = 4 + (r - g) / (max - min);
    }
    H *= 60;
    if (H < 0) {
      H += 360;
    }
  }

  return { h: Math.round(H), s: Math.round(S * 100), l: Math.round(L * 100) };
}

export { hexToRgb, hexToHsl };
