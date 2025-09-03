interface DestinationDetail {
  title: string
  value: string
}

interface Destination {
  destination: string
  image: string
  description: string
  details: DestinationDetail[]
}
