// src/utils/starPositionGenerator.ts

/**
 * Genera posiciones distribuidas uniformemente sobre una esfera
 * usando la espiral de Fibonacci para evitar agrupaciones visuales.
 *
 * @param count  - Número de posiciones a generar
 * @param radius - Radio base de la esfera de distribución
 * @returns      Array de tuplas [x, y, z]
 */
export const generateStellarPositions = (
  count: number,
  radius: number
): [number, number, number][] => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399 radianes

  return Array.from({ length: count }, (_, i) => {
    const theta = goldenAngle * i;
    const phi   = Math.acos(1 - (2 * (i + 0.5)) / count);

    // Variación radial del 40 % al 100 % para dar profundidad
    const r = radius * (0.4 + Math.random() * 0.6);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    return [
      parseFloat(x.toFixed(2)),
      parseFloat(y.toFixed(2)),
      parseFloat(z.toFixed(2)),
    ];
  });
};
