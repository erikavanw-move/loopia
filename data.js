
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
     img   → ruta a imagen (local en /img/ o URL externa)
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
    img: "img/maratana.png",
  },

  // ── MAYO 2026 ───────────────────────────────────────────────
  {
    n: "Champa Ultra Race",
    d: "2026-05-01", dy: "01", mo: "MAY",
    city: "San Javier, Córdoba", prov: "Córdoba",
    dist: ["60K", "42K", "30K", "24K", "16K", "10K"],
    org: "champa", tipo: "trail",
    link: "https://champaultrarace.com.ar/",
    img: "https://www.masaireweb.com/wp-content/uploads/2025/01/470490686_18112424197439469_1174568657973069726_n-1440x925.jpg",
  },
  {
    n: "Maratón de Mendoza",
    d: "2026-05-03", dy: "03", mo: "MAY",
    city: "Mendoza", prov: "Mendoza",
    dist: ["42K", "21K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/maraton-de-mendoza-2026/",
    img: "https://maratondemendoza.com/2026/wp-content/uploads/2025/11/Circuito-42k.png",
  },
  {
    n: "Raid Andes",
    d: "2026-05-09", dy: "09", mo: "MAY",
    city: "Jujuy", prov: "Jujuy",
    dist: ["100K+"],
    org: "cdc", tipo: "trail",
    link: "https://raidandes.com/",
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7LEXMB2EKNB2LHTWBC4JN6IDZU.jpeg",
  },
  {
    n: "UE BsAs Run",
    d: "2026-05-10", dy: "10", mo: "MAY",
    city: "Palermo, CABA", prov: "CABA/GBA",
    dist: ["15K", "7K", "3K"],
    org: "ilvr", tipo: "calle",
    link: "https://iloverunn.framer.ai/",
    img: "img/uerun.png",
  },
  {
    n: "21K Rosario 2026",
    d: "2026-05-10", dy: "10", mo: "MAY",
    city: "Rosario", prov: "Rosario",
    dist: ["21K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/21k-rosario-2026/",
    img: "https://21krosario.com.ar/2026/wp-content/uploads/2026/02/1900x980-Home-slider-1.png",
  },
  {
    n: "NB 25K Buenos Aires",
    d: "2026-05-17", dy: "17", mo: "MAY",
    city: "Palermo, CABA", prov: "CABA/GBA",
    dist: ["25K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/nb-25k-buenos-aires-2026/",
    img: "https://www.newbalance.com.ar/dw/image/v2/BMDB_PRD/on/demandware.static/-/Library-Sites-NewBalanceSharedLibrary/default/dw3bbdc3b6/race-series/bsas-25k/Banners-25k-bsas-26_1920.jpg",
  },
  {
    n: "Fiestas Mayas Saucony",
    d: "2026-05-25", dy: "25", mo: "MAY",
    city: "CABA", prov: "CABA/GBA",
    dist: ["10K", "3K"],
    org: "cdc", tipo: "calle",
    link: "https://fiestasmayas.com.ar/",
    img: "https://fiestasmayas.com.ar/wp-content/uploads/2026/01/CDA08135-2-Enhanced-SR-scaled-e1769001701672.webp",
  },

  // ── JUNIO 2026 ──────────────────────────────────────────────
  {
    n: "Merlo Trail Ultra",
    d: "2026-06-05", dy: "05", mo: "JUN",
    city: "Merlo, San Luis", prov: "San Luis",
    dist: ["56K", "37K", "22K", "11K", "6K"],
    org: "mtu", tipo: "trail",
    link: "https://merlotrailultra.com.ar/",
    img: "img/utm.png",
  },
  {
    n: "15K Adizero del Sur",
    d: "2026-06-07", dy: "07", mo: "JUN",
    city: "Autódromo, CABA", prov: "CABA/GBA",
    dist: ["15K"],
    org: "nandu", tipo: "calle",
    link: "https://carrerasymaratonesnandu.com.ar/15k-autodromo/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsccWQzRQqF6q7f_-XTbM3gqUoIUsx4qIWsA&s",
  },
  {
    n: "21K La Plata 2026",
    d: "2026-06-14", dy: "14", mo: "JUN",
    city: "La Plata", prov: "CABA/GBA",
    dist: ["21K"],
    org: "sf", tipo: "calle",
    link: "https://sportsfacilities.com.ar/carrera/21k-la-plata-26/",
    img: "https://media.0221.com.ar/p/7d5ded57cddd70226f7a62bcaa2fe9ff/adjuntos/357/imagenes/100/163/0100163651/1400x0/smart/largada-media-maraton-la-plata-2024-3jpeg.jpeg",
  },
  {
    n: "21K Olympic Day",
    d: "2026-06-21", dy: "21", mo: "JUN",
    city: "Parque Roca, CABA", prov: "CABA/GBA",
    dist: ["21K", "10K"],
    org: "ilvr", tipo: "calle",
    link: "http://www.21k.ar",
    img: "img/olympic.png",
  },
  {
    n: "15K Open Sports Ciudad",
    d: "2026-06-28", dy: "28", mo: "JUN",
    city: "Mar del Plata", prov: "Mar del Plata",
    dist: ["15K", "10K", "5K"],
    org: "sf", tipo: "calle",
    link: "https://superate.com.ar/",
    img: "img/15opensport.png",
  },
  {
    n: "Circ. Estaciones Invierno",
    d: "2026-06-28", dy: "28", mo: "JUN",
    city: "Vicente López", prov: "CABA/GBA",
    dist: ["10K", "5K"],
    org: "cdc", tipo: "calle",
    link: "https://www.clubdecorredores.com/carreras/520/",
    img: "img/clubdecorredores.png",
  },
  {
    n: "Media Maratón Colonia",
    d: "2026-06-28", dy: "28", mo: "JUN",
    city: "Colonia del Sacramento, Uruguay", prov: "Internacional",
    dist: ["21K", "10K", "5K"],
    org: "intl", tipo: "calle",
    link: "https://redtickets.uy/evento/Media-Maraton-Internacional-Colonia-del-Sacramento-21K/26331/",
    img: "img/colonia.jpg",
  },

  // ── JULIO 2026 ──────────────────────────────────────────────
  {
    n: "EcoTrail Argentina",
    d: "2026-07-05", dy: "05", mo: "JUL",
    city: "GBA", prov: "CABA/GBA",
    dist: ["50K", "25K"],
    org: "ilvr", tipo: "trail",
    link: "https://iloverunn.framer.ai/",
    img: "img/ecotrail.png",
  },
  {
    n: "Nono Trail Run",
    d: "2026-07-09", dy: "09", mo: "JUL",
    city: "Nono, Córdoba", prov: "Córdoba",
    dist: ["42K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
    img: "img/nono.png",
  },

  // ── AGOSTO 2026 ─────────────────────────────────────────────
  {
    n: "Sierra Embrujada Trail",
    d: "2026-08-15", dy: "15", mo: "AGO",
    city: "Traslasierra, Córdoba", prov: "Córdoba",
    dist: ["21K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
    img: "img/trasla.png",
  },
  {
    n: "CUT 50 Ultra Trail",
    d: "2026-08-16", dy: "16", mo: "AGO",
    city: "Cosquín, Córdoba", prov: "Córdoba",
    dist: ["50K", "25K"],
    org: "ilvr", tipo: "trail",
    link: "https://iloverunn.framer.ai/",
    img: "img/cosquin.png",
  },
  {
    n: "Medio Maratón Bs As",
    d: "2026-08-23", dy: "23", mo: "AGO",
    city: "Buenos Aires", prov: "CABA/GBA",
    dist: ["21K"],
    org: "nandu", tipo: "calle",
    link: "https://www.maratondebuenosaires.com/",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXgf-775UtbPiM1dkSsByBjQBLlgOGJ1S90jcdFgdkK2GiiGLBUY9KA_W8VnCH6xOGVGFQpzxjYq6gsEADtEaUtGsfj_t5GP80F4GH8yMW2JI8LwGUl-IxTzxx75GKZimSZbWpfz1MFaQ/s1600/Imagen+2.png",
  },

  // ── SEPTIEMBRE 2026 ─────────────────────────────────────────
  {
    n: "Zenith Trail",
    d: "2026-09-11", dy: "11", mo: "SEP",
    city: "A confirmar", prov: "—",
    dist: ["21K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
    img: "img/zenith.png",
  },
  {
    n: "Tierra de Gigantes",
    d: "2026-09-15", dy: "—", mo: "SEP",
    city: "San Juan", prov: "San Juan",
    dist: ["42K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
    img: "https://cada-atletismo.org/wp-content/uploads/2025/tierra-gigantes.jpg",
  },
  {
    n: "Maratón de Buenos Aires",
    d: "2026-09-20", dy: "20", mo: "SEP",
    city: "Buenos Aires", prov: "CABA/GBA",
    dist: ["42K"],
    org: "nandu", tipo: "calle",
    link: "https://www.maratondebuenosaires.com/",
    img: "https://res.cloudinary.com/kavval/image/upload/c_lfill,f_auto,w_1600,h_550,g_auto,q_auto:low/events/amerique-du-sud/argentine/ville-autonome-de-buenos-aires/marathon-de-buenos-aires/fhirt9ijldmtr6yg3tau",
  },

  // ── OCTUBRE 2026 ────────────────────────────────────────────
  {
    n: "UTACCH Ultra Trail 15 años",
    d: "2026-10-09", dy: "09", mo: "OCT",
    city: "Villa Yacanto, Córdoba", prov: "Córdoba",
    dist: ["100MI", "100K", "75K", "55K", "38K", "26K", "15K"],
    org: "utacch", tipo: "trail",
    link: "https://www.utacchultratrail.com/",
    img: "https://www.utacchultratrail.com/wp-content/uploads/2022/11/FER_0383-1-1024x439.jpg",
  },
  {
    n: "Media Maratón Triple Frontera",
    d: "2026-10-11", dy: "11", mo: "OCT",
    city: "Puerto Iguazú / Foz / Cdad. del Este", prov: "Misiones",
    dist: ["21K", "10.5K"],
    org: "intl", tipo: "calle",
    link: "https://www.instagram.com/mediadelatriplefrontera/",
    img: "img/triplefrontera.png",
  },
  {
    n: "10K San Isidro PUMA",
    d: "2026-10-25", dy: "25", mo: "OCT",
    city: "San Isidro", prov: "CABA/GBA",
    dist: ["10K"],
    org: "nandu", tipo: "calle",
    link: "https://carrerasymaratonesnandu.com.ar/10k-sanisidro",
    img: "https://traileros.ar/wp-content/uploads/2024/10/001-10k-puma-SAN-ISIDRO.jpg",
  },
  {
    n: "McDonald's Run",
    d: "2026-10-25", dy: "25", mo: "OCT",
    city: "Vicente López", prov: "CABA/GBA",
    dist: ["10K", "5K"],
    org: "cdc", tipo: "calle",
    link: "https://www.clubdecorredores.com/carreras/521/",
    img: "img/mcdonalds.png",
  },

  // ── NOVIEMBRE 2026 ──────────────────────────────────────────
  {
    n: "K42 Argentina",
    d: "2026-11-07", dy: "07", mo: "NOV",
    city: "Villa La Angostura", prov: "Patagonia",
    dist: ["42K", "21K", "10K"],
    org: "cada", tipo: "trail",
    link: "https://cada-atletismo.org/circuito-nacional-de-trail-y-montana-2026/",
    img: "https://argentina.kseries.com.ar/img/42k-modal.jpg",
  },
  {
    n: "Bariloche by UTMB",
    d: "2026-11-18", dy: "18", mo: "NOV",
    city: "Bariloche", prov: "Patagonia",
    dist: ["100K+", "50K", "20K"],
    org: "utmb", tipo: "trail",
    link: "https://bariloche.utmb.world",
    img: "https://res.cloudinary.com/utmb-world/image/upload/q_auto/f_auto/c_fill,g_auto/if_w_gt_1920/c_scale,w_1920/if_end/v1/bariloche/EMA_9222_7dbfd9eb92?_a=ATADJAA0",
  },
  {
    n: "adidas 10K Night Run",
    d: "2026-11-28", dy: "28", mo: "NOV",
    city: "Puerto Madero", prov: "CABA/GBA",
    dist: ["10K"],
    org: "nandu", tipo: "calle",
    link: "https://carrerasymaratonesnandu.com.ar/10k-puerto-madero/",
    img: "https://www.clarin.com/2025/12/13/atSA3kxQ1_1256x620__1.jpg",
  },

  // ── 2027 ────────────────────────────────────────────────────
  {
    n: "Patagonia Run 2027 ★",
    d: "2027-04-07", dy: "07", mo: "ABR",
    city: "San Martín de los Andes", prov: "Patagonia",
    dist: ["100MI", "110K", "70K", "42K", "21K", "10K"],
    org: "pr", tipo: "trail",
    link: "https://patagoniarun.com/",
    img: "img/patagoniarun.png",
  },
];