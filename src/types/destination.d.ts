interface DestinationDetail {
  title: string
  value: string
}

interface Destination {
  destination: string
  image: TabImage
  description: string
  details: DestinationDetail[]
}

interface TabImage {
  src: {
    png: string
    webp: string
  }
  alt: string
}
