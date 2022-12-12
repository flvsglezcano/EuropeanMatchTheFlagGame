export default class FlagData {

  id: Number;
  country: string;
  apiKeyWord: string;
  imagePath: string;
  isRoundAnswer: boolean;
  showCountryName:boolean;
  classValidation:string;
 

  constructor(
    id: Number,
    country: string,
    apiKeyWord: string,
    imagePath: string,
    isRoundAnswer: boolean,
    showCountryName:boolean,
    classValidation: string
  ) {
    this.id = id;
    this.country;
    this.apiKeyWord = apiKeyWord;
    this.imagePath = imagePath;
    this.isRoundAnswer=isRoundAnswer;
    this.showCountryName = showCountryName;
    this.classValidation = classValidation;
  }
  set setIsRoundAnswer (isRoundAnswer:boolean)
  {
    this.isRoundAnswer = isRoundAnswer;
  }
  set setShowCountryName (showCountryName:boolean)
  {
    this.showCountryName = showCountryName;
  }
  set setClassValidation (classValidation:string)
  {
    this.classValidation = classValidation;
  }
}
