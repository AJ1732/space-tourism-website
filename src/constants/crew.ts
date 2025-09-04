import { images } from '@/assets/images'

export const CREW_TABS: Record<number, Crew> = {
  1: {
    position: 'Commander',
    name: 'Douglas Hurley',
    image: { src: images['crew-douglas-hurley'], alt: 'Douglas Hurley' },
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  2: {
    position: 'Mission Specialist ',
    name: 'Mark Shuttleworth',
    image: { src: images['crew-mark-shuttleworth'], alt: 'Douglas Hurley' },
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  3: {
    position: 'Pilot',
    name: 'Victor Glover',
    image: { src: images['crew-victor-glover'], alt: 'Douglas Hurley' },
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  4: {
    position: 'Flight Engineer',
    name: 'Anousheh Ansari',
    image: { src: images['crew-anousheh-ansari'], alt: 'Douglas Hurley' },
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
} as const
