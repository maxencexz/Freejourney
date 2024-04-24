import requests
import json

class Freejourney:
    def __init__(self, token):
        """
        Creates an instance of Freejourney.
        :param token: The token to use for all further requests.
        """
        self.token = token
        with open("./src/constants/endpoints.json", 'r') as f:
            self.endpoints = json.load(f)
            
    def chat_gpt4(self, prompt):
        """
        Creates a chat completion using the ChatGPT-4 model.
        :param prompt: The text prompt to send to ChatGPT-4.
        :return: A dictionary containing the prompt and completion text.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.chat_gpt4("What is 1 + 1?")
        print(result['prompt'])
        # Output: "What is 1 + 1?"
        print(result['completion'])
        # Output: "1 + 1 equals 2."
        """
        try:
            request = requests.post(self.endpoints['BASE'] + self.endpoints['CHAT_COMPLETION']['ChatGPT-4'],
                                    json={'prompt': prompt},
                                    headers={'X-Freejourney-Key': self.token})
            request.raise_for_status()
            return request.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"ChatGPT-4 request failed: {http_err}") 
        except Exception as err:
            raise Exception(f"An error occured: {err}")  
        
    def chat_gpt4_34k(self, prompt):
        """
        Creates a chat completion using the ChatGPT-4 34k model.
        :param prompt: The text prompt to send to ChatGPT-4 34k.
        :return: A dictionary containing the prompt and completion text.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.chat_gpt4_34k("What is 1 + 1?")

        print(result['prompt'])
        # Output: "What is 1 + 1?"

        print(result['completion'])
        # Output: "1 + 1 equals 2."
        """
        try:
            request = requests.post(self.endpoints['BASE'] + self.endpoints['CHAT_COMPLETION']['ChatGPT-4-34k'],
                                    json={'prompt': prompt},
                                    headers={'X-Freejourney-Key': self.token})
            request.raise_for_status()
            return request.json()['data']    
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"ChatGPT-4 34k request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occured: {err}")         
    
    def chat_gpt3_5_turbo(self, prompt):
        """
        Creates a chat completion using the ChatGPT-3.5 Turbo model.
        :param prompt: The text prompt to send to ChatGPT-3.5 Turbo.
        :return: A dictionary containing the prompt and completion text.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.chat_gpt3_5_turbo("What is 1 + 1?")

        print(result['prompt'])
        # Output: "What is 1 + 1?"

        print(result['completion'])
        # Output: "1 + 1 equals 2."
        """
        try:
            request = requests.post(self.endpoints['BASE'] + self.endpoints['CHAT_COMPLETION']['ChatGPT-3-5-Turbo'],
                                    json={'prompt': prompt},
                                    headers={'X-Freejourney-Key': self.token})
            request.raise_for_status()
            return request.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"ChatGPT-3.5 Turbo request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def chat_gpt3_5_turbo_16k(self, prompt):
        """
        Creates a chat completion using the ChatGPT-3.5 Turbo 16k model.
        :param prompt: The text prompt to send to ChatGPT-3.5 Turbo 16k.
        :return: A dictionary containing the prompt and completion text.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.chat_gpt3_5_turbo_16k("What is 1 + 1?")

        print(result['prompt'])
        # Output: "What is 1 + 1?"

        print(result['completion'])
        # Output: "1 + 1 equals 2."
        """
        try:
            request = requests.post(self.endpoints['BASE'] + self.endpoints['CHAT_COMPLETION']['ChatGPT-3-5-Turbo-16k'],
                                    json={'prompt': prompt},
                                    headers={'X-Freejourney-Key': self.token})
            request.raise_for_status()
            return request.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"ChatGPT-3.5 Turbo 16k request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def gemini(self, prompt):
        """
        Creates a chat completion using the Gemini model.
        :param prompt: The text prompt to send to Gemini.
        :return: A dictionary containing the prompt and completion text.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.gemini("What is 1 + 1?")

        print(result['prompt'])
        # Output: "What is 1 + 1?"

        print(result['completion'])
        # Output: "1 + 1 equals 2."
        """
        try:
            request = requests.post(self.endpoints['BASE'] + self.endpoints['CHAT_COMPLETION']['Gemini'],
                                    json={'prompt': prompt},
                                    headers={'X-Freejourney-Key': self.token})
            request.raise_for_status()
            return request.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Gemini request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        

    def character(self, model, prompt):
        """
        Creates a chat completion for a given character.
        :param model: ID of the character model.
        :param prompt: The text prompt to send to the character model.
        :return: A dictionary containing the prompt, completion text, and information about the character model.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.character("steve_harrington", "Hey Steve! Who is Nancy?")
        
        print(result['prompt'])
        # Output: "Hey Steve! Who is Nancy?"
        
        print(result['completion'])
        # Output: "Oh, Nancy? She's a total badass, you know? ..."
        
        print(result['model'])
        # Output: {'model_id': 'steve_harrington', ... }
        """
        try:
            request = requests.post(self.endpoints['BASE'] + self.endpoints['CHAT_COMPLETION']['Characters'],
                                    json={'prompt': prompt, 'model': model},
                                    headers={'X-Freejourney-Key': self.token})
            request.raise_for_status()
            return request.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Character model request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def dad_joke(self):
        """
        Returns a random "Dad joke".
        :return: A dictionary containing the joke.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.dad_joke()

        print(result['joke'])
        # Output: "No matter how kind you are, German children are kinder."
        """
        try:
            response = requests.get(self.endpoints['BASE'] + self.endpoints['FUN']['DadJoke'],
                                    headers={'X-Freejourney-Key': self.token})
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Dad joke request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")

    def trivia(self):
        """
        Returns a random trivia question.
        :return: A dictionary containing the trivia question, possible answers, and difficulty level.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.trivia()

        print(result['question'])
        # Output: "Bogotá is the capital city of which country?"

        print(result['answers']['correct'])
        # Output: "Colombia"

        print(result['answers']['incorrect'])
        # Output: ["Libya", "Eritrea", "El Salvador"]

        print(result['difficulty'])
        # Output: "medium"
        """
        try:
            response = requests.get(self.endpoints['BASE'] + self.endpoints['FUN']['Trivia'],
                                    headers={'X-Freejourney-Key': self.token})
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Trivia request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def random_fact(self):
        """
        Returns a random fact.
        :return: A dictionary containing the random fact.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.random_fact()

        print(result['fact'])
        # Output: "More bullets were fired in 'Starship Troopers' than any other movie ever made."
        """
        try:
            response = requests.get(self.endpoints['BASE'] + self.endpoints['FUN']['RandomFact'],
                                    headers={'X-Freejourney-Key': self.token})
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Random fact request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def cat_fact(self):
        """
        Returns a random cat fact.
        :return: A dictionary containing the random cat fact.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.cat_fact()

        print(result['fact'])
        # Output: "The ancestor of all domestic cats is the African Wild Cat which still exists today."
        """
        try:
            response = requests.get(self.endpoints['BASE'] + self.endpoints['ANIMALS']['CatFact'],
                                    headers={'X-Freejourney-Key': self.token})
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Cat fact request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")

    def dog_fact(self):
        """
        Returns a random dog fact.
        :return: A dictionary containing the random dog fact.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.dog_fact()

        print(result['fact'])
        # Output: "Two stray dogs in Afghanistan saved 50 American soldiers. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers."
        """
        try:
            response = requests.get(self.endpoints['BASE'] + self.endpoints['ANIMALS']['DogFact'],
                                    headers={'X-Freejourney-Key': self.token})
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Dog fact request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def filter_text(self, text, fill="*"):
        """
        Filters a text, replacing all moderated words by * or a specified character.
        :param text: The text to filter.
        :param fill: The character to use to replace moderated words. Accepted characters: _ ~ - = | *
        :return: A dictionary containing the original text and the filtered result.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.filter_text("Just shut the **** up bro, you're **** at this game!")

        print(result['text'])
        # Output: "Just shut the **** up bro, you're **** at this game!"

        print(result['result'])
        # Output: "Just shut the **** up bro, you're **** at this game!"
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['MODERATION']['TextFilter'],
                json={'text': text, 'fill': fill},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Text filtering request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_qr_code(self, text):
        """
        Creates a QR code.
        :param text: The text/URL to use for the QR code.
        :return: A dictionary containing the base64-encoded QR code image.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_qr_code("https://www.youtube.com/")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['QRCode'],
                json={'text': text},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"QR code creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def remove_background(self, image_url):
        """
        Removes the background of an image.
        :param image_url: The URL of the image to remove the background from.
        :return: A dictionary containing the base64-encoded image with the background removed.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.remove_background("https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['RemoveBackground'],
                json={'text': image_url},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Background removal request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_scroll_of_truth(self, text):
        """
        Creates a "Scroll of Truth" meme.
        :param text: The text to display on the meme.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_scroll_of_truth("The cake is a lie.")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['ScrollOfTruth'],
                json={'text': text},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Scroll of Truth creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_minecraft_achievement(self, text):
        """
        Creates a "Minecraft Achievement" meme.
        :param text: The text to display on the achievement.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_minecraft_achievement("Reached the Nether!")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['MinecraftAchievement'],
                json={'text': text},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Minecraft Achievement creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")

    def create_minecraft_challenge(self, text):
        """
        Creates a "Minecraft Challenge" meme.
        :param text: The text to display on the challenge.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_minecraft_challenge("Survive the Ender Dragon!")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['MinecraftChallenge'],
                json={'text': text},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Minecraft Challenge creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_calling_meme(self, text):
        """
        Creates a "Calling" meme.
        :param text: The text to display on the meme.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_calling_meme("When your mom calls you by your full name.")
        
        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['Calling'],
                json={'text': text},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Calling meme creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_captcha_meme(self, text):
        """
        Creates a "Captcha" meme.
        :param text: The text to display on the meme.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_captcha_meme("Select all images with cars")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['Captcha'],
                json={'text': text},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Captcha meme creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_did_you_mean_meme(self, text, text_bottom):
        """
        Creates a "Did you mean?" meme.
        :param text: The main text to display on the meme.
        :param text_bottom: The bottom text to display on the meme.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_did_you_mean_meme("Banana", "Bandana")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['DidYouMean'],
                json={'text': text, 'text_bottom': text_bottom},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Did you mean meme creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_facts_meme(self, text):
        """
        Creates a "Facts" meme.
        :param text: The text to display on the meme.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_facts_meme("Did you know?")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['Facts'],
                json={'text': text},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.HTTPError as http_err:
            raise Exception(f"Facts meme creation request failed: {http_err}")
        except Exception as err:
            raise Exception(f"An error occurred: {err}")
        
    def create_pornhub_brand_meme(self, text, text_right):
        """
        Creates a "PornHub Brand" meme.
        :param text: The first text to use.
        :param text_right: The second text to use.
        :return: A dictionary containing the base64-encoded image of the meme.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.create_pornhub_brand_meme("Step", "Mom")

        print(result['base64'])
        # Output: "iVBORw0KGgoAAAANSUhEUgAAA..."
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['PornHubBrand'],
                json={'text': text, 'text_right': text_right},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            return response.json()['data']
        except requests.exceptions.RequestException as e:
            raise Exception(f"PornHub Brand meme creation request failed: {e}")   
        
    def search_midjourney_images(self, query, number):
        """
        Searches for images created with the Midjourney bot.
        :param query: The text to use for the search.
        :param number: The number of images to return; can only be 1 or 4.
        :return: A dictionary containing the base64-encoded image(s) of the search result.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.search_midjourney_images("Batman", 1)

        if 'base64' in result:
            print(result['base64'])
            # Output: "data:image/png;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD......"
        else:
            print("No result found.")
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['Midjourney'],
                json={'query': query, 'number': number},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            data = response.json()
            if data.get('success'):
                return data.get('data', {})
            else:
                raise Exception(f"Midjourney image search failed: {data.get('message')}")
        except requests.exceptions.RequestException as e:
            raise Exception(f"Midjourney image search request failed: {e}")
        
    def search_dalle_images(self, query, number):
        """
        Searches for images created with DALL-E.
        :param query: The text to use for the search.
        :param number: The number of images to return; can only be 1 or 4.
        :return: A dictionary containing the base64-encoded image(s) of the search result.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.search_dalle_images("Batman", 1)
        
        if 'base64' in result:
            print(result['base64'])
            # Output: "data:image/png;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD......"
        else:
            print("No result found.")
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['DALLE'],
                json={'query': query, 'number': number},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            data = response.json()
            if data.get('success'):
                return data.get('data', {})
            else:
                raise Exception(f"DALL-E image search failed: {data.get('message')}")
        except requests.exceptions.RequestException as e:
            raise Exception(f"DALL-E image search request failed: {e}")
        
    def search_stable_diffusion_images(self, query, number):
        """
        Searches for images created with Stable Diffusion.
        :param query: The text to use for the search.
        :param number: The number of images to return; can only be 1 or 4.
        :return: A dictionary containing the base64-encoded image(s) of the search result.
        :example:
        # Usage example:
        freejourney = Freejourney("<your_token_here>")
        result = freejourney.search_stable_diffusion_images("Batman", 1)

        if 'base64' in result:
            print(result['base64'])
            # Output: "data:image/png;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD......"
        else:
            print("No result found.")
        """
        try:
            response = requests.post(
                self.endpoints['BASE'] + self.endpoints['IMAGES']['STABLE_DIFFUSION'],
                json={'query': query, 'number': number},
                headers={'X-Freejourney-Key': self.token}
            )
            response.raise_for_status()
            data = response.json()
            if data.get('success'):
                return data.get('data', {})
            else:
                raise Exception(f"Stable Diffusion image search failed: {data.get('message')}")
        except requests.exceptions.RequestException as e:
            raise Exception(f"Stable Diffusion image search request failed: {e}")
