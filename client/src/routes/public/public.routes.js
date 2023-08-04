import ArtistPage from "@/views/Artist/ArtistPage/ArtistPage";
import HomePage from "@/views/Home/HomePage/HomePage";
import MarketplacePage from "@/views/Marketplace/MarketplacePage/MarketplacePage";
import NftPage from "@/views/Nft/NftPage/NftPage";
import RankingsPage from "@/views/Rankings/RankingsPage/RankingsPage";
import LoginPage from "@/views/UserAuth/Login/LoginPage/LoginPage";
import SignUpPage from "@/views/UserAuth/SignUp/SignUpPage/SignUpPage";

export default [
  { path: "/", element: HomePage },
  { path: "/signup", element: SignUpPage },
  { path: "/login", element: LoginPage },
  { path: "/artist/:id", element: ArtistPage },
  { path: "/nft/:id", element: NftPage },
  { path: "/marketplace", element: MarketplacePage },
  { path: "/rankings", element: RankingsPage },
]