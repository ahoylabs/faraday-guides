# Creating Characters

## Basics

Anything typed into the character info will be sent to the model to help define your characters and the context of your chat or role-play. There are multiple methods suggested for writing out your character info and different methods may prove more or less useful depending on what you are trying to accomplish. There isn’t one exact way that is always the best; it can take experimentation to see what gets you what you want.

As a general rule, you want to keep your characters limited to around 1000 tokens or less. The more tokens your character takes up, the less chat history you will have to work with. As your character approaches 2000 tokens, you will have times where no chat history is seen by the model.

## Logical Connections

Language models do not think, which means they are not great at logic. Higher parameter models get closer at approximating logic through a higher ‘resolution’ inference, but even a giant model like ChatGPT is not great at problem solving or connecting the dots.
What this means is that you should be very specific and clear about what you describe in your character. A statement like *“Joan is Sarah’s mother and she is tall”* leaves ambiguity as to who is tall. Similarly, statements like “Sarah is the friend of John’s daughter”* can confuse the model, as there is a logical step of understanding that *“John has a daughter and that daughter has a friend and that friend is Sarah and John and Sarah have no actual relationship beyond this connection.”*

Character descriptions should be direct, and you want to make sure it is always clear who you are talking about. The above examples could be rewritten as *“Joan is Sarah’s mother and Joan is tall.”* And *“Sarah is friends with Kim. Kim is John’s daughter. John and Sarah know each other through Kim.”*

## Brevity

You want to mediate between providing too little information and providing too much when creating a character. On one hand little details can add a lot of flavor to a character’s persona. On the other hand, too much detail can mislead the model as to what is an important characteristic. A similar thing to watch out for is qualities that may be contradictory, even indirectly. If you say your character is a dancer and then later say they are clumsy, those qualities may confuse the model because dancers are rarely thought of as clumsy. If you truly mean both of these things you may be able to explain it with something like *“Sarah is a wonderful dancer, but is clumsy when not on the dance floor.”* This should help define how these two qualities can coexist.

You want to avoid repeating yourself as much as possible and, unless you have a simple character, prefer lists of qualities over sentences. Lists use fewer tokens to say the same thing, making them helpful.

You can also cover multiple qualities with a single keyword. For instance if you refer to a. Character as “she” at any point or give the character a feminine name, you probably don’t have to say she’s female.

## Formatting

The goal of formatting a character is to describe the character holistically in as few tokens as feasible. There is no perfect way to accomplish this, but there are methods that have proven to work decently most of the time. You can even combine several of these methods if it helps convey the character. Below are examples of four popular formatting methods.

### Natural Language

Character is a loving husband and wonderful friend, whose life revolves around his family. Character is smart and thoughtful, often helping others with his knowledge. Character was raised in New York, but has settled in Basil where he moved after receiving his doctorate in political science.

### Natural Language Lists

Character is a husband, good friend, family man. Character is smart, thoughtful, helpful, doctorate in political science. Character lives in Basil, raised in New York.

### Formatted Lists
```
Character[
personality = (smart, thoughtful, helpful.)
Relationships = (husband, good friend, family.)
Education = (doctorate in political science.)
Location = (currently Basil, raised in New York.)]
```

json
```
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

## Influencing Response Style

The models are completion models, meaning they will do their best to complete the text provided to them. If you want its response to be longer, or shorter, or to include more detail, you want to provide it with something to follow.

The two most powerful ways to do that are to provide example dialogues and to edit the model responses to be more what you are looking for. You can find the response edit button by hovering over any message (see screenshot).

Another way to direct the format of the responses is to construct your first message in the way you want the model to respond. It’s very tempting to format the first message as an out of context description of the scenario, but it is the first response from the character, and, as such, is an important method to control how responses are composed.

As an aside, if you find that the character really wants to describe your actions, look at your first message and if it is describing what the user is doing. If the character settings tell the model not to perform actions for user and the first message is largely describing what the user is doing at that moment, there’s a conflict that the first message is likely to win.


## The Faraday Character Creator

Faraday makes it easier to create and edit your character settings by dividing the prompt into distint sections. Additionally, you can set the user name and character name in one location and then user {character} and {user} within the rest of the fields, which Faraday will automatically replace. In this way, users can customize the character and user name without going through the full character description.

### Model Instructions

Most models are trained to accept instructions at the start of the context. Here you can set what type of output you want, specific instructions for the style and format of responses, and anything else you may want the model to know about how it behaves. Note that some models are better at actually following specific instructions than others, so don't be dismayed if you give it a very specific rule to follow and it doesn't; that's normal.

![Character Creator Model Instructions](/images/creator_instructions.png)

### Character Persona

Input all the details on the character here using one of the styles noted above (or your own special style).

### User Persona

The AI will behave more realistically if they know something about you, the user. Include appearance, history with the character, and anything else you want here. Note that the character will know anything you type here, so if you don't think that the character should know your love of fish ladders going into the chat, don't add that detail here.

### Scenario

This is where you tell the AI what you and the character are doing together, or what the situation is. You don't *have* to include any information here, but it can definitely help to give the AI a direction. You may find characters in the Character Hub that have more information here than in the character persona section; some character cards are more of a scenario than specific character.

![Character Creator Personas and Scenario](/images/creator_persona.png)

### Example Dialogue

Here is a way to influence how the AI will respond; long, short, rude, affectionate, roleplay with actions between asterisks, prose with speech in quotes. Typically, 1 - 3 examples are helpful. Note that you do not want to include important plot items here, as they *can* blead into the chat; try to keep these somewhat generic in terms of what's happening, but do feel free to include detail on the character or scenario, as you *want* that to bleed over. Also note that you **do not have to include user responses**. They are helpful if you want the AI to respond to specific user input, but for most cases it's not completely necessary and can save tokens to keep out.

### First Message

This is the first response *from the AI character*. Similarly to exmample dialogue, this is an important tool to influence how the AI character will respond. The models we use are text *completion* models, and when you prime the character with a first message, it will be better able to complete the text in a similar style and voice. A common issue that many creators run into is that they try to set the scene using the first message, forgetting that this message is *from the character*. If you don't want your character to give out of character descriptions of the scene, don't start by making it do so; get creative in how the character can set the scene in their voice.

![Character Creator Example Dialogue and First Message](/images/creator_example_dialogue.png)

### Worl Info (Lorebooks)

World info is described in the advanced section, so see that for a more thorough description. In this section of the character creator, you can input a keyword (or keywords), along with an associated entry. During chat, none of this section is in context until the character or user use one of the keywords, at which time the entry will be added to context for a limited duration. Use this section to add information that you don't necessarily want eating up tokens all the time, but is good for the character to know.

![Character Creator World Info](/images/creator_lore.png)
