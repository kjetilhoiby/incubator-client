<script>
  import { state } from "../data/stores";
  import Header from "./Header.svelte";
  import Navigation from "./Navigation.svelte";
  import Content from "./Content.svelte";
  import Footer from "./Footer.svelte";
  export let context;
  let currentState = $state;

  fetch(context.config.incubator)
    .then(res => res.json())
    .then(data => {
      state.update(oldState => {
        oldState.status = data;
        return oldState;
      });
    });

  /* const status = {
    startTime: "2021-01-25T12:37:35.876Z",
    runTime: 13996,
    devices: {
      Tørketrommel: {
        alias: "Tørketrommel",
        milliwatts: 362,
        session: {
          startTime: "2021-01-25T16:30:51.115Z",
          min: 10000,
          max: 0,
          updates: 0,
          average: 0
        }
      },
      Vaskemaskin: {
        alias: "Vaskemaskin",
        milliwatts: 420,
        session: {
          startTime: "2021-01-25T16:30:51.113Z",
          min: 10000,
          max: 0,
          updates: 0,
          average: 0
        }
      }
    },
    sessions: [
      {
        startTime: "2021-01-25T15:00:37.952Z",
        min: 10000,
        max: 2069578,
        updates: 2226,
        average: 485183,
        endTime: "2021-01-25T15:37:45.782Z",
        duration: 2228,
        device: "Vaskemaskin"
      }
    ],
    activeSessions: [],
    numberofSessions: 1
  }; */
</script>

<style>

</style>

<Header {context} />
<Navigation {context} />
<Content {context} />
<Footer {context} />
