export interface IPokeDetail {
  pokeImage?: string;
  pokeName?: string;
  weight?: string;
  pokeCalcWeight?: string;
  height?: string;
  pokeCalcHeight?: string;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}
