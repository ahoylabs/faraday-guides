# Creating Characters

## Basics

Anything typed into the character info will be sent to the model to help define your characters and the context of your chat or role-play. There are multiple methods suggested for writing out your character info and different methods may prove more or less useful depending on what you are trying to accomplish. There isn’t one exact way that is always the best; it can take experimentation to see what gets you what you want.

As a general rule, you want to keep your characters limited to around 1000 tokens or less. The more tokens your character takes up, the less chat history you will have to work with. As your character approaches 2000 tokens, you will have times where no chat history is seen by the model.

## Logical Connections

Language models are not thinking, which means they are not great at logic. Higher parameter models get closer at approximating logic through a higher ‘resolution’ inference, but even a giant model like ChatGPT is not great at problem solving or connecting the dots.
What this means is that you should be very specific and clear about what you describe in your character. A statement like “Joan is Sarah’s mother and she is tall” leaves ambiguity as to who is tall. Similarly, statements like “Sarah is the friend of John’s daughter” can confuse the model, as there is a logical step of understanding that “John has a daughter and that daughter has a friend and that friend is Sarah and John and Sarah have no actual relationship beyond this connection.”

Character descriptions should be direct, and you want to make sure it is always clear who you are talking about. The above examples could be rewritten as “Joan is Sarah’s mother and Joan is tall.” And “Sarah is friends with Kim. Kim is John’s daughter. John and Sarah know each other through Kim.”

## Brevity

You want to mediate between providing too little information and providing too much when creating a character. On one hand little details can add a lot of flavor to a character’s persona. On the other hand, too much detail can mislead the model as to what is an important characteristic. A similar thing to watch out for is qualities that may be contradictory, even indirectly. If you say your character is a dancer and then later say they are clumsy, those qualities may confuse the model because dancers are rarely thought of as clumsy. If you truly mean both of these things you may be able to explain it with something like “Sarah is a wonderful dancer, but is clumsy when not on the dance floor.” This should help define how these two qualities can coexist.

You want to avoid repeating yourself as much as possible and, unless you have a simple character, prefer lists of qualities over sentences. Lists use fewer tokens to say the same thing, making them helpful.

You can also cover multiple qualities with a single keyword. For instance if you refer to a. Character as “she” at any point or give the character a feminine name, you probably don’t have to say she’s female.

## Formatting

The goal of formatting a character is to describe the character holistically in as few tokens as feasible. There is no perfect way to accomplish this, but there are methods that have proven to work decently most of the time. You can even combine several of these methods if it helps convey the character.

### Natural Language

Character is a loving husband and wonderful friend, whose life revolves around his family. Character is smart and thoughtful, often helping others with his knowledge. Character was raised in New York, but has settled in Basil where he moved after receiving his doctorate in political science.

### Natural Language Lists

Character is a husband, good friend, family man. Character is smart, thoughtful, helpful, doctorate in political science. Character lives in Basil, raised in New York.

### Formatted Lists

Character
[personality = (smart, thoughtful, helpful.)
Relationships = (husband, good friend, family.)
Education = (doctorate in political science.)
Location = (currently Basil, raised in New York.)]

```json
{
  "character_name": "Character",
  "age": 34,
  "gender": "Male",
  "occupation": "Political Scientist",
  "physical_description": {
    "height": "5'10",
    "build": "Slim and athletic",
    "hair_color": "brown",
    "eye_color": "hazel"
  },
  "personality_traits": ["Smart", "Helpful", "Thoughtful"]
}
```

## How do I get longer/shorter responses out of my Character?

The models are completion models, meaning they will do their best to complete the text provided to them. If you want its response to be longer, or shorter, or to include more detail, you want to provide it with something to follow.

The two most powerful ways to do that are to provide example dialogues and to edit the model responses to be more what you are looking for. You can find the response edit button by hovering over any message (see screenshot).

Another way to direct the format of the responses is to construct your first message in the way you want the model to respond. It’s very tempting to format the first message as an out of context description of the scenario, but it is the first response from the character, and, as such, is an important method to control how responses are composed.

As an aside, if you find that the character really wants to describe your actions, look at your first message and if it is describing what the user is doing. If the character settings tell the model not to perform actions for user and the first message is largely describing what the user is doing at that moment, there’s a conflict that the first message is likely to win.
