import { GenericResponse } from './generic-response';
import { Personagem } from './personagem';

export interface PersonagemResponse extends GenericResponse {
    results: Personagem[];
}
