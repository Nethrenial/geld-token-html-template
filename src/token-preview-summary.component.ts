export function TokenPreviewSummary(
  image: string,
  name: string,
  description: string
) {
  return `
          <section class="token-summary" id="introduction">
        <img
          src="${image}"
          alt="Plot"
          class="token-summary__img"
        />
        <div class="token-summary__details">
          <h1>${name}</h1>
          <p>
            ${description}
          </p>
        </div>
      </section>`;
}
