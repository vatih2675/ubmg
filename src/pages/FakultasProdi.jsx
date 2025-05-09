import { useState } from "react";
import Head from "../components/Head";
import Index from "./fakultasprodi/Index";
import Fakultas from "./fakultasprodi/Fakultas";
import Prodi from "./fakultasprodi/Prodi";

export default function FakultasProdi({fakultasprodi}){
    const title = "Fakultas & Program Studi";
    const [fakultas, setFakultas] = useState(null)
    const [prodi, setProdi] = useState(null)

    function changeFakultas(index){
      setFakultas(index)
    }

    function changeProdi(index){
      setProdi(index)
    }

    let contentFakultas;
    let dataFakultas = [];
    let dataProdi = [];

    if(fakultas == null){
      contentFakultas = <Index title={title} fakultasprodi={fakultasprodi} changeFakultas={changeFakultas} />
    }else{
      if(prodi == null){
        dataFakultas = fakultasprodi[fakultas]
        contentFakultas = (
          <Fakultas
            title={dataFakultas.judul}
            fakultas={dataFakultas}
            changeFakultas={changeFakultas}
            changeProdi={changeProdi}
          />
        );
      }else{
        dataFakultas = fakultasprodi[fakultas];
        dataProdi = fakultasprodi[fakultas].prodi[prodi];
        contentFakultas = (
          <Prodi
            title={dataFakultas.judul}
            prodi={dataProdi}
            changeProdi={changeProdi}
          />
        );
      }
    }
  return (
    <main>
      <Head title={title} />
      {contentFakultas}
    </main>
  );
}
