# Frequently Asked Questions

## How do I import Tavern-style character cards?

Faraday supports Tavern-style PNG character card imports (see screenshot below).

For Tavern or SillyTavern: just import the .png file directly into Faraday.

JSON format cards are not currently supported.

![Imports](/images/character_imports.png)

## How do I import conversations from Character.ai?

Follow these steps:

1. Install **CAI Tools** Chrome extension: [Link](https://chrome.google.com/webstore/detail/cai-tools/nbhhncgkhacdaaccjbbadkpdiljedlje).
   - Navigate to the desired chat on character.ai.
   - Activate the CAI Tools extension.
   - Click "Download as Oobabooga chat". (Refer to 1st screenshot)
2. In Faraday, either create or import the relevant Character.
3. On the Chat page in Faraday, click "Import Chat from c.ai" at the top. (Refer to 2nd screenshot)

> **Note**: character.ai and Faraday function differently, especially with Llama models. Imported characters might not behave identically. Adjust character details in Faraday for desired responses.

![Oobabooga](/images/download_as_oobabooga.png)

![C.AI](/images/import_cai_chat.png)

## How do I change my model download location?

Go to the "Manage Models" page and click on the "Change Download Location" button.

## How do I use model files that I already have downloaded?

We don't recommend using custom models, but if you are an advanced user, click "Show in Finder" (see screenshot) and drag in your models there. Make sure they all end in .gguf!

![Manage Models](/images/manage_models.png)

## How do I use GPU Acceleration?

While the GGUF format is optimized to run effectively on CPU, the GPU is significantly better at performing the types of calculations that are required for text generation (inference). As such, Faraday allows the user to offload part of the model (layers) to GPU for speedier operation. With the correct settings, Faraday will attempt to optimize the number of model layers sent to the GPU based on your hardware and the model size, giving you the fastest generation possible with your hardwar

### On Windows:

1. Open Faraday's settings page.
2. Navigate to the "GPU Support" section and pick your dedicated GPU (do not use integrated GPUs).

Faraday now leverages your GPU! More VRAM translates to quicker text generation.

![GPU Support](/images/gpu_support.png)

### Manual VRAM Management:

Adcanced users can try switching from auto to manual VRAM allocation to optimize speeds. Exercise caution; this process demands expertise. Please note that every system configuration uses VRAM a little differently and the VRAM amount listed in Faraday is very unlikely to match that atually used (It will always be lower than actual usage.).

To optimize your VRAM usage, you will need to run Task Manager and note how much VRAM is filled after you adjust the manual VRAM setting and enter a chat. If you get within about 300MB of your GPU's VRAM amount, you will start using shared memory, which is slow and inefficient. Again, all of this is *very* system dependent and also depends on what else you have open on your computer. Faraday's Auto GPU mode should always 'just work' whereas manual may need periodic adjustments even after you get it just right.
