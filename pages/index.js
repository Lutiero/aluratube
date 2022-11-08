import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import bannerImg from "../src/images/youtube-banner-templates-header-wide.jpg";
import Favorites from "../src/components/Favorites";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  .user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner-img {
    width: 100%;
    height: auto;
    min-height: 200px;
    max-height: 25vw;
    object-fit: cover;
    margin-top: 50px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img className="banner-img" src={bannerImg.src} />
      <section className="user-info">
        <img className="user-avatar" src={`https://github.com/${config.github}.png`} alt="profile" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} alt={video.title} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
