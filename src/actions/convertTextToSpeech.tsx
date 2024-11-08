"use server";

export const convertTextToSpeech = async ({
  text,
  speaker,
}: {
  text: string;
  speaker: string;
}) => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if(!url){
    console.error('API URL is not defined')
    throw new Error('Api url is missing')
  }

  let mediaStudio = "";

  if (speaker == "MALE") {
    mediaStudio = "en-US-News-N";
  } else {
    mediaStudio = "en-US-News-L";
  }

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY || "",
      "x-rapidapi-host": "joj-text-to-speech.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        text: text,
      },
      voice: {
        languageCode: "en-US",
        name: mediaStudio,
        ssmlGender: speaker,
      },
      audioConfig: {
        audioEncoding: "MP3",
      },
    }),
  };

  try {
    const response = await fetch(url,options)
    const result = await response.json()
    return result.audioContent
  } catch (error) {
    console.log(error)
  }
};
