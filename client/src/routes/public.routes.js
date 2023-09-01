import ArtistPage from "@/views/Artist/ArtistPage.jsx";
import HomePage from "@/views/Home/HomePage.jsx";
import MarketplacePage from "@/views/Marketplace/MarketplacePage.jsx";
import NftPage from "@/views/Nft/NftPage.jsx";
import RankingsPage from "@/views/Rankings/RankingsPage.jsx";
import LoginPage from "@/views/UserAuth/LoginPage.jsx";
import SignUpPage from "@/views/UserAuth/SignUpPage.jsx";
import CollectionPage from '@/views/Collection/CollectionPage.jsx'

export default [
  { path: "/", element: HomePage },
  { path: "/signup", element: SignUpPage },
  { path: "/login", element: LoginPage },
  { path: "/artist/:id", element: ArtistPage },
  { path: "/nft/:id", element: NftPage },
  { path: "/marketplace", element: MarketplacePage },
  { path: "/rankings", element: RankingsPage },
  { path: "/collection/:id", element: CollectionPage }
]