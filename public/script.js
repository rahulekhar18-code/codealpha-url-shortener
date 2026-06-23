async function shortenUrl() {

    const longUrl =
        document.getElementById("urlInput").value.trim();

    const result =
        document.getElementById("result");

    if (!longUrl) {

        result.innerHTML =
        `<p class="error">Please enter a URL</p>`;

        return;
    }

    try {

        const response = await fetch("/shorten", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                longUrl
            })

        });

        const data = await response.json();

        result.innerHTML = `
        <div class="result-box">

            <div class="result-title">
                🔗 Your Shortened URL 🔗
            </div>

            <div class="url-wrapper">

                <input
                class="short-url"
                id="shortUrl"
                value="${data.shortUrl}"
                readonly>

                <button
                class="icon-copy"
                onclick="copyUrl()">
                📋
                </button>

            </div>

            <div class="action-buttons">

                <button
                onclick="window.open('${data.shortUrl}','_blank')">
                🔗 Open Link
                </button>

                <button
                onclick="copyUrl()">
                📋 Copy Link
                </button>

            </div>

        </div>
        `;

    } catch {

        result.innerHTML =
        `<p class="error">Something went wrong</p>`;
    }
}

function copyUrl() {

    const shortUrl =
        document.getElementById("shortUrl");

    navigator.clipboard.writeText(
        shortUrl.value
    );

    alert("URL Copied 🚀");
}