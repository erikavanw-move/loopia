/* ============================================================
   LOOPIA — data.js
   Todas las carreras. Agregar nuevas acá.

   Campos:
     n     → nombre
     d     → fecha ISO (YYYY-MM-DD), usada para ordenar
     dy    → día a mostrar ("01"–"31" o "—" si no está confirmado)
     mo    → mes abreviado en español ("ENE", "FEB", etc.)
     city  → ciudad / lugar
     prov  → provincia para el filtro (debe coincidir con data-p en HTML)
     dist  → array de distancias disponibles
     org   → clave del organizador (ver ORG_CONFIG)
     tipo  → "calle" o "trail"
     link  → URL de inscripción o info
   ============================================================ */

const ORG_CONFIG = {
  sf:     { label: "Sportsfacilities",   badgeClass: "org-sf" },
  cdc:    { label: "Club de Corredores", badgeClass: "org-cdc" },
  nandu:  { label: "Ñandú",             badgeClass: "org-nandu" },
  ilvr:   { label: "iloverunn",          badgeClass: "org-ilvr" },
  utmb:   { label: "UTMB World Series",  badgeClass: "org-utmb" },
  pr:     { label: "Patagonia Run",      badgeClass: "org-pr" },
  champa: { label: "Champa Ultra Race",  badgeClass: "org-champa" },
  cada:   { label: "CADA Nacional",      badgeClass: "org-cada" },
  mtu:    { label: "Merlo Trail Ultra",  badgeClass: "org-mtu" },
  utacch: { label: "UTACCH Ultra Trail", badgeClass: "org-utacch" },
  intl:   { label: "Internacional",      badgeClass: "org-intl" },
};

const RACES = [
  // ── ABRIL 2026 ──────────────────────────────────────────────
  {
    n: "Maratana 2026",
    d: "2026-04-26", dy: "26", mo: "ABR",
    city: "Puerto Madero, CABA", prov: "CABA/GBA",
    dist: ["15K", "10K", "3K"],
    org: "cdc", tipo: "calle",
    link: "https://www.clubdecorredores.com/carreras/519/Maratana/",
  },

  // ── MAYO 2026 ───────────────────────────────────────────────
  {
    n: "Champa Ultra Race",
    d: "2026-05-01", dy: "01", mo: "MAY",
    city: "San Javier, Córdoba", prov: "Córdoba",
    dist: ["60K", "42K", "30K", "24K", "16K", "10K"],
    org: "champa", tipo: "trail",
    link: "https://champaultrarace.com.ar/",
  },
  {
    n: "Maratón de Mendoza",
    d: "2026-05-03", dy: "03", mo: "MAY",
    city: "Mendoza", prov: "Mendoza",
    dist: ["42K", "21K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/maraton-de-mendoza-2026/",
  },
  {
    n: "Raid Andes",
    d: "2026-05-09", dy: "09", mo: "MAY",
    city: "Jujuy", prov: "Jujuy",
    dist: ["100K+"],
    org: "cdc", tipo: "trail",
    link: "https://raidandes.com/",
  },
  {
    n: "UE BsAs Run",
    d: "2026-05-10", dy: "10", mo: "MAY",
    city: "Palermo, CABA", prov: "CABA/GBA",
    dist: ["15K", "7K", "3K"],
    org: "ilvr", tipo: "calle",
    link: "https://iloverunn.framer.ai/",
  },
  {
    n: "21K Rosario 2026",
    d: "2026-05-10", dy: "10", mo: "MAY",
    city: "Rosario", prov: "Rosario",
    dist: ["21K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/21k-rosario-2026/",
  },
  {
    n: "NB 25K Buenos Aires",
    d: "2026-05-17", dy: "17", mo: "MAY",
    city: "Palermo, CABA", prov: "CABA/GBA",
    dist: ["25K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/nb-25k-buenos-aires-2026/",
  },
  {
    n: "Fiestas Mayas Saucony",
    d: "2026-05-25", dy: "25", mo: "MAY",
    city: "CABA", prov: "CABA/GBA",
    dist: ["10K", "3K"],
    org: "cdc", tipo: "calle",
    link: "https://fiestasmayas.com.ar/",
  },

  // ── JUNIO 2026 ──────────────────────────────────────────────
  {
    n: "Merlo Trail Ultra",
    d: "2026-06-05", dy: "05", mo: "JUN",
    city: "Merlo, San Luis", prov: "San Luis",
    dist: ["56K", "37K", "22K", "11K", "6K"],
    org: "mtu", tipo: "trail",
    link: "https://merlotrailultra.com.ar/",
  },
  {
    n: "Media Maratón Colonia",
    d: "2026-06-28", dy: "28", mo: "JUN",
    city: "Colonia del Sacramento, Uruguay", prov: "Internacional",
    dist: ["21K", "10K", "5K"],
    org: "intl", tipo: "calle",
    link: "https://redtickets.uy/evento/Media-Maraton-Internacional-Colonia-del-Sacramento-21K/26331/",
  },
  {
    n: "15K Adizero del Sur",
    d: "2026-06-07", dy: "07", mo: "JUN",
    city: "Autódromo, CABA", prov: "CABA/GBA",
    dist: ["15K"],
    org: "nandu", tipo: "calle",
    link: "https://carrerasymaratonesnandu.com.ar/15k-autodromo/",
  },
  {
    n: "21K La Plata 2026",
    d: "2026-06-14", dy: "14", mo: "JUN",
    city: "La Plata", prov: "CABA/GBA",
    dist: ["21K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/21k-la-plata-26/",
  },
  {
    n: "21K Olympic Day",
    d: "2026-06-21", dy: "21", mo: "JUN",
    city: "Parque Roca, CABA", prov: "CABA/GBA",
    dist: ["21K", "10K"],
    org: "ilvr", tipo: "calle",
    link: "http://www.21k.ar",
  },
  {
    n: "15K Open Sports Ciudad",
    d: "2026-06-28", dy: "28", mo: "JUN",
    city: "Mar del Plata", prov: "Mar del Plata",
    dist: ["15K", "10K", "5K"],
    org: "sf", tipo: "calle",
    link: "https://superate.com.ar/",
  },
  {
    n: "Circ. Estaciones Invierno",
    d: "2026-06-28", dy: "28", mo: "JUN",
    city: "Vicente López", prov: "CABA/GBA",
    dist: ["10K", "5K"],
    org: "cdc", tipo: "calle",
    link: "https://www.clubdecorredores.com/carreras/520/",
  },

  // ── JULIO 2026 ──────────────────────────────────────────────
  {
    n: "EcoTrail Argentina",
    d: "2026-07-05", dy: "05", mo: "JUL",
    city: "GBA", prov: "CABA/GBA",
    dist: ["50K", "25K"],
    org: "ilvr", tipo: "trail",
    link: "https://iloverunn.framer.ai/",
  },
  {
    n: "Nono Trail Run",
    d: "2026-07-09", dy: "09", mo: "JUL",
    city: "Nono, Córdoba", prov: "Córdoba",
    dist: ["42K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
  },

  // ── AGOSTO 2026 ─────────────────────────────────────────────
  {
    n: "Sierra Embrujada Trail",
    d: "2026-08-15", dy: "15", mo: "AGO",
    city: "Traslasierra, Córdoba", prov: "Córdoba",
    dist: ["21K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
  },
  {
    n: "CUT 50 Ultra Trail",
    d: "2026-08-16", dy: "16", mo: "AGO",
    city: "Cosquín, Córdoba", prov: "Córdoba",
    dist: ["50K", "25K"],
    org: "ilvr", tipo: "trail",
    link: "https://iloverunn.framer.ai/",
  },
  {
    n: "Medio Maratón Bs As",
    d: "2026-08-23", dy: "23", mo: "AGO",
    city: "Buenos Aires", prov: "CABA/GBA",
    dist: ["21K"],
    org: "nandu", tipo: "calle",
    link: "https://www.maratondebuenosaires.com/",
  },

  // ── SEPTIEMBRE 2026 ─────────────────────────────────────────
  {
    n: "Zenith Trail",
    d: "2026-09-11", dy: "11", mo: "SEP",
    city: "A confirmar", prov: "—",
    dist: ["21K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
  },
  {
    n: "Tierra de Gigantes",
    d: "2026-09-15", dy: "—", mo: "SEP",
    city: "San Juan", prov: "San Juan",
    dist: ["42K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
  },
  {
    n: "Maratón de Buenos Aires",
    d: "2026-09-20", dy: "20", mo: "SEP",
    city: "Buenos Aires", prov: "CABA/GBA",
    dist: ["42K"],
    org: "nandu", tipo: "calle",
    link: "https://www.maratondebuenosaires.com/",
  },

  // ── OCTUBRE 2026 ────────────────────────────────────────────
  {
    n: "10K San Isidro PUMA",
    d: "2026-10-25", dy: "25", mo: "OCT",
    city: "San Isidro", prov: "CABA/GBA",
    dist: ["10K"],
    org: "nandu", tipo: "calle",
    link: "https://carrerasymaratonesnandu.com.ar/10k-sanisidro",
  },
  {
    n: "McDonald's Run",
    d: "2026-10-25", dy: "25", mo: "OCT",
    city: "Vicente López", prov: "CABA/GBA",
    dist: ["10K", "5K"],
    org: "cdc", tipo: "calle",
    link: "https://www.clubdecorredores.com/carreras/521/",
  },

  // ── NOVIEMBRE 2026 ──────────────────────────────────────────
  {
    n: "K42 Argentina",
    d: "2026-11-07", dy: "07", mo: "NOV",
    city: "Villa La Angostura", prov: "Patagonia",
    dist: ["42K", "21K", "10K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
  },
  {
    n: "Bariloche by UTMB",
    d: "2026-11-18", dy: "18", mo: "NOV",
    city: "Bariloche", prov: "Patagonia",
    dist: ["100K+", "50K", "20K"],
    org: "utmb", tipo: "trail",
    link: "https://bariloche.utmb.world",
  },
  {
    n: "adidas 10K Night Run",
    d: "2026-11-28", dy: "28", mo: "NOV",
    city: "Puerto Madero", prov: "CABA/GBA",
    dist: ["10K"],
    org: "nandu", tipo: "calle",
    link: "https://carrerasymaratonesnandu.com.ar/10k-puerto-madero/",
  },

  {
    n: "Media Maratón Triple Frontera",
    d: "2026-10-11", dy: "11", mo: "OCT",
    city: "Puerto Iguazú / Foz / Cdad. del Este", prov: "Misiones",
    dist: ["21K", "10.5K"],
    org: "intl", tipo: "calle",
    link: "https://www.instagram.com/mediadelatriplefrontera/",
  },
  {
    n: "UTACCH Ultra Trail 15 años",
    d: "2026-10-09", dy: "09", mo: "OCT",
    city: "Villa Yacanto, Córdoba", prov: "Córdoba",
    dist: ["100MI", "100K", "75K", "55K", "38K", "26K", "15K"],
    org: "utacch", tipo: "trail",
    link: "https://www.utacchultratrail.com/",
  },

  // ── 2027 ────────────────────────────────────────────────────
  {
    n: "Patagonia Run 2027 ★",
    d: "2027-04-07", dy: "07", mo: "ABR",
    city: "San Martín de los Andes", prov: "Patagonia",
    dist: ["100MI", "110K", "70K", "42K", "21K", "10K"],
    org: "pr", tipo: "trail",
    link: "https://patagoniarun.com/",
  },
];
