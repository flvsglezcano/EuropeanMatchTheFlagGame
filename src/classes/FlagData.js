export default class FlagData {
    id;
    country;
    apiKeyWord;
    imagePath;
    isRoundAnswer;
    showCountryName;
    classValidation;
  
    constructor(
      id,
      country,
      apiKeyWord,
      imagePath,
      isRoundAnswer,
      showCountryName,
      classValidation
    ) {
      this.id = id;
      this.country;
      this.apiKeyWord = apiKeyWord;
      this.imagePath = imagePath;
      this.isRoundAnswer = isRoundAnswer;
      this.showCountryName = showCountryName;
      this.classValidation = classValidation;
    }
    set setIsRoundAnswer(isRoundAnswer) {
      this.isRoundAnswer = isRoundAnswer;
    }
    set setShowCountryName(showCountryName) {
      this.showCountryName = showCountryName;
    }
    set setClassValidation(classValidation) {
      this.classValidation = classValidation;
    }
  }