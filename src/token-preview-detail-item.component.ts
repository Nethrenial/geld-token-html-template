export function TokenPreviewDetailItem(title: string, value: string) {
  return `<div class="token-detail-item">
            <header class="token-detail-item__header">
                ${title}
            </header>
            <p>${value}</p>
        </div>`;
}
