<script lang="ts">
  import PhraseContainer from '@/lib/components/PhraseContainer.svelte';
  import { getRandomPhrase } from '@/lib/functions/getRandomPhrase';

  let phrase = '';
  const languages = ['en', 'hu'];
  let language = 'en';
  let gameStarted = false;

  const getPhrase = async () => {
    phrase = getRandomPhrase(language).toUpperCase();
  };

  const startGame = () => {
    if (!gameStarted) {
      gameStarted = true;
      getPhrase();
    }
  };

  const goBack = () => {
    gameStarted = false;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      startGame();
    }
  };
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if !gameStarted}
  <div class="w-25 mx-auto">
    <h3 class="text-center">Choose a language</h3>
    <select class="form-select bg-dark text-white" bind:value={language}>
      {#each languages as lang}
        <option value={lang}>{lang}</option>
      {/each}
    </select>

    <button class="btn btn-success w-100 my-3" on:click={startGame}>
      Start game
    </button>
  </div>
{:else}
  <PhraseContainer on:replay={getPhrase} on:back={goBack} {phrase} />
{/if}
