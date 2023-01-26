function onOpen() {
   DocumentApp.getUi().createMenu("Assistant")
    .addItem("Synonyms", "myFunction")
    .addItem("Writer's Block", "myFunction3")
    .addItem("Auto Generate", "myFunction2")
    .addToUi();
}
function myFunction() {
  var doc = DocumentApp.getActiveDocument()
  var selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText()
  var body = doc.getBody()

  // Replace YOUR_API_KEY with your actual OpenAI API key
  var apiKey = "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";
  var prompt = "Generate a detailed full length article about " + selectedText;
  var prompt1 = "Give me synomyns of " + selectedText

  // var model = "text-davinci-002";

  var model = "text-davinci-003"
  temperature= 0
  maxTokens = 4060

    // Set up the request body with the given parameters
    const requestBody = {
      "model": model,
      "prompt": prompt1,
      "temperature": temperature,
      "max_tokens": maxTokens,
    };

    const requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+apiKey
      },
      "payload": JSON.stringify(requestBody)
    }

  // Call the OpenAI API

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/completions", requestOptions);


  // Parse the response and get the generated text
  var responseText = response.getContentText();
  var json = JSON.parse(responseText);
  Logger.log(json['choices'][0]['text'])



  para = body.appendParagraph(json['choices'][0]['text'])


}



function myFunction2() {
  var doc = DocumentApp.getActiveDocument()
  var selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText()
  var body = doc.getBody()

  // Replace YOUR_API_KEY with your actual OpenAI API key
  var apiKey = "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";
  var prompt = "Generate a detailed full length article about " + selectedText;
  

  // var model = "text-davinci-002";

  var model = "text-davinci-003"
  temperature= 0
  maxTokens = 4060

    // Set up the request body with the given parameters
    const requestBody = {
      "model": model,
      "prompt": prompt,
      "temperature": temperature,
      "max_tokens": maxTokens,
    };

    const requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+apiKey
      },
      "payload": JSON.stringify(requestBody)
    }

  // Call the OpenAI API

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/completions", requestOptions);


  // Parse the response and get the generated text
  var responseText = response.getContentText();
  var json = JSON.parse(responseText);
  Logger.log(json['choices'][0]['text'])



  para = body.appendParagraph(json['choices'][0]['text'])


}


function myFunction3() {
  var doc = DocumentApp.getActiveDocument()
  var selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText()
  var body = doc.getBody()

  // Replace YOUR_API_KEY with your actual OpenAI API key
  var apiKey = "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";
  var prompt = "Help me finish this sentence:  " + selectedText;
  

  // var model = "text-davinci-002";

  var model = "text-davinci-003"
  temperature= 0
  maxTokens = 4060

    // Set up the request body with the given parameters
    const requestBody = {
      "model": model,
      "prompt": prompt,
      "temperature": temperature,
      "max_tokens": maxTokens,
    };

    const requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+apiKey
      },
      "payload": JSON.stringify(requestBody)
    }

  // Call the OpenAI API

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/completions", requestOptions);


  // Parse the response and get the generated text
  var responseText = response.getContentText();
  var json = JSON.parse(responseText);
  Logger.log(json['choices'][0]['text'])



  para = body.appendParagraph(json['choices'][0]['text'])


}


















































