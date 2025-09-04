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
