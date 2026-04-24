export const BUSINESS = {
  name: 'Cuore Ristopizza',
  legalName: 'Cuore Ristopizza',
  description:
    "Pizzeria artigianale a Cogliate. Identità ibrida Lombardia-Mezzogiorno, impasti ad alta digeribilità (9 cereali, integrale, farro), accoglienza family-friendly e pet-friendly.",
  tagline: 'Passione e Amore in ogni trancio',
  subtagline: 'Cibo sano a buon prezzo con ingredienti selezionati',
  address: {
    street: 'Via Padovan 9/A',
    city: 'Cogliate',
    postal: '20815',
    region: 'MB',
    country: 'IT',
    countryName: 'Italia',
  },
  // TODO pre-deploy: verificare coordinate esatte via geocoder (Nominatim / Google)
  geo: { lat: 45.6483, lng: 9.0852 },
  phone: '+39 02 4978 9401',
  phoneHref: 'tel:+390249789401',
  phoneRaw: '+390249789401',
  whatsappHref: 'https://wa.me/390249789401',
  email: 'calia.dany@libero.it',
  social: {
    facebook: 'https://facebook.com/cuore.ristopizza',
    instagram: 'https://instagram.com/cuore.ristopizza',
  },
  // Weekly schedule. Slots in 24h format "HH:MM-HH:MM".
  hours: [
    { day: 'Lunedì', shortDay: 'Lun', dayIndex: 1, slots: [] as string[], closed: true },
    { day: 'Martedì', shortDay: 'Mar', dayIndex: 2, slots: ['11:30-14:30', '18:30-22:00'], closed: false },
    { day: 'Mercoledì', shortDay: 'Mer', dayIndex: 3, slots: ['11:30-14:30', '18:30-22:00'], closed: false },
    { day: 'Giovedì', shortDay: 'Gio', dayIndex: 4, slots: ['11:30-14:30', '18:30-22:00'], closed: false },
    { day: 'Venerdì', shortDay: 'Ven', dayIndex: 5, slots: ['11:30-14:30', '18:30-22:00'], closed: false },
    { day: 'Sabato', shortDay: 'Sab', dayIndex: 6, slots: ['11:30-14:30', '18:30-22:00'], closed: false },
    { day: 'Domenica', shortDay: 'Dom', dayIndex: 0, slots: ['18:30-22:00'], closed: false },
  ],
  payments: ['Mastercard', 'VISA', 'Bancomat', 'Contactless', 'Satispay'],
} as const;

export type BusinessData = typeof BUSINESS;
