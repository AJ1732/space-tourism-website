import { images } from '@/assets/images'

export const DESTINATION_TABS: Record<string, Destination> = {
  moon: {
    destination: 'moon',
    image: {
      src: images['destination-moon'],
      alt: 'The Moon',
    },
    description:
      'See our planet as you"ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you"re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    details: [
      { title: 'avg. distance', value: '384,400 km' },
      { title: 'est. travel time', value: '3 days' },
    ],
  },
  mars: {
    destination: 'mars',
    image: {
      src: images['destination-mars'],
      alt: 'Planet Mars',
    },
    description:
      'Don"t forget to pack your hiking boots. You"ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It"s two and a half times the size of Everest!',
    details: [
      { title: 'avg. distance', value: '225 mil. km' },
      { title: 'est. travel time', value: '9 months' },
    ],
  },
  europa: {
    destination: 'europa',
    image: {
      src: images['destination-europa'],
      alt: 'Moon Europa',
    },
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover"s dream. With an icy surface, it"s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    details: [
      { title: 'avg. distance', value: '628 mil. km' },
      { title: 'est. travel time', value: '3 years' },
    ],
  },
  titan: {
    destination: 'titan',
    image: {
      src: images['destination-titan'],
      alt: 'Moon Titan',
    },
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    details: [
      { title: 'avg. distance', value: '1.6 bil. km' },
      { title: 'est. travel time', value: '7 years' },
    ],
  },
} as const
