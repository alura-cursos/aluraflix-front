/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import VideoList from '../../components/VideoList';
import videosRepository from '../../repositories/videos';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    videosRepository.getAll()
      .then((listaVideos) => {
        setDadosIniciais(listaVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((video, indice) => {
        if (indice === 0) {
          return (
            <div key={video.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].titulo}
                url={dadosIniciais[0].url}
                videoDescription={dadosIniciais[0].description}
              />
            </div>
          );
        }

        return (
          <VideoList
            key={video.id}
            videoURL={video.url}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
