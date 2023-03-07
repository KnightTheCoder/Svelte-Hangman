<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let phrase = '';
  const dispatch = createEventDispatcher<{ replay: null; back: null }>();

  let tries = new Array<string>();
  const isALetter = /^\p{Letter}$/u;

  $: solvablePhrase = phrase.length
    ? [...phrase]
        .map((char) =>
          !isALetter.test(char) ? char : tries.includes(char) ? char : '_'
        )
        .reduce((p, c) => `${p} ${c}`)
    : '';
  $: failedTries = tries.filter((char) => !phrase.includes(char));
  $: gameState = !solvablePhrase.includes('_')
    ? 'won'
    : failedTries.length >= 7
    ? 'lost'
    : '';
  $: isGameWon = gameState == 'won';
  $: isGameOver = gameState == 'lost';

  $: src = `images/hangman${failedTries.length}.png`;

  const handleKey = (e: KeyboardEvent) => {
    let char = e.key.toUpperCase();

    if (gameState) {
      if (char == 'ENTER') {
        playAgain();
      } else if (char == 'ESCAPE') {
        goBack();
      }
    }

    if (gameState || tries.includes(char)) return;

    if (isALetter.test(char)) {
      tries = [...tries, char];
    }
  };

  const playAgain = () => {
    console.log('again');
    tries = [];
    dispatch('replay');
  };

  const goBack = () => {
    dispatch('back');
  };
</script>

<svelte:window on:keydown={handleKey} />

{#if gameState}
  <h1
    class="text-center"
    class:text-success={isGameWon}
    class:text-danger={isGameOver}
  >
    {isGameOver ? 'Game over!' : 'You win!'}
  </h1>

  <button class="d-block my-3 mx-auto btn btn-success" on:click={playAgain}>
    Play again
  </button>

  <button class="d-block my-3 mx-auto btn btn-info" on:click={goBack}>
    Back
  </button>

  {#if isGameOver}
    <h2 class="text-center">
      Correct: {phrase}
    </h2>
  {/if}
{/if}

<h2 class="text-center">
  {#each solvablePhrase as letter}
    {@html letter == ' '
      ? '&nbsp;'
      : isALetter.test(letter)
      ? `<u>${letter}</u>`
      : letter}
  {/each}
</h2>

{#if failedTries.length}
  <div class="text-danger text-center w-25 mx-auto border-white">
    <h4>Wrong letters</h4>

    {#each failedTries as attempt}
      <span class="text-start px-2">
        <em>
          <del>
            {attempt}
          </del>
        </em>
      </span>
    {/each}
  </div>
{/if}

{#if failedTries.length}
  <img class="d-block w-25 mx-auto" {src} alt="hangman" />
{/if}

<style>
  button {
    width: 15%;
  }
</style>
