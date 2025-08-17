from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

template = """
Answer the question below.

Here is the conversation history: {context}

Question: {question}

Answer:
"""
model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

def is_gardening_question(question):
    gardening_keywords = [
        "garden", "plant", "soil", "watering", "sunlight", "fertilizer", 
        "pests", "harvest", "seeds", "flowers", "vegetables", "grow", 
        "indoor plants", "outdoor plants", "herbs", "shrubs", "trees",
        "aloe vera", "succulents", "cactus", "compost", "mulch", "pruning",
        "hi","hello","hey","thankyou","Basil", "Mint" ,"Rosemary", "Thyme",
        "Parsley" ,"Chives", "Cilantro", "Oregano", "Lavender", "Sage", "Dill",
        "Spinach", "Kale", "Lettuce", "Arugula", "Cherry Tomato", "Bell Pepper", 
        "Radish", "Carrot", "Strawberry", "Blueberry", "Snake Plant",
        "Spider Plant", "Peace Lily", "Jade Plant", "Echeveria", "Golden Barrel Cactus", 
        "Marigold", "Petunia", "Morning Glory", "Pole Beans", "Sweet Peas", "tomato",
        "nice","i am good","thank you for asking", "thank you for your help", "great"
        "good", "Chamomile", "Borage", "Lemongrass", "Tarragon", "Mustard Greens", 
        "Swiss Chard", "Beet Greens", "Collard Greens", "Bok Choy", "Endive", "Green Onion", 
        "Watercress", "Romaine Lettuce", "Cucumber", "Zucchini", "Dwarf Lemon Tree", "Dwarf Lime Tree", 
        "Raspberry", "Blackberry", "Fig", "Bamboo Palm", "Areca Palm", "Boston Fern", "ZZ Plant", "Pothos", 
        "Philodendron", "Chinese Money Plant", "Dracaena", "Succulents", "Hens-and-Chicks", "Burro’s Tail", 
        "Geranium", "Snapdragon", "Verbena", "Cosmos", "Viola", "Daisy", "Nasturtium", "temperature"
    ]
    return any(keyword in question.lower() for keyword in gardening_keywords)

def handle_conversation():
    context = ""
    print("Welcome to the plant care chatbot!, how can i help you today....Type 'bye' to quit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "bye":
            break

        if is_gardening_question(user_input):
            result = chain.invoke({"context": context, "question": user_input})
            print("Bot:", result)
            context += f"\nUser: {user_input}\nAI: {result}"
        else:
            print("Bot: I can only answer questions related to gardening. Please ask a gardening question or check your spelling.")

if __name__ == "__main__":
    handle_conversation()
