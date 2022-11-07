import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import bannerImg  from "../src/images/youtube-banner-templates-header-wide.jpg";


function HomePage() {
  return (
    <>
        <CSSReset />
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists} />
    </div>
    </>
  );
}

export default HomePage;


const StyledHeader = styled.div`
  img {
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
    border-radius: 0;
    width: 100%;
    height: 423px;
  }
`;
function Header() {
  console.log(bannerImg);
  return (
    <StyledHeader>
      <img className="banner-img" src={bannerImg.src} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="profile" />
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
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  );
}
