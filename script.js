<body>
    <header>Mensch Maier-das Spiel</header>
    <div class="container">
        <h1 id="headline">Bitte rate die Zahl, du Spast!</h1>
        <h2 id="displayTries">Versuche: 0</h2>
        <form onsubmit="guessTheNumber(); return false;">
            <input id="myNumber" type="number" required placeholder="Gib a Zoi ei zefix">
            <button>Raten!</button>
        </form>
    </div>

    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
</body>

</html>