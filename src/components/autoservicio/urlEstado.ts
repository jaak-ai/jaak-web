// Persistencia del estado de autoservicio en la URL (query params), para que
// la selección sobreviva a un refresh y sea compartible por enlace.
// - `sel`: carrito, como `producto.tier` separados por coma (ej. sel=kyc.oro,ine.plata)
// - `nec`: necesidades elegidas en la Guía (ej. nec=identidad,firma)
// - `vol`: volumen elegido en la Guía (ej. vol=oro)
// Se usa history.replaceState (no el router) para no re-renderizar el server
// component ni ensuciar el historial; el hash del modo (#guia/#catalogo) se conserva.

export function leerParamUrl(clave: string): string | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get(clave);
}

export function escribirParamsUrl(cambios: Record<string, string | null>) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  Object.entries(cambios).forEach(([clave, valor]) => {
    if (valor) url.searchParams.set(clave, valor);
    else url.searchParams.delete(clave);
  });
  // Las comas de nuestros valores son válidas sin escapar en un query string;
  // se restauran para mantener la URL legible.
  url.search = url.searchParams.toString().replace(/%2C/gi, ",");
  window.history.replaceState(null, "", url);
}
