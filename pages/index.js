import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  
   const [valorDoFiltro, setValorDoFiltro] = React.useState("");
   

  return (
    <>

    <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
      {/* Prop Drilling*/}
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header />
      <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          Conteúdo
        </Timeline>
    </div>
    </>
  
  )
}

export default HomePage;
  

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-color: blue ;
  /* esse modelo é pelo Prop Drill, as vezes não teremos o config.js no projeto, assim é um meio de conseguir o mesmo resultado */
  background-image: url(${({bg}) => bg});
  /* resultado se o projeto nos proporciona um config.js */
  /* background-image: url(${config.bg}); */
  height: 230px;

`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://media.licdn.com/dms/image/C4E03AQEnfeN1HHSEKg/profile-displayphoto-shrink_800_800/0/1554688119881?e=1697673600&v=beta&t=AbbxcJOXF3vQeZ_pjw78W_44FXhSxjZzy0XQDaLL9es`} />
        <div>
          <h2>
            {config.name}
            </h2>
          <p>
            {config.job}
            </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline({searchValue, ...propriedades}) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
    return (
    <StyledTimeline>
       {
       playlistNames.map((playlistName) => {
          const videos = propriedades.playlists[playlistName];
          // console.log(playlistName);
          // console.log(videos);
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {
                  videos.filter((video) => {
                    const titleNormalized = video.title.toLowerCase();
                    const searchValueNormalized = searchValue.toLowerCase();
                    return titleNormalized.includes(searchValueNormalized)

                  }).map((video) => {
                    return (
                      <a key={video.url} href={video.url}>
                        <img src={video.thumb} />
                        <span>
                          {video.title}
                        </span>
                      </a>
                  )
                })}
              </div>
            </section>
          )
      })} 
      </StyledTimeline>
    )}
    
    

