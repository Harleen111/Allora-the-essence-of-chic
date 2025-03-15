from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Rule-based responses
responses = {
    "hello": "Hi there! How can I assist you today?",
    "hii": "Hii there! What's on your mind today?",
    "how are you": "I'm just a chatbot, but I'm doing great!",
    "help": "Sure! You can ask me about products, offers, or anything related to Allora!",
    "what are your offers": "We have amazing discounts on skincare, makeup, and more! Check them out on Allora.",
    "contact support": "You can contact our support team at support@allora.com.",
    "bye": "Goodbye! Have a great day! 😊",
    "best skincare products for oily skin": "For oily skin, we recommend our Oil-Free Moisturizer, Salicylic Acid Cleanser, and Matte Sunscreen.",
    "skincare for oily skin": "Use Oil-Free Moisturizer, Good Cleanser, and Matte Sunscreen.",
    "recommend a good moisturizer for dry skin": "Try our Hydrating Cream, which is rich in hyaluronic acid and glycerin.",
    "best moisturizer for dry skin": "1. CeraVe Moisturizing Cream 2. Neutrogena Hydro Boost Water Gel",
    "best moisturizer for sensitive skin": "1. Avene Skin Recovery Cream 2. Cetaphil Daily Hydrating Lotion",
    "best sunscreen for sensitive skin": "Our Mineral Sunscreen SPF 50 is perfect for sensitive skin.",
    "how do i build a daily skincare routine": "Start with a gentle cleanser, followed by toner, serum, moisturizer, and sunscreen.",
    "benefits of vitamin c in skincare": "Vitamin C brightens skin, evens tone, and reduces signs of aging.",
    "can you help me find the perfect foundation shade": "Take our foundation shade quiz based on your skin tone and undertone.",
    "do you have waterproof mascara": "Yes, we have a Waterproof Lash Extension Mascara that stays put all day.",
    "do you offer free shipping": "Yes! We offer free shipping on all orders over Rs.299.",
    "how can i track my order": "You'll receive a tracking number via email or WhatsApp.",
    "how do i apply a face mask correctly": "Apply evenly to cleansed skin, leave on as directed, then rinse.",
    "best setting spray for long-lasting makeup": "Our Long-Lasting Setting Mist keeps makeup in place for 16 hours.",
    "moisturizer for all skin types": "The Ordinary Natural Moisturizing Factors + HA",
    "budget friendly fragrances": "1. Plum BodyLovin' Vanilla Caramello Eau De Parfum 2. Insight Cosmetics Heart Beat Eau De Perfume",
}

@app.route("/")
def home():
    return render_template("chatbot.html")

@app.route("/ask", methods=["POST"])
def ask():
    try:
        user_message = request.json.get("message", "").strip().lower()
        
        if not user_message:
            return jsonify({"reply": "I didn't receive any message. Please try again!"}), 400

        print(f"User Message: {user_message}")  # Debugging print

        bot_reply = responses.get(user_message, "I'm not sure about that, but I'm learning every day!")
        
        print(f"Bot Reply: {bot_reply}")  # Debugging print
        
        return jsonify({"reply": bot_reply})
    
    except Exception as e:
        print(f"Error: {e}")  # Print error for debugging
        return jsonify({"reply": "Oops! Something went wrong. Please try again later."}), 500

if __name__ == "__main__":
    app.run(debug=True)
