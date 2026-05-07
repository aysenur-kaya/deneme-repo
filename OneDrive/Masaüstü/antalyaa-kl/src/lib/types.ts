export type ServiceType = "klima" | "beyaz-esya";

export type DistrictRecord = {
  ilce: string;
  mahalleler: string[];
};

export type AntalyaData = {
  il: string;
  plaka_kodu: string;
  ilceler: DistrictRecord[];
};
