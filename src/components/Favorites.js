import styled from "styled-components";

const StyledFavorites = styled.section`
  .favorite-container {
    display: flex;
    flex-direction: row;
  }

  .favorite-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  .favorite-name {
    font-weight: 300;
  }

  h2 {
    padding: 0px 16px;
    margin-bottom: 5px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black;
  }
`;

export default function Favorites(props) {
  const favoriteUsers = Object.keys(props.favorites);
  return (
    <StyledFavorites>
      {favoriteUsers.map((favorite) => {
        const users = props.favorites[favorite];
        return (
          <section>
            <h2>Favoritos do Github</h2>
            <div className="favorite-container">
              {users.map((user) => {
                return (
                  <a
                    href={`https://github.com/${user.username}`}
                    target="_blank"
                  >
                    <div className="favorite-info">
                      <img
                        src={`https://github.com/${user.avatar}.png`}
                        alt=""
                      />
                      <span className="favorite-name">{user.username}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledFavorites>
  );
}
