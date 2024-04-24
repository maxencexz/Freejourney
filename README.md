# Freejourney API Client

> A client library for interacting with the Freejourney API.

## Prerequisites

This project requires Node.js and npm to be installed on your machine.

## Getting Started

To get started with the Freejourney API Client, follow the installation instructions below.

## Installation

You can install the Freejourney API Client via npm:

```bash
npm install freejourney
```

## Usage
First, import the Freejourney API client:
```js
const Freejourney = require('freejourney');
```
Then, create a new instance of the Freejourney API client with your API key:
```js
const freejourney = new Freejourney('your_api_key');
```
Now you can use the various methods provided by the Freejourney API client:


> To access the Freejourney API (`api.freejourney.xyz`), a Freejourney API key is mandatory for all POST requests. Currently, acquiring an API key necessitates opening a support ticket via our Discord support server (no worries, it's free!). Once initiated, you'll be prompted for specific details regarding your API key usage. Discord server: https://freejourney.xyz/discord

## Chat Completion

#### ChatGPT-4
Creates a chat completion using the ChatGPT-4 model.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `prompt` | `string` | **Required**. The prompt to send to the model |

```js
Freejourney.chatCompletion.chatGPT4(prompt)
.then(result =>{
    console.log(result.completion)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "prompt": "Hey there! Tell me about yourself with a short response.",
    "completion": "I'm Gemini, a multi-modal AI model, developed by Google. I'm designed to assist and provide information to the best of my abilities."
}
```

#### ChatGPT-4 34k
Creates a chat completion using the ChatGPT-4 34k model.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `prompt` | `string` | **Required**. The prompt to send to the model |

```js
Freejourney.chatCompletion.chatGPT4_34k(prompt)
.then(result =>{
    console.log(result.completion)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "prompt": "Hey there! Tell me about yourself with a short response.",
    "completion": "I'm Gemini, a multi-modal AI model, developed by Google. I'm designed to assist and provide information to the best of my abilities."
}
```

#### ChatGPT-3.5 Turbo
Creates a chat completion using the ChatGPT-3.5 Turbo model.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `prompt` | `string` | **Required**. The prompt to send to the model |

```js
Freejourney.chatCompletion.chatGPT3_5_Turbo(prompt)
.then(result =>{
    console.log(result.completion)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "prompt": "Hey there! Tell me about yourself with a short response.",
    "completion": "I'm Gemini, a multi-modal AI model, developed by Google. I'm designed to assist and provide information to the best of my abilities."
}
```

#### ChatGPT-3.5 Turbo 16k
Creates a chat completion using the ChatGPT-3.5 16k Turbo model.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `prompt` | `string` | **Required**. The prompt to send to the model |

```js
Freejourney.chatCompletion.chatGPT3_5_Turbo_16k(prompt)
.then(result =>{
    console.log(result.completion)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "prompt": "Hey there! Tell me about yourself with a short response.",
    "completion": "I'm Gemini, a multi-modal AI model, developed by Google. I'm designed to assist and provide information to the best of my abilities."
}
```

#### Gemini
Creates a chat completion using the Gemini (Bard) model.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `prompt` | `string` | **Required**. The prompt to send to the model |

```js
Freejourney.chatCompletion.gemini(prompt)
.then(result =>{
    console.log(result.completion)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "prompt": "Hey there! Tell me about yourself with a short response.",
    "completion": "I'm Gemini, a multi-modal AI model, developed by Google. I'm designed to assist and provide information to the best of my abilities."
}
```

#### AI Character
Creates a chat completion for a given AI character.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `model` | `string` | **Required**. ID of the character model |
| `prompt` | `string` | **Required**. The prompt to send to the model |

```js
Freejourney.chatCompletion.character(model, prompt)
.then(result =>{
    console.log(result.completion)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "prompt": "Hey Steve! Can you tell me more about the Demogorgon?",
    "completion": "Oh, man, the Demogorgon? Let me tell you, that thing is the real deal. It's like straight out of a nightmare, with all those teeth and creepy movements. We had to face that sucker head-on, and let me tell you, it was no walk in the park. It's a whole other level of crazy, like a monster from another dimension or something. Just thinking about it gives me the chills. But hey, we took it down once, we can do it again.",
    "model": {
        "model_id": "steve_harrington",
        "model_name": "Steve Harrington",
        "model_description": "A recurring character in 'Stranger Things.' Initially portrayed as a typical high school jock, Steve undergoes significant character development to become a reliable ally to the main group of kids."
    }
}
```

The list of all available models is available [here](https://api.freejourney.xyz/chat/characters/list). You can also request characters you would like to use or even create yours and submit it in our [Discord server !](http://freejourney.xyz/discord)

## Fun

#### Dad joke
Returns a random "Dad joke"

```js
Freejourney.fun.dadJoke()
.then(result =>{
    console.log(result.joke)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "joke": "No matter how kind you are, German children are kinder."
}
```

#### Trivia question
Returns a random trivia question.

```js
Freejourney.fun.trivia()
.then(result =>{
    console.log(result.question)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "question": "Bogotá is the capital city of which country?",
    "answers": {
      "correct": "Colombia",
      "incorrect": [
        "Libya",
        "Eritrea",
        "El Salvador"
      ]
    },
    "difficulty": "medium"
}
```

#### Random fact
Returns a random fact.

```js
Freejourney.fun.randomFact()
.then(result =>{
    console.log(result.fact)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "fact": "More bullets were fired in `Starship Troopers` than any other movie ever made."
}
```

## Animals

#### Random cat fact
Returns a random cat fact.

```js
Freejourney.animals.catFact()
.then(result =>{
    console.log(result.fact)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "fact": "The ancestor of all domestic cats is the African Wild Cat which still exists today."
}
```

#### Random dog fact
Returns a random dog fact.

```js
Freejourney.animals.dogFact()
.then(result =>{
    console.log(result.fact)
})
.catch(error =>{
    console.log(error)
    console.log("Error !")
})
```

```json
{
    "fact": "Two stray dogs in Afghanistan saved 50 American soliders. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers."
}
```

## Moderation

#### Filter text (hard-coded)
Filters a text, replacing all moderated words by * or a specified character.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to filter |
| `fill` | `string` | The character to use to replace moderated words. Accepted characters: _ ~ - = | * |

```js
const result = await Freejourney.moderation.filterText("Just shut the fuck up bro, you're shit at this game!");

console.log(result.text);
// Output: "Just shut the fuck up bro, you're shit at this game!"

console.log(result.result);
// Output: "Just shut the **** up bro, you're **** at this game!"

// Example using a character other than *
const customResult = await Freejourney.filterText("Just shut the fuck up bro, you're shit at this game!", "~");

console.log(customResult.text);
// Output: "Just shut the fuck up bro, you're shit at this game!"

console.log(customResult.result);
// Output: "Just shut the ~~~~ up bro, you're ~~~~ at this game!"
```

## Images

#### QR Code
Creates a QR code.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text/URL to use for the QR code. |

```js
const result = await Freejourney.images.createQRCode(text);
```

```json
{
    "base64": "...."
}
```

#### Remove image background
Removes the background of an image.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `imageUrl` | `string` | **Required**. The URL of the image to remove the background from. |

```js
const result = await Freejourney.images.removeBackground(imageUrl);
```

```json
{
    "base64": "...."
}
```

#### Scroll of Truth
Creates a "Scroll of Truth" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |

```js
const result = await Freejourney.images.createScrollOfTruth(text);
```

```json
{
    "base64": "...."
}
```

#### Minecraft Achievement
Creates a "Minecraft Achievement" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |

```js
const result = await Freejourney.images.createMinecraftAchievement(text);
```

```json
{
    "base64": "...."
}
```

#### Minecraft Challenge
Creates a "Minecraft Challenge" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |

```js
const result = await Freejourney.images.createMinecraftChallenge(text);
```

```json
{
    "base64": "...."
}
```

#### Calling
Creates a "Calling" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |

```js
const result = await Freejourney.images.createCallingMeme(text);
```

```json
{
    "base64": "...."
}
```

#### Captcha
Creates a "Captcha" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |

```js
const result = await Freejourney.images.createCaptchaMeme(text);
```

```json
{
    "base64": "...."
}
```

#### Did you mean
Creates a "Did you mean" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |
| `textBottom` | `string` | **Required**. The bottom text to display on the meme. |

```js
const result = await Freejourney.images.createDidYouMeanMeme(text, textBottom);
```

```json
{
    "base64": "...."
}
```

#### Facts
Creates a "Facts" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |

```js
const result = await Freejourney.images.createFactsMeme(text);
```

```json
{
    "base64": "...."
}
```

#### PornHub Brand
Creates a "PornHub Brand" meme.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to display on the meme. |
| `textRight` | `string` | **Required**. The second text to use. |

```js
const result = await Freejourney.images.createPornHubBrandMeme(text, textRight);
```

```json
{
    "base64": "...."
}
```

#### Midjourney Search
Searches for images created with the Midjourney bot.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. The text to use for the search. |
| `number` | `string` | **Required**. The number of images to return; can only be 1 or 4. |

```js
const result = await Freejourney.images.searchMidjourneyImages(query, number);
```

```json
{
    "base64": "...."
}
```

#### DALL-E Search
Searches for images created with DALL-E.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. The text to use for the search. |
| `number` | `string` | **Required**. The number of images to return; can only be 1 or 4. |

```js
const result = await Freejourney.images.searchDALLEImages(query, number);
```

```json
{
    "base64": "...."
}
```

#### Stable Diffusion
Searches for images created with Stable Diffusion.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. The text to use for the search. |
| `number` | `string` | **Required**. The number of images to return; can only be 1 or 4. |

```js
const result = await Freejourney.images.searchStableDiffusionImages(query, number);
```

```json
{
    "base64": "...."
}
```