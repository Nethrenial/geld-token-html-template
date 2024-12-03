import "./styles.scss";
import { TokenPreviewDetailItems } from "./token-preview-detail-items.component";
import { TokenPreviewHeaderComponent } from "./token-preview-header.component";
import { TokenPreviewSummary } from "./token-preview-summary.component";
import { TokenPreviewTimelineItem } from "./token-preview-timeline-item.component";
import { stringToHtml } from "./utils";

const currentYear = new Date().getFullYear();

const tokenDetails = {
  tokenImage: "https://placehold.co/600x400",
  tokenName: "The Geld Token",
  tokenDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil
            illo fugit incidunt at dicta officiis blanditiis, ducimus maiores,
            id ut molestiae eius vero tempora accusamus, exercitationem omnis
            saepe quod a! Pariatur magnam asperiores qui, fugiat corrupti dolor
            voluptatum praesentium, ipsum molestiae eligendi, facere quas et
            harum ex? Reprehenderit, tempora. Recusandae, nemo quam.`,
  tokenDetails: [
    {
      title: "Plot",
      items: [
        {
          title: "Plot Id",
          value: "Some Plot ID",
        },
      ],
    },
    {
      title: "Farmer",
      items: [
        {
          title: "Plot Id",
          value: "Some Plot ID",
        },
      ],
    },
    {
      title: "Carbon Credit",
      items: [
        {
          title: "Plot Id",
          value: "Some Plot ID",
        },
      ],
    },
  ],
  tokenTimeline: [
    {
      id: 1,
      title: "Site Preparation",
      value: "Weeding",
    },
    {
      id: 2,
      title: "Site Preparation",
      value: "Digging",
    },
  ],
};

const tokenElement = document.querySelector(".token");

console.log(tokenElement);

const tokenHTMLCollection = stringToHtml(
  `${TokenPreviewHeaderComponent()}
   ${TokenPreviewSummary(
     tokenDetails.tokenImage,
     tokenDetails.tokenName,
     tokenDetails.tokenDescription
   )}

      <section class="token-details" id="token-details">
      ${tokenDetails.tokenDetails
        .map(({ title, items }) => {
          return TokenPreviewDetailItems(title, items);
        })
        .join("")}
        <article class="token-detail" id="timeline">
          <h2 class="token-detail__header">Timeline</h2>
          <div class="timeline-items">
          ${tokenDetails.tokenTimeline
            .map(({ title, value }) => {
              return TokenPreviewTimelineItem(title, value);
            })
            .join("")}
          
          </div>
        </article>
      </section>
      <footer class="token-footer">
            All rights reserved - ${currentYear} Geld Network
      </footer>
      `
);

// add all items to the token element
tokenElement?.append(...tokenHTMLCollection);
