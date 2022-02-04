export interface IPokeDetail {
  pokeImage?: string;
  pokeName?: string;
  weight?: string;
  pokeCalcWeight?: string;
  height?: string;
  pokeCalcHeight?: string;
  types?: IPoke[];
}

export interface IPoke {
  type: {
    name: string;
  };
}
