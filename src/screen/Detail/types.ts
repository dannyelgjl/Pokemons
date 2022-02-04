interface IPokersDetail {
  url: string;
  name?: string;
}

export type ParamList = {
  Detail: {
    item: IPokersDetail;
  };
};

export interface IPokemon {
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  weight: string;
  height: string;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}
