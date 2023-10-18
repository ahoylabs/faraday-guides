# Advanced Features

## Grammars (Advanced)

A grammar controls the output format based on rules defined in a grammar file. It's based on the Baku’s-Naur Format Grammar from programming that defines language composition. In text generation, it directs the next token.

### Syntax

- `::=`: Assigns an expression. E.g., `number ::= (0,1,2,3,4,5,6,7,8,9)`.
- `*`: 0 or more occurrences of the previous item. E.g., `("x")*` outputs 0 or more X's.
- `+`: 1 or more occurrences. E.g., `("x")+` outputs 1 or more X's.
- `?`: 0 or 1 occurrence. Can be replaced by `[...]`.
- `[...]`: Anything in brackets is optional. E.g., `'[-] "1"'` outputs 1 or -1.
- `x | y`: A choice between items. `("+" | "-")` outputs + or -.
- `(...)`: Groups items. In `(a | b) + c`, you get a or b, then c.
- `^...`: Anything but the following. `[^\r\n]*` outputs any character except return or enter.
- `"..."`: Outputs text directly.
- `"\n"`: Special characters in quotes.

The grammar is then composed of expressions, each of which can contain other expressions, or specific output. Each expression definition is separated by a new line. A very simple example of a grammar would be:

```
root ::= "hello " name
name ::= "John"
```

### Usage In Faraday

Within Character Settings, scroll down to Model Settings and find the Grammar Rules field. Enter your grammar here and save. The grammar will now be applied to the chat.

A few tips:

- It’s helpful to understand that while grammars in the programming world assume you are following a specific expression, in llama.cpp the model sees possible next tokens. That means that any token from the current expression, plus any token possible in the next expression are options, and if it uses a token from the second expression then it will move to that expression.
- Expressions that allow certain characters seem to work better than expressions that use the ^ to allow any characters but those listed.
- The grammar can guide and frame the text generation, but doesn't really control it. The model will still try to output the next most likely token. If you are asking it to write a token that isn't ever likely, it will just work around your request, or think for a long time.
- Grammars reduce the probability of tokens that don’t match the instructions. However, the LLM only selects tokens from a pool of probable tokens. The outcome is that, if your grammar removes all of the likely next tokens from the ‘good’ pool, your generation will slow down or stall out.
- Expressions that contain layers of […]_ or […]+ can lead to stall-outs. This seems to be related to the LLM needing to apply multiple layers of grammar calculations, rather than just one. Ideally, you want to give any + or _ statement an ‘exit condition’ so that each one has a distinct end. For instance [“X”]+ “\n” will produce X’s until the model chooses to generate a new line and then that statement is done.
- The quotation mark is a part of the grammar syntax. As such, to output a quotation mark, you may need to write it as \” to tell the grammar it’s a character. This isn’t required inside a bracket statement as they are character based and quotations don’t function within them.

### Examples

Sample grammar for a Roleplay where the AI plays three different characters. Change the character names to suit your chat.

```
root ::= action character (character | action)* "\n#"
narration ::= "Scene:" action
action ::= " *" dialogue "* "
dialogue ::= [a-zA-Z .,'?!:;0-9]+
character ::= "\n--" ("Cassandra" | "Tessa" | "Britney") ": " (action)? dialogue
```

A basic chat grammar that will always start with actions/descriptions in asterisks, followed by dialogue and more actions as the model sees fit.

```
root ::= action dialogue (action | dialogue)* "\n#"
action ::= " *" [^\r\n#]+ "* "
dialogue ::= [^\r\n#]+
```

A grammar made to control the output of a character that writes Stable Diffusion Prompts, guiding the AI to add weights.

```
root ::= combo [combo] combo [combo]*
object ::= [a-zA-Z" "]+
weight ::= [0-1] "." [0-9] [0-9]
combo ::= ["("]? object [":" weight ") "]?
```

A grammar to always respond with at least three paragraphs.

```
root ::= text "\n" text "\n" text "\n" "\n#"
text ::= [a-zA-Z0-9,.?!" ':;\n]+
```

### More Resources

- [The Grammar File Format](https://matt.might.net/articles/grammars-bnf-ebnf/)
- [Official Llama.cpp README](https://github.com/ggerganov/llama.cpp/blob/master/grammars/README.md)

## World Info (Lorebooks)

There are limits to the amount of information we can, or want, to fit into our standard character info. However, there may be information that you want the AI to understand beyond this 'basic' information without filling your permanent context. A method to address this is World Info, also known as Lorebooks. World info is a keyword with an associated entry. When this keyword is used in your chat, the entry is added to the chat context so that the AI understands what this word means in this chat.

A basic example would be:

```
keyword: home
prompt: A two story house on a cul-de-sac in a middle class neighborhood. {user}'s bedroom is on the top floor. The house is cozy.
```

So, when the user or character talk about home during the chat, the keyword and entry from above are added to the context (just before the last two chat messages) so that the AI understands what is meant by home. If the character is supposed to be your friend, this is something they should know, but it's not necessarily something you want to put into the character info that is always in your permanent context. The keyword entry will stay in memory for limited time; The entry will stay in memory as long as it appears in the last four messages of chat.

World Info can be especially helpful for characters that are from a fictional world, allowing you to define a bunch of non-character related information about the world without overloading your character info. (This is where the term Lorebook comes from) It can also be used to emphasize or explain terms that may be used in a chat that may not mean, in this context, the same thing they typically mean.

### Usage in Faraday

Scroll down within character settings to World Info (Lorebooks). Click New Item which will bring up a Keyword / Entry pair. Enter as many associated keywords as you like (eg. home, house, pad) and then the associated entry. Then save your changes and you are ready.

### Brevity

Note that the number of tokens allowed to be used by World Info is limited, so as not to prevent your chat history from being completely removed. As such, it is recommended to write concise prompts for each keyword. Remember that you may have more than one world info item triggered at one time, so they can add up quickly.

### Notes on Implementation

- Lore entries can have multiple keywords associated.
- Lore keywords are not case sensitive, so “Den” would match with “den”, or “dEN”.
- If multiple keywords are found, lore entries are not repeated.
- Lore entries cannot trigger other lore keywords. Lore entries are not searched within when finding Lore keywords.
- The keyword search will match partial words; meaning the lore keyword “den” will match with “hidden” in the chat history.
- Keywords can be multiple words and the search will only find full matches. (a keyword of “the den” won’t be triggered by “hidden” in the chat history, because it doesn’t contain the full keyword.)

## Author's Note

The author's note is an additional prompt text that is sent prior to the last user response. It acts as a way to influence the direction of the AI response. The AI generally gives more weight to information near the end of it's context. Therefore, allowing for a piece of instruction or information to sit right before the latest response, that information should be given extra weight. It also, helpfully, doesn't come as part of the user or character responses, so it won't break immersion when the AI sees it.

Helpful uses of author's note include genre or mood description. Instructions on how the characters are currently feeling, where they currently are, or how they are related can also be helpful information.

Because it's easily accessible, the intent is that the information in the author's note can be changed quickly as the scene or chat unfolds, allowing you to influence what you want to be happening right this moment, as opposed to overall instructions or scenario.

An example might be:

`genre: horror; style: suspenseful with building dread; current location: woods behind the abandoned house. {character} and {user} both suspect each other is the killer.`

This example includes instructions on the current style and atmosphere, as well as details about what is happening right now (as opposed to an overall scenario.) This will help focus the responses in the direction we want for right now, as opposed to overall.

It may help to add something along the following lines to your model instructions to make the author's note more effective: Response adaptability: When prompted with [square brackets], you will interrupt your usual roleplay routine and use your next response to fulfill whatever request is given to you within the [square brackets].

![Edit](/images/authors-note.png)
