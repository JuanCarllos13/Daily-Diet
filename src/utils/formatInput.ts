export const ValidateHour = (text: string) => {
  const cleanedText = text.replace(/[^0-9]/g, "");

  let formattedText = cleanedText;
  
  if (formattedText.length === 4) {
    formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(2)}`;
  
    const validTime = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(formattedText);

    return validTime ? formattedText : '';
  }

  return formattedText;

  // 12:56
};


export const ValidadeDate = (text: string) => {
  console.log('Text', text)
  const cleanedText = text.replace(/[^0-9]/g, "");

  let formattedText = cleanedText;
  if (cleanedText.length > 2) {
    formattedText = `${cleanedText.slice(0, 2)}/${cleanedText.slice(2)}`;
  }
  if (cleanedText.length > 4) {
    formattedText = `${formattedText.slice(0, 5)}/${formattedText.slice(5)}`;
  }

  return formattedText;
};
