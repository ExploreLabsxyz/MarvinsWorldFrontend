import { Character, CharacterSchema } from "../types";

// Utility type for transforming database response to client type
export function transformCharacter(dbCharacter: CharacterSchema): Character {
  return {
    id: dbCharacter.id,
    name: dbCharacter.name,
    description: dbCharacter.description,
    imageUrl: dbCharacter.image_url,
    status: dbCharacter.status,
    seasonId: dbCharacter.season_id,
    createdAt: dbCharacter.created_at,
    updatedAt: dbCharacter.updated_at,
  };
}
