import { error } from "@sveltejs/kit";
import series from "../../../constants/series";

/**
 * @param {{ params: { id: any; }; }} dados
 */
export function load(dados) {
    const serieId= dados.params.id;
    console.log(serieId)

    for(let serie of series) {
        if(serie.id == serieId) {
            return {serie}
        }
    }
    error(404, "Autor não encontrado");
}