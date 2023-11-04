# Model Settings
The basic function of the language models we use is to set the probability of every possible token based on the tokens that came before it. It then chooses one of those tokens to output, then recalculates the probabilities for the next token. So, at each generation of a token, we have a 'pool' of hundreds of tokens, each with an associated probability. Unfortunately, we can't just use the most probable token, as that will typically be kind of boring and can lead to repetition and patterns. So, to help select the next token, we use a number of *samplers* to reduce the pool of possible tokens to a set that is then randomly selected from. The following samplers are available in Faraday. These samplers help remove unlikely or unwanted tokens and provide a pool of tokens that should make sense, all based on their probabilities. Adjusting the parameters of each, can influence how conservative or how creative the models may respond.

![Faraday Model Settings](/images/model_settings.png)

## Temperature
- **Default:** 0.8
- **Definition:** Value used to modulate the probablities for the next token. (How likely the model is to choose a lower probability token next.)
- **Explanation:** Temperature affects how improbable of a token can be selected next. A very low temperature setting (0-.2) can lead to repetition as the model thinks that the most likely token is a repetition of the previous one (*catcatcatcat*), while a very high temperature (2.0 or higher) can lead to nonsensical output as the next token is unrelated to the previous (*cattreestew*). This ends up relating to how creative the model output will be. Typical values are between 0.5 (*cat climbed a tree*) and 1.2 (*cat spoke eloquently*).

## Top P
- **Default:** 0.9
- **Definition:** Reduces the pool to tokens that are high probability (probabilities adding up to the top P value or higher.)
- **Explaination:** Top P ensures that the token selection pool is limited to only very likely tokens, while taking into account the fact that there may not be many tokens that are very likely. If you're next token is completing the sentence *"The door swung __*" it won't take the probabilities of many tokens to add up to over 0.9. (*closed, open, wide*, for instance.). However, if you have a somewhat strange sentence you are completing, like *"The door puffed into __"*, there won't be super-probable tokens, so your pool will be larger - it will take more probabilities to add up to 0.9 (*dust, space, a cloud, existence, the room, smoke*). This ensures that your token pool adjusts size based on the relative probabilities of tokens.

## Top K
- **Default:** 30
- **Definition:** The number of high probabilty tokens that are kept for the selection pool.
- **Explanation:** Similar to Top P, but less dynamic. Top K is just saying "only keep __ number of tokens from the pool" This is a simple way of removing most tokens from the pool, but if you have three very probable tokens and then a big drop off in probabilities, you may end up with a pool that contains mostly junk.

## Repeat Penalty
- **Default:** 1.0*
- **Definition:** How heavily a repeating token is penalized.
- **Explanation:** To avoid unnecessary repetition of words - which the model likes to do - repeat penalty looks at past tokens and reduces the probablilities of tokens that it finds having already occurred. This makes those tokens less likely to be selected. 1.0 is inactive. A number below that will encourage repetition and a higher number will discouage. Typical values range between 1.0 - 1.2.

*Faraday defaults repeat penalty to be inactive as it behaves poorly when mirostat is turned on.

## Repeat Penalty Tokens
- **Default:** 128
- **Definition:** The number of tokens back in the context that is considered when assessing repeat penalty.
- **Explanation:** Adjust this to affect how far back repetition penalty looks. Increaseing this may make the model more conservative as it starts to see more necessary repetition.

## Mirostat
- **Default:** Enabled
- **Definition:** Mirostat adjusts the Top K dynamically to create a pool of tokens that will lead to a specific level of perplexity, or creativity. Note that Faraday uses Mirostat 2, not Mirostat 1.
- Explanation: Mirostat replaces the static Top K value with a dynamically adjusted Top K that adjusts the size of the token pool to ensure an optimal level of creativity is achieved. It's a complicated system but works well to make model responses more natural sounding while maintaining creativity. Note that while you can use repetition penalty with Mirostat enabled, we have found that doing so leads the model to quickly devolve into nonsense.

## Mirostat Learning Rate
- **Default:** 0.1
- **Definition:** Learning rate determines how quickly the entropy (amount of creativity) is adjusted.
- **Explanation:** A higher learning rate will more quickly correct the entropy of the next token. The authors of the Mirostat paper recommend 0.1, but a value between 0.05 - 0.2 can be used.

## Mirostat Entropy
- **Default:** 5.0
- **Definition:** The desired tau, or perplexity value that mirostat will aim to achieve.
- **Explanation:** Increasing Mirostat Entropy will increase the perplexity target, leading to less coherent, but more creative output; lowering the value will be more coherent, but can cause repetition and 'boredom'.
Some sources recommend that you set the entropy based on the size of the model: 5 for a 13B model, 6 for a 7B model and 4 for a 70B model.
