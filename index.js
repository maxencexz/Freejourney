const axios = require("axios").default
const endpoints = require("./src/constants/endpoints.json")

class Freejourney {

    /**
     * Creates an instance of Freejourney.
     * @param {string} token - The token to use for all further requests.
     */
    constructor(token) {
        this.token = token

        /**
         * Object containing methods for chat completion endpoints.
         */
        this.chatCompletion = {

            /**
             * Creates a chat completion using the ChatGPT-4 model.
             * @param {string} prompt - The text prompt to send to ChatGPT-4.
             * @returns {Promise<{ prompt: string, completion: string }>} A promise resolving to an object containing the prompt and completion text.
             * @example
             * // Usage example:
             * const result = await Freejourney.chatCompletion.chatGPT4("What is 1 + 1?");
             * 
             * console.log(result.prompt);
             * // Output: "What is 1 + 1?"
             * 
             * console.log(result.completion);
             * // Output: "1 + 1 equals 2."
             */
            chatGPT4: async (prompt) => {
                try {
                    const request = await axios.post(endpoints.BASE + endpoints.CHAT_COMPLETION["ChatGPT-4"], {
                        prompt: prompt
                    }, {
                        headers: {
                            'X-Freejourney-Key': this.token
                        }
                    })
                    return request.data.data
                } catch (error) {
                    throw new Error("ChatGPT-4 request failed: " + error.message)
                }
            },

            /**
             * Creates a chat completion using the ChatGPT-4 34k model.
             * @param {string} prompt - The text prompt to send to ChatGPT-4 34k.
             * @returns {Promise<{ prompt: string, completion: string }>} A promise resolving to an object containing the prompt and completion text.
             * @example
             * // Usage example:
             * const result = await Freejourney.chatCompletion.chatGPT4_34k("What is 1 + 1?");
             * 
             * console.log(result.prompt);
             * // Output: "What is 1 + 1?"
             * 
             * console.log(result.completion);
             * // Output: "1 + 1 equals 2."
             */
            chatGPT4_34k: async (prompt) => {
                try {
                    const request = await axios.post(endpoints.BASE + endpoints.CHAT_COMPLETION["ChatGPT-4-34k"], {
                        prompt: prompt
                    }, {
                        headers: {
                            'X-Freejourney-Key': this.token
                        }
                    })
                    return request.data.data
                } catch (error) {
                    throw new Error("ChatGPT-4 34k request failed: " + error.message)
                }
            },

            /**
             * Creates a chat completion using the ChatGPT-3.5 Turbo model.
             * @param {string} prompt - The text prompt to send to ChatGPT-3.5 Turbo.
             * @returns {Promise<{ prompt: string, completion: string }>} A promise resolving to an object containing the prompt and completion text.
             * @example
             * // Usage example:
             * const result = await Freejourney.chatCompletion.chatGPT3_5_Turbo("What is 1 + 1?");
             * 
             * console.log(result.prompt);
             * // Output: "What is 1 + 1?"
             * 
             * console.log(result.completion);
             * // Output: "1 + 1 equals 2."
             */
            chatGPT3_5_Turbo: async (prompt) => {
                try {
                    const request = await axios.post(endpoints.BASE + endpoints.CHAT_COMPLETION["ChatGPT-3-5-Turbo"], {
                        prompt: prompt
                    }, {
                        headers: {
                            'X-Freejourney-Key': this.token
                        }
                    })
                    return request.data.data
                } catch (error) {
                    throw new Error("ChatGPT-3.5 Turbo request failed: " + error.message)
                }
            },

            /**
             * Creates a chat completion using the ChatGPT-3.5 16k Turbo model.
             * @param {string} prompt - The text prompt to send to ChatGPT-3.5 Turbo 16k.
             * @returns {Promise<{ prompt: string, completion: string }>} A promise resolving to an object containing the prompt and completion text.
             * @example
             * // Usage example:
             * const result = await Freejourney.chatCompletion.chatGPT3_5_Turbo_16k("What is 1 + 1?");
             * 
             * console.log(result.prompt);
             * // Output: "What is 1 + 1?"
             * 
             * console.log(result.completion);
             * // Output: "1 + 1 equals 2."
             */
            chatGPT3_5_Turbo_16k: async (prompt) => {
                try {
                    const request = await axios.post(endpoints.BASE + endpoints.CHAT_COMPLETION["ChatGPT-3-5-Turbo-16k"], {
                        prompt: prompt
                    }, {
                        headers: {
                            'X-Freejourney-Key': this.token
                        }
                    })
                    return request.data.data
                } catch (error) {
                    throw new Error("ChatGPT-3.5 Turbo 16k request failed: " + error.message)
                }
            },

            /**
             * Creates a chat completion using the Gemini model.
             * @param {string} prompt - The text prompt to send to Gemini.
             * @returns {Promise<{ prompt: string, completion: string }>} A promise resolving to an object containing the prompt and completion text.
             * @example
             * // Usage example:
             * const result = await Freejourney.chatCompletion.Gemini("What is 1 + 1?");
             * 
             * console.log(result.prompt);
             * // Output: "What is 1 + 1?"
             * 
             * console.log(result.completion);
             * // Output: "1 + 1 equals 2."
             */
            gemini: async (prompt) => {
                try {
                    const request = await axios.post(endpoints.BASE + endpoints.CHAT_COMPLETION.Gemini, {
                        prompt: prompt
                    }, {
                        headers: {
                            'X-Freejourney-Key': this.token
                        }
                    })
                    return request.data.data
                } catch (error) {
                    throw new Error("Gemini request failed: " + error.message)
                }
            },

            /**
             * Creates a chat completion for a given character.
             * @param {string} model - ID of the character model.
             * @param {string} prompt - The text prompt to send to the character model.
             * @returns {Promise<{ prompt: string, completion: string, model: { model_id: string, model_name: string, model_description: string } }>} A promise resolving to an object containing the prompt, completion text, and information about the character model.
             * @example
             * // Usage example:
             * const result = await Freejourney.chatCompletion.character("steve_harrington", "Hey Steve! Who is Nancy?");
             * console.log(result.prompt);
             * // Output: "Hey Steve! Who is Nancy?"
             * console.log(result.completion);
             * // Output: "Oh, Nancy? She's a total badass, you know? She's got this whole Nancy Drew thing going on, always trying to solve mysteries and stuff. But hey, she's cool, I guess."
             * console.log(result.model);
             * // Output: { model_id: 'steve_harrington', model_name: 'Steve Harrington', model_description: 'A recurring character in \'Stranger Things.\' Initially portrayed as a typical high school jock, Steve undergoes significant character development to become a reliable ally to the main group of kids.' }
             */
            character: async (model, prompt) => {
                try {
                    const request = await axios.post(endpoints.BASE + endpoints.CHAT_COMPLETION.Characters, {
                        prompt: prompt,
                        model: model
                    }, {
                        headers: {
                            'X-Freejourney-Key': this.token
                        }
                    });
                    return request.data.data;
                } catch (error) {
                    throw new Error("Character model request failed: " + error.message);
                }
            }

        }

        this.fun = {
            /**
             * Returns a random "Dad joke"
             * @returns {Promise<{ joke: string }>} A promise resolving to an object containing the joke.
             * @example
             * // Usage example:
             * const result = await Freejourney.fun.dadJoke();
             * 
             * console.log(result.joke);
             * // Output: "No matter how kind you are, German children are kinder."
             */
            dadJoke: async () => {
                try {
                    const request = await axios.get(endpoints.BASE + endpoints.FUN.DadJoke)
                    return request.data.data
                } catch (error) {
                    throw new Error("ChatGPT-4 request failed: " + error.message)
                }
            },

            /**
             * Returns a random trivia question.
             * @returns {Promise<{ question: string, answers: { correct: string, incorrect: string[] }, difficulty: string }>} A promise resolving to an object containing the trivia question, possible answers, and difficulty level.
             * @example
             * // Usage example:
             * const result = await Freejourney.fun.trivia();
             * 
             * console.log(result.question);
             * // Output: "Bogotá is the capital city of which country?"
             * 
             * console.log(result.answers.correct);
             * // Output: "Colombia"
             * 
             * console.log(result.answers.incorrect);
             * // Output: ["Libya", "Eritrea", "El Salvador"]
             * 
             * console.log(result.difficulty);
             * // Output: "medium"
             */
            trivia: async () => {
                try {
                    const request = await axios.get(endpoints.BASE + endpoints.FUN.Trivia);
                    return request.data.data;
                } catch (error) {
                    throw new Error("Trivia request failed: " + error.message);
                }
            },

            /**
             * Returns a random fact.
             * @returns {Promise<{ fact: string }>} A promise resolving to an object containing the random fact.
             * @example
             * // Usage example:
             * const result = await Freejourney.fun.randomFact();
             * 
             * console.log(result.fact);
             * // Output: "More bullets were fired in 'Starship Troopers' than any other movie ever made."
             */
            randomFact: async () => {
                try {
                    const request = await axios.get(endpoints.BASE + endpoints.FUN.RandomFact);
                    return request.data.data;
                } catch (error) {
                    throw new Error("Random fact request failed: " + error.message);
                }
            }

        }

        this.animals = {
            /**
             * Returns a random cat fact.
             * @returns {Promise<{ fact: string }>} A promise resolving to an object containing the random cat fact.
             * @example
             * // Usage example:
             * const result = await Freejourney.animals.catFact();
             * 
             * console.log(result.fact);
             * // Output: "The ancestor of all domestic cats is the African Wild Cat which still exists today."
             */
            catFact: async () => {
                try {
                    const request = await axios.get(endpoints.BASE + endpoints.ANIMALS.CatFact);
                    return request.data.data;
                } catch (error) {
                    throw new Error("Cat fact request failed: " + error.message);
                }
            },

            /**
             * Returns a random dog fact.
             * @returns {Promise<{ fact: string }>} A promise resolving to an object containing the random dog fact.
             * @example
             * // Usage example:
             * const result = await Freejourney.animals.dogFact();
             * 
             * console.log(result.fact);
             * // Output: "Two stray dogs in Afghanistan saved 50 American soliders. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers."
             */
            dogFact: async () => {
                try {
                    const request = await axios.get(endpoints.BASE + endpoints.ANIMALS.DogFact);
                    return request.data.data;
                } catch (error) {
                    throw new Error("Dog fact request failed: " + error.message);
                }
            }


        }

        this.moderation = {
            /**
             * Filters a text, replacing all moderated words by * or a specified character.
             * @param {string} text - The text to filter.
             * @param {string} [fill="*"] - The character to use to replace moderated words. Accepted characters: _ ~ - = | *
             * @returns {Promise<{ text: string, result: string }>} A promise resolving to an object containing the original text and the filtered result.
             * @example
             * // Usage example:
             * const result = await Freejourney.moderation.filterText("Just shut the fuck up bro, you're shit at this game!");
             * 
             * console.log(result.text);
             * // Output: "Just shut the fuck up bro, you're shit at this game!"
             * 
             * console.log(result.result);
             * // Output: "Just shut the **** up bro, you're **** at this game!"
             * 
             * // Example using a character other than *
             * const customResult = await Freejourney.filterText("Just shut the fuck up bro, you're shit at this game!", "~");
             * 
             * console.log(customResult.text);
             * // Output: "Just shut the fuck up bro, you're shit at this game!"
             * 
             * console.log(customResult.result);
             * // Output: "Just shut the ~~~~ up bro, you're ~~~~ at this game!"
             */
            filterText: async (text, fill = "*") => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.MODERATION.TextFilter,
                        { text, fill },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Text filtering request failed: " + error.message);
                }
            }

        }

        this.images = {
            /**
             * Creates a QR code.
             * @param {string} text - The text/URL to use for the QR code.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded QR code image.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createQRCode("https://www.youtube.com/");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createQRCode: async (text) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.QRCode,
                        { text },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("QR code creation request failed: " + error.message);
                }
            },

            /**
             * Removes the background of an image.
             * @param {string} imageUrl - The URL of the image to remove the background from.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image with the background removed.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.removeBackground("https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            removeBackground: async (imageUrl) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.RemoveBackground,
                        { text: imageUrl },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Background removal request failed: " + error.message);
                }
            },

            /**
             * Creates a "Scroll of Truth" meme.
             * @param {string} text - The text to display on the meme.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createScrollOfTruth("The cake is a lie.");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createScrollOfTruth: async (text) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.ScrollOfTruth,
                        { text: text },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Scroll of Truth creation request failed: " + error.message);
                }
            },

            /**
             * Creates a "Minecraft Achievement" meme.
             * @param {string} text - The text to display on the achievement.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createMinecraftAchievement("Reached the Nether!");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createMinecraftAchievement: async (text) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.MinecraftAchievement,
                        { text: text },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Minecraft Achievement creation request failed: " + error.message);
                }
            },

            /**
             * Creates a "Minecraft Challenge" meme.
             * @param {string} text - The text to display on the challenge.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createMinecraftChallenge("Survive the Ender Dragon!");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createMinecraftChallenge: async (text) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.MinecraftChallenge,
                        { text: text },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Minecraft Challenge creation request failed: " + error.message);
                }
            },

            /**
             * Creates a "Calling" meme.
             * @param {string} text - The text to display on the meme.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createCallingMeme("When your mom calls you by your full name.");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createCallingMeme: async (text) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.Calling,
                        { text: text },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Calling meme creation request failed: " + error.message);
                }
            },

            /**
             * Creates a "Captcha" meme.
             * @param {string} text - The text to display on the meme.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createCaptchaMeme("Select all images with cars");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createCaptchaMeme: async (text) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.Captcha,
                        { text: text },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Captcha meme creation request failed: " + error.message);
                }
            },

            /**
             * Creates a "Did you mean?" meme.
             * @param {string} text - The main text to display on the meme.
             * @param {string} textBottom - The bottom text to display on the meme.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createDidYouMeanMeme("Banana", "Bandana");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createDidYouMeanMeme: async (text, textBottom) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.DidYouMean,
                        {
                            text: text,
                            text_bottom: textBottom
                        },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Did you mean meme creation request failed: " + error.message);
                }
            },

            /**
             * Creates a "Facts" meme.
             * @param {string} text - The text to display on the meme.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createFactsMeme("Did you know?");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createFactsMeme: async (text) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.Facts,
                        {
                            text: text
                        },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("Facts meme creation request failed: " + error.message);
                }
            },

            /**
             * Creates a "PornHub Brand" meme.
             * @param {string} text - The first text to use.
             * @param {string} textRight - The second text to use.
             * @returns {Promise<{ base64: string }>} A promise resolving to an object containing the base64-encoded image of the meme.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.createPornHubBrandMeme("Step", "Mom");
             * 
             * console.log(result.base64);
             * // Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
             */
            createPornHubBrandMeme: async (text, textRight) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.PornHubBrand,
                        {
                            text: text,
                            text_right: textRight
                        },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    return request.data.data;
                } catch (error) {
                    throw new Error("PornHub Brand meme creation request failed: " + error.message);
                }
            },

            /**
             * Searches for images created with the Midjourney bot.
             * @param {string} query - The text to use for the search.
             * @returns {Promise<{ url: string, prompt: string }[]>} A promise resolving to an array of objects containing the URL and prompt of the search result images.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.searchMidjourneyImages("Batman");
             * if (result.length > 0) {
             *     result.forEach(image => {
             *         console.log("URL:", image.url);
             *         console.log("Prompt:", image.prompt);
             *     });
             * } else {
             *     console.log("No result found.");
             * }
             */
            searchMidjourneyImages: async (query) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.Midjourney,
                        {
                            query: query
                        },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    if (request.data.success) {
                        return request.data.data;
                    } else {
                        throw new Error("Midjourney image search failed: " + request.data.message);
                    }
                } catch (error) {
                    throw new Error("Midjourney image search request failed: " + error.message);
                }
            },


            /**
             * Searches for images created with DALL-E.
             * @param {string} query - The text to use for the search.
             * @param {number} number - The number of images to return; can only be 1 or 4.
             * @returns {Promise<{ base64?: string }>} A promise resolving to an object containing the base64-encoded image(s) of the search result.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.searchDALLEImages("Batman", 1);
             * 
             * if (result.base64) {
             *     console.log(result.base64);
             *     // Output: "data:image/png;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD......"
             * } else {
             *     console.log("No result found.");
             * }
             */
            searchDALLEImages: async (query, number) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.DALLE,
                        {
                            query: query,
                            number: number
                        },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    if (request.data.success) {
                        return request.data.data;
                    } else {
                        throw new Error("DALL-E image search failed: " + request.data.message);
                    }
                } catch (error) {
                    throw new Error("DALL-E image search request failed: " + error.message);
                }
            },

            /**
             * Searches for images created with Stable Diffusion.
             * @param {string} query - The text to use for the search.
             * @param {number} number - The number of images to return; can only be 1 or 4.
             * @returns {Promise<{ base64?: string }>} A promise resolving to an object containing the base64-encoded image(s) of the search result.
             * @example
             * // Usage example:
             * const result = await Freejourney.images.searchStableDiffusionImages("Batman", 1);
             * 
             * if (result.base64) {
             *     console.log(result.base64);
             *     // Output: "data:image/png;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD......"
             * } else {
             *     console.log("No result found.");
             * }
             */
            searchStableDiffusionImages: async (query, number) => {
                try {
                    const request = await axios.post(
                        endpoints.BASE + endpoints.IMAGES.STABLE_DIFFUSION,
                        {
                            query: query,
                            number: number
                        },
                        {
                            headers: {
                                'X-Freejourney-Key': this.token
                            }
                        }
                    );
                    if (request.data.success) {
                        return request.data.data;
                    } else {
                        throw new Error("Stable Diffusion image search failed: " + request.data.message);
                    }
                } catch (error) {
                    throw new Error("Stable Diffusion image search request failed: " + error.message);
                }
            }


        }
    }

}

module.exports = Freejourney
