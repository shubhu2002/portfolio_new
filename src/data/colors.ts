// export default function getColorName(text: string): {
//   bg: string;
//   text: string;
// } {
//   const colorMap: Record<string, { bg: string; text: string }> = {
//     "React JS": { bg: "#ffffff", text: "#58c4dc" },
//     "Next JS": { bg: "#ffffff", text: "#000000" },
//     "Mesh JS": { bg: "#444444", text: "#ffffff" },
//     Supabase: { bg: "#1c1c1c", text: "#33b47a" },
//     Appwrite: { bg: "#ffffff", text: "#fd366e" },
//     "Mongo DB": { bg: "#001e2b", text: "#00ed64" },
//     "C++": { bg: "#6495ca", text: "#ffffff" },
//     Typescript: { bg: "#3178c6", text: "#ffffff" },
//     "Express JS": { bg: "#ffffff", text: "#444" },
//     "Node JS": { bg: "#ffffff", text: "#77ad65" },
//     "Tailwind CSS": { bg: "#ffffff", text: "#34bcf8" },
//     HTML5: { bg: "#e96228", text: "#ffffff" },
//     JavaScript: { bg: "#f6d03c", text: "#ffffff" },
//     password: { bg: "#1f1f1f", text: "red" },
//   };

//   return colorMap[text] ?? { bg: "#1f1f1f", text: "#ffffff" }; // Default to gray background and black text if not found
// }

export const getColorName = (seed: string) => {
  // Generate a hash code based on the user's name
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const r = ((hash & 0xff) % 155) + 100; // Ensures the red component is within the bright range
  const g = (((hash >> 8) & 0xff) % 155) + 100; // Ensures the green component is within the bright range
  const b = (((hash >> 16) & 0xff) % 155) + 100; // Ensures the blue component is within the bright range

  const hexColor = `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)}`;

  return hexColor;
};
