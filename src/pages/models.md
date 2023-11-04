# Models

## Quickstart

You just downloaded your first Character, and realize that you need a model to start chatting. You go to the model manager, or if you’re a hot shot, you go onto huggingface and see that there are hundreds of models of various names, types and sizes. After the panic subsides, you go onto Discord, and you ask the question: “which model should I use?”. Unfortunately, there is no objectively best answer to this question, but we can guide you on your path to self-discovery with some advice.

Quick answer:

- General Model: &ensp; **Llama 2 - OpenOrca Platypus2 13B Q4_K_M** &ensp; *16GB RAM or greater.*
- Lower Resources: &ensp; **Llama 2 - Luna AI 7B Q4_K_M** &ensp; *8GB of RAM or greater*
- Demon on Your Shoulder &ensp; **MLewd-ReMM 20B Q4_k_M** &ensp; *32GB of RAM or greater.*

These models are very good at pretty much any form of chat or roleplay you throw at them. They are all uncensored, unlike what you may experience with ChatGPT, so you shouldn't hit any constraints in your interactions, whether you are looking for health advice, action roleplay, or anything else. For those looking for more intense interactions, while many other models will follow you into depravity, MLewd will lead you there.

## LLaMa? LLaMa2?

**Short answer:** Just use Llama2 based models. It's better in pretty much every way.

Faraday is used to run local large language models (LLM's) that generate text by predicting what should follow the text given to it. The models themselves are trained to predict the next word using billions of different texts, scraped from many sources. In this way they *appear* to contain a huge wealth of information because they are *very* good at predicting the next word. Many of these models have been 'tuned' to follow instructions and participate in chat or roleplay. In Faraday, users create 'characters' that include these instructions and give the AI a persona that they write from the persective of.

Faraday runs its own version of the Llama.cpp backend, which is a way to run models based on the LLaMa architecture (developed and provided by Meta). LLaMa is generally considered a large evolution over previous language model types. More recently, Meta released a second version of LLaMa helpfully named Llama 2 (yes! We don’t even have to capitalize random letters in the word now!). Llama 2 is further trained, leading to higher quality output. The models in the model hub are ‘fine-tunes’ based on either of these base models. More recently we have gotten a handful of different model bases, for instance Mistral is a very promising open source base model recently released in a 7B version.

## File Formats

There are multiple Large Language Model (LLM) file formats, and each is used in a different way. The three most relevant ones now are FP16, GPTQ, GGUF, and GGML. In short, FP16 is the original model created through training, GPTQ is a format used for inference fully on the GPU, and GGML and GGUF are formats that run much faster on the CPU.

**Faraday works with GGUF files, and GGML files may work but are deprecated.** All the files on Faraday's supported models list are of either GGML or GGUF.

### Formats that are not compatible with Faraday

**FP16:** A half-precision floating point format which uses 16 bits to store a floating-point number. Machine Learning uses half-precision because it is a good trade-off between memory usage and precision. Models in this format are typically very large file sizes and are composed of multiple .bin files.

**GPTQ:** Short for Generative Pretrained Transformer model, this is a file type used in many LLM interfaces that runs primarily on the GPU. It is more compact than the multi-file FP16 but limited to inference on the GPU (or very slow CPU use). There is a lot of work being done currently to improve this format and make it more usable for more people.

**AWQ:** A form of GPTQ model that has been quantized in a different way in order to be smaller and run faster.

**LLaVa:** A multimodal model (meaning it can understand images as well as text) that may someday be compatible with Faraday, but, for now, is not.

## Parameter Size (3B, 7B, 13B, 30B, 33B, 70B)

The ‘B number’ of a model represents the number of parameters of which the model is composed. If quantization is like changing the resolution of an image, then parameters are the number of colors in the image; 70B is HDR and 3B is a gif from the 90s. Faraday will give you some guidance on which number of parameters to use, with the most popular being 7B and 13B. A 13B should be able to run on 16GB of RAM, while a 7B should work on 8GB of RAM. For those with beefy machines, you can try your luck with a 33B or 70B model, though regardless of your system’s specs, those will be considerably slower.

If you just came from ChatGPT, Poe, Character.ai, etc., please keep in mind that the models you can run locally on your machine are different than an online service. For instance, ChatGPT-4 is believed to have 1.76 trillion parameters, which ::checks math:: is a lot more than 13 billion. Realistically though, 70B models have been shown to perform equivalent to ChatGPT 3 in real world testing, and 7B or 13B models can be perfectly usable if you keep their limits in mind. Generally, the larger the model, the more nuanced it's responses will be and the better it will follow context and instructions.

## Finetunes and Mixes

Finally, we come to the many silly names you’ll see in the model hub. Each of these represents a different fine-tune or merging of fine-tunes of the base model.
A fine-tune is a way of directing the base model to respond in specific ways. The base Llama models are text completion models, so people have found ways to tune them to respond as if they are chatting with us. Others have tuned the model to better understand roleplay formats, and some have tuned the models to always write a story.
Then, people start merging these fine-tunes together in an effort to create models that are hoped to be 'better than the sum of their parts'. A good example of this is Chronos Hermes. The chronos finetune is very descriptive, but also insane. The hermes finetune is very coherent but kind of boring; the merger of the two created an extremely creative model that is neither insane, nor boring.

Exploring the different fine-tunes can feel overwhelming, but you are likely not missing out on some amazing new finetune that changes everything, so there's no need to worry about the pace of development. We'll try to update our top recommendations over time in the guide and in the model hub.

## Quants

GGML/GGUF files are quantized, which essentially means they are shrunk from the original model. There is a trade-off between quantization and quality of output. It’s like the resolution of an image, where there’s a point you start noticing it looks pixelated. The exact trade-off in levels of quantization is heavily studied and debated, but until you know more, assume that you should stick with models of type Q4_K_M.

Another helpful way of visualizing the impact of quantization is to think of it as how specific a response can be to the question *"Tell me about pizza"*.
- With Q1 you have two possible outputs: *'It's good'*, and *'It's bad'*.
- With Q2 you have four possible outputs: *'It's excellent'*, *'It's good'*, *'It's okay"*, and *'It's bad'*.
- With Q3 you have eight possible outputs: *'It's excellent'*, *'It's very good'*, *'It's good'*, *'It's decent'*, *'It's okay'*, *'It's kind of bad'*, *'It's bad'*, *'It's horrible'*.
...And so on with Q4, Q5, Q6, and Q8. As you reduce the quantization, your possible responses become less and less precise. They may still be generally correct, but they won't be *specifically* correct. For pizza, we only need one answer: *'It's great'*, but for a more complex subject, you likely want the model to have more nuance. However, remember that this analogy is an oversimplification, and real-world quantization, especially in neural networks, deals with numerical values at a much larger complexity level.
(*Thank you Discord user @Sinnner for suggesting this metaphor*)

There are multiple different levels of quantization, ranging from 2bit to 8bit, each with their own level of trade-off. For inference (as opposed to training), the drop in quality of the model does not scale linearly with the reduction in bits. For instance, there is very little difference in the quality of response from an 8-bit quantized model versus a full FP16 model, whereas there is a notable difference with a 2-bit. Think of it like going from a 10 mega-pixel image to a 5 mega-pixel image, then down to a 512x512 pixel image. We generally find the ‘sweet spot’ to be models of 4- or 5-bit quantization. This is important because smaller file sizes work faster and with less hardware.

### K-Quants

'K-quants' are a newer form of quantization that changes how the quantization process works. While the exact difference between these and a ‘regular’ quant is complicated, they are generally smaller file sizes for the same quality of output, so GGML files ending in “Q4_K_M” or “Q5_K_M” are currently recommended for most users. The Q4 describes the level of quantization, the K denotes that it’s a “k-quant” and the M denotes that it’s a medium size k-quant.

### Size vs. Perplexity Trade-Off

Perfpexity is a metric for quality of text generations. A lower perplexity value is better.

![Quants](/images/quants.png)

On a technical level, parameters are how detailed a model can get in its response. It’s how finely it stores the influence of the data it was trained on. Quantization is taking that full 16 bit format those parameters are saved in and reducing them down. So the model still sees the detailed influence, but it conveys it slightly less well. It turns out that compressing that data leads to relatively little data loss; the information in parameters doesn’t really seem to need the level of precision it’s given. The parameters are far more important. In this way it’s comparable to resolution and number of colors in an image. Parameters are like the resolution at which we can see the data, while quants are like the number of colors possible in each pixel.
