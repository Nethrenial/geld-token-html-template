export function TokenPreviewTimelineItem(title: string, value: string) {
    return `
    
              <div class="timeline-item">
              <header class="timeline-item__header">${title}</header>
              <p>${value}</p>
              <footer class="timeline-item__footer">
                <button class="btn btn--export">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.166 15L19.166 10L14.166 5"
                      stroke="#171717"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 5L2.5 10L7.5 15"
                      stroke="#171717"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  Export JSON
                </button>
                <button class="btn btn--view">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66699 9.99984C1.66699 9.99984 4.16699 4.1665 10.0003 4.1665C15.8337 4.1665 18.3337 9.99984 18.3337 9.99984C18.3337 9.99984 15.8337 15.8332 10.0003 15.8332C4.16699 15.8332 1.66699 9.99984 1.66699 9.99984Z"
                      stroke="#EDEDED"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                      stroke="#EDEDED"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  View
                </button>
              </footer>
            </div>
    `
}