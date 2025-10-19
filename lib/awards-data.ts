export interface Nominee {
  id: string
  name: string
  description: string
  thumbnailUrl: string
}

export interface Category {
  id: string
  title: string
  description: string
  nominees: Nominee[]
}

export const categories: Category[] = [
  {
    id: "best-clip",
    title: "Best Clip of the Year",
    description: "The most memorable, hilarious, or epic moment captured on stream",
    nominees: [
      {
        id: "clip-1",
        name: "The Great Escape",
        description: "An incredible clutch moment that had everyone on the edge of their seats",
        thumbnailUrl: "/gaming-clutch.png",
      },
      {
        id: "clip-2",
        name: "Laugh Attack",
        description: "Pure comedy gold that had the entire chat in tears",
        thumbnailUrl: "/streamer-laughing.jpg",
      },
      {
        id: "clip-3",
        name: "Epic Fail",
        description: "Sometimes the best moments are the ones that go hilariously wrong",
        thumbnailUrl: "/gaming-fail.jpg",
      },
      {
        id: "clip-4",
        name: "Wholesome Moment",
        description: "A heartwarming interaction that reminded us why we love this community",
        thumbnailUrl: "/wholesome-gaming.jpg",
      },
    ],
  },
  {
    id: "best-chatter",
    title: "Best Chatter",
    description: "The community member who brings the most energy and positivity to chat",
    nominees: [
      {
        id: "chatter-1",
        name: "ForestGuardian42",
        description: "Always there with the perfect emote at the perfect time",
        thumbnailUrl: "/twitch-chat-emotes.jpg",
      },
      {
        id: "chatter-2",
        name: "GnomeFriend99",
        description: "Brings positivity and support to every stream",
        thumbnailUrl: "/positive-community.jpg",
      },
      {
        id: "chatter-3",
        name: "MemeKing2024",
        description: "The undisputed champion of chat memes",
        thumbnailUrl: "/meme-culture.jpg",
      },
      {
        id: "chatter-4",
        name: "NightOwlViewer",
        description: "Never misses a stream, no matter the time",
        thumbnailUrl: "/night-owl-gaming.jpg",
      },
    ],
  },
  {
    id: "best-emote",
    title: "Best Emote",
    description: "The custom emote that defined the year",
    nominees: [
      {
        id: "emote-1",
        name: "gnomeLove",
        description: "The wholesome heart of our community",
        thumbnailUrl: "/heart-emote.jpg",
      },
      {
        id: "emote-2",
        name: "gnomeHype",
        description: "For those epic hype moments",
        thumbnailUrl: "/hype-emote.jpg",
      },
      {
        id: "emote-3",
        name: "gnomePanic",
        description: "When things go hilariously wrong",
        thumbnailUrl: "/panic-emote.jpg",
      },
      {
        id: "emote-4",
        name: "gnomeVibes",
        description: "Just chilling and enjoying the stream",
        thumbnailUrl: "/chill-vibes-emote.jpg",
      },
    ],
  },
  {
    id: "best-stream-series",
    title: "Best Stream Series",
    description: "The ongoing series or playthrough that kept us coming back",
    nominees: [
      {
        id: "series-1",
        name: "Forest Adventures",
        description: "An epic journey through mystical lands",
        thumbnailUrl: "/fantasy-forest-game.jpg",
      },
      {
        id: "series-2",
        name: "Chaos Multiplayer Nights",
        description: "Pure chaos with friends and community",
        thumbnailUrl: "/multiplayer-gaming-chaos.jpg",
      },
      {
        id: "series-3",
        name: "Cozy Building Streams",
        description: "Relaxing creativity and construction",
        thumbnailUrl: "/cozy-building-game.jpg",
      },
      {
        id: "series-4",
        name: "Horror Game Marathon",
        description: "Screams, scares, and unforgettable reactions",
        thumbnailUrl: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "community-mvp",
    title: "Community MVP",
    description: "The person who went above and beyond for the community",
    nominees: [
      {
        id: "mvp-1",
        name: "ModMaster",
        description: "Keeps the chat safe and welcoming for everyone",
        thumbnailUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "mvp-2",
        name: "ArtistGnome",
        description: "Creates amazing fan art that brings joy to all",
        thumbnailUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "mvp-3",
        name: "ClipChampion",
        description: "Always there to capture and share the best moments",
        thumbnailUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "mvp-4",
        name: "EventOrganizer",
        description: "Makes community events happen and brings us together",
        thumbnailUrl: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
]
