export default class FlagData {
  id;
  country;
  apiKeyWord;
  imagePath;
  isRoundAnswer;

  constructor(
    id,
    country,
    apiKeyWord,
    imagePath 
  ) {
    this.id = id;
    this.country = country;
    this.apiKeyWord = apiKeyWord;
    this.imagePath = imagePath;
  }
}
