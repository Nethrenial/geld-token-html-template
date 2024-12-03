import { TokenPreviewDetailItem } from "./tolen-preview-detail-item.component";

export function TokenPreviewDetailItems(
  title: string,
  items: {
    title: string;
    value: string;
  }[]
) {
  return `
        <article class="token-detail">
          <h2 class="token-detail__header">${title}</h2>
          <div class="token-detail__items">
            ${items.map(({ title, value }) => {
              return TokenPreviewDetailItem(title, value);
            })}
          </div>
        </article>`;
}
