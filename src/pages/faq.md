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
3. Choose **cuBlas 12.1** for NVIDIA cards or **clblast** for AMD. (For older systems, consider **cublas 11.7**).

Faraday now leverages your GPU! More VRAM translates to quicker text generation.

### Manual VRAM Management:

For advanced users, switch from auto to manual VRAM allocation. Exercise caution; this process demands expertise.
