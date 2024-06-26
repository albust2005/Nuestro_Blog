// import { noticias } from "./noticias.json";
import { useNoticiaContext } from "../providers/noticiaProvider";

export function Extras({ id , indice }) {

  const noticias = useNoticiaContext();

  const noticia = noticias.find((noticia) => noticia.id == id);

  switch (indice) {
    case 2:
      return (
        <>
          <img src={noticia.image} alt="" />
          <audio className="-z-10 mt-[1vh]" src={noticia.audio} controls id='miAudio'></audio>
        </>
      );
      break;

    case 3:
      return (
        <a
          className=" text-gray-500 underline underline-offset-1 tracking-[1px] hover:text-jade-600"
          href={noticia.archivo}
        >
          Descárgame
        </a>
      );
      break;

    default:
      return console.log("Noticia ejercidas");
    break;
  }
}
