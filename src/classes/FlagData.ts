export default class FlagData {
  id: Number;
  country: string;
  apiKeyWord: string;
  imagePath: string;
  isRoundAnswer: false;

  constructor(
    id: Number,
    country: string,
    apiKeyWord: string,
    imagePath: string
  ) {
    this.id = id;
    this.country = country;
    this.apiKeyWord = apiKeyWord;
    this.imagePath = imagePath;
  }
}
